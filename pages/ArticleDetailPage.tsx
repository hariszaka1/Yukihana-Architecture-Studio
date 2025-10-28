import React, { useEffect, useState } from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import { useBlog } from '../contexts/BlogContext';
import { ArticleContentBlock, Comment } from '../types';
import Button from '../components/Button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import AnimatedLink from '../components/AnimatedLink';
import { usePageTransition } from '../contexts/PageTransitionContext';

const ArticleContent: React.FC<{ content: ArticleContentBlock[] }> = ({ content }) => {
    return (
        <div className="prose prose-lg max-w-none">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'heading':
                        // FIX: Use React.createElement for dynamic tag names to resolve JSX-related TypeScript errors.
                        // The original implementation using `<Tag>` caused issues because TypeScript interprets capitalized tags as components, not intrinsic HTML elements.
                        const tag = `h${block.level}`;
                        return React.createElement(tag, { key: index }, block.text);
                    case 'paragraph':
                        return <p key={index}>{block.text}</p>;
                    case 'image':
                        return (
                            <figure key={index} className="my-8">
                                <img src={block.src} alt={block.caption || 'Article image'} className="rounded-lg shadow-lg w-full" />
                                {block.caption && <figcaption className="text-center text-sm italic mt-2 text-gray-500 dark:text-brand-gray">{block.caption}</figcaption>}
                            </figure>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};

const ArticleDetailPage: React.FC = () => {
  const { id } = ReactRouterDOM.useParams<{ id: string }>();
  const { transitionTo } = usePageTransition();
  const { articles, authors } = useBlog();
  
  const article = articles.find(a => a.id === id);
  const author = authors.find(auth => auth.id === article?.authorId);
  const otherArticles = articles.filter(a => a.id !== id).slice(0, 3);
  
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({ author: '', email: '', text: '' });
  const [commentError, setCommentError] = useState('');

  const mainContentAnimation = useScrollAnimation<HTMLDivElement>();
  const sidebarAnimation = useScrollAnimation<HTMLElement>();


  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
        try {
            const storedComments = localStorage.getItem(`comments_${article.id}`);
            if (storedComments) {
                setComments(JSON.parse(storedComments));
            } else {
                setComments([]);
            }
        } catch (e) {
            console.error("Failed to load comments", e);
            setComments([]);
        }
    }
  }, [id, article]);
  
  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (commentError) setCommentError('');
    const { name, value } = e.target;
    setNewComment(prev => ({ ...prev, [name]: value }));
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCommentError('');
    if (!article || !newComment.author.trim() || !newComment.email.trim() || !newComment.text.trim()) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newComment.email.trim())) {
        setCommentError('Format email tidak valid.');
        return;
    }

    const commentToAdd: Comment = {
        id: `comment-${Date.now()}`,
        articleId: article.id,
        author: newComment.author,
        email: newComment.email,
        text: newComment.text,
        timestamp: new Date().toISOString(),
    };

    const updatedComments = [...comments, commentToAdd];
    setComments(updatedComments);
    localStorage.setItem(`comments_${article.id}`, JSON.stringify(updatedComments));
    setNewComment({ author: '', email: '', text: '' });
  };


  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
  };

  if (!article) {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center px-6">
            <div className="glass-panel p-12">
              <h1 className="text-4xl font-bold text-brand-text-light dark:text-white mb-4">404 - Artikel Tidak Ditemukan</h1>
              <p className="text-gray-600 dark:text-brand-gray mb-8">Maaf, artikel yang Anda cari tidak ada atau mungkin telah dihapus.</p>
              <Button onClick={() => transitionTo('/blog')}>Kembali ke Blog</Button>
            </div>
        </div>
    );
  }

  return (
    <div>
      {/* Hero Image */}
      <section className="h-[60vh] bg-cover bg-center bg-fixed relative" style={{ backgroundImage: `url(${article.mainImage})` }}>
        <div className="absolute inset-0 bg-black/50"></div>
      </section>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-48 relative z-10 pb-16">
        <div className="grid lg:grid-cols-12 lg:gap-12">
            
            {/* Main Article Content */}
            <div ref={mainContentAnimation.ref} className={`lg:col-span-8 transition-all duration-700 ${mainContentAnimation.animationClasses}`}>
                <div className="glass-panel p-6 sm:p-8 md:p-12">
                  {/* Article Header */}
                  <header className="mb-8 border-b border-black/10 dark:border-white/20 pb-8 text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-yellow">{article.category}</span>
                    <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-brand-text-light dark:text-white my-3">{article.title}</h1>
                    <div className="flex justify-center flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 dark:text-brand-gray">
                      <span>Oleh: <strong>{author?.name || article.authorId}</strong></span>
                      <span>|</span>
                      <span>Diterbitkan: <strong>{formatDate(article.date)}</strong></span>
                    </div>
                  </header>

                  {/* Article Content */}
                  <article>
                    <ArticleContent content={article.content} />
                  </article>
                  
                  {/* Comments Section */}
                    <section className="mt-12 pt-8 border-t border-black/10 dark:border-white/20">
                        <h3 className="text-2xl sm:text-3xl font-bold text-brand-text-light dark:text-white mb-6">
                            {comments.length} Komentar
                        </h3>
                        {/* Comment List */}
                        <div className="space-y-6 mb-8">
                            {comments.map(comment => (
                                <div key={comment.id} className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center font-bold text-brand-yellow text-xl flex-shrink-0">
                                        {comment.author.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <p className="font-bold text-brand-text-light dark:text-white">{comment.author}</p>
                                            <span className="text-xs text-gray-500 dark:text-brand-gray">
                                                {new Date(comment.timestamp).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 dark:text-brand-gray mt-1">{comment.text}</p>
                                    </div>
                                </div>
                            ))}
                            {comments.length === 0 && (
                                <p className="text-gray-500 dark:text-brand-gray">Belum ada komentar. Jadilah yang pertama!</p>
                            )}
                        </div>

                        {/* Comment Form */}
                        <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-brand-text-light dark:text-white mb-4">Tinggalkan Komentar</h4>
                            <form onSubmit={handleCommentSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="author" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Nama</label>
                                        <input 
                                            type="text" 
                                            id="author" 
                                            name="author" 
                                            value={newComment.author}
                                            onChange={handleCommentChange}
                                            required 
                                            className="w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none" 
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Email</label>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            name="email"
                                            value={newComment.email}
                                            onChange={handleCommentChange}
                                            required 
                                            className="w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none" 
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="text" className="block text-sm font-medium text-gray-500 dark:text-brand-gray mb-2">Komentar</label>
                                    <textarea 
                                        id="text" 
                                        name="text"
                                        value={newComment.text}
                                        onChange={handleCommentChange}
                                        rows={4} 
                                        required 
                                        className="w-full p-3 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/20 rounded-md focus:ring-2 focus:ring-brand-yellow focus:outline-none"
                                    ></textarea>
                                </div>
                                <div>
                                    <Button type="submit">Kirim Komentar</Button>
                                    {commentError && <p className="text-red-400 text-sm mt-2">{commentError}</p>}
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>

            {/* Sidebar */}
            <aside ref={sidebarAnimation.ref} className={`lg:col-span-4 lg:sticky top-28 self-start space-y-8 mt-12 lg:mt-0 transition-all duration-700 ${sidebarAnimation.animationClasses}`}>
                {/* Author Card */}
                {author && (
                    <div className="glass-panel p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 text-brand-text-light dark:text-white">Tentang Penulis</h3>
                        <div className="flex items-center gap-4">
                            <img src={author.image} alt={author.name} className="w-16 h-16 rounded-full" />
                            <div>
                                <h4 className="font-bold text-brand-text-light dark:text-white">{author.name}</h4>
                                <p className="text-sm text-brand-yellow">{author.role}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Other Articles Card */}
                {otherArticles.length > 0 && (
                     <div className="glass-panel p-6">
                        <h3 className="text-lg sm:text-xl font-bold mb-4 text-brand-text-light dark:text-white">Artikel Lainnya</h3>
                        <div className="space-y-4">
                            {otherArticles.map(other => (
                                <AnimatedLink key={other.id} to={`/blog/${other.id}`} className="group flex items-center gap-4 hover:bg-black/5 dark:hover:bg-white/5 p-2 rounded-lg transition-colors">
                                    <img src={other.mainImage} alt={other.title} className="w-20 h-20 object-cover rounded-md flex-shrink-0" />
                                    <div>
                                        <span className="text-xs font-semibold text-brand-yellow">{other.category}</span>
                                        <h5 className="font-semibold leading-tight text-brand-text-light dark:text-white group-hover:text-brand-yellow transition-colors">{other.title}</h5>
                                    </div>
                                </AnimatedLink>
                            ))}
                        </div>
                    </div>
                )}
                 <div className="text-center">
                    <AnimatedLink to="/blog" className="text-brand-text-light dark:text-white font-semibold hover:text-brand-yellow transition-colors text-lg">
                      &larr; Kembali ke Semua Artikel
                    </AnimatedLink>
                </div>
            </aside>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;