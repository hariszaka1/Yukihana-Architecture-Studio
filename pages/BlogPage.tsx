import React from 'react';
import AnimatedLink from '../components/AnimatedLink';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import { useBlog } from '../contexts/BlogContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BlogPage: React.FC = () => {
    const { articles, authors } = useBlog();
    const blogSection = useScrollAnimation<HTMLElement>();

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <div>
            <PageBanner title="Blog & Wawasan" />
            <div className="py-16 container mx-auto px-4 sm:px-6 lg:px-8">
                <section ref={blogSection.ref} className={`glass-panel p-6 sm:p-8 md:p-12 transition-all duration-700 ${blogSection.animationClasses}`}>
                    <SectionTitle title="Artikel Terbaru Kami" subtitle="Wawasan Arsitektur" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => {
                            const author = authors.find(a => a.id === article.authorId);
                            return (
                                <div key={article.id} className="glass-panel flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 glow-on-hover">
                                    <AnimatedLink to={`/blog/${article.id}`} className="block">
                                        <img src={article.mainImage} alt={article.title} className="w-full h-60 object-cover" />
                                    </AnimatedLink>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="flex-grow">
                                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-brand-gray mb-2">
                                                <span className="font-semibold text-brand-yellow">{article.category}</span>
                                                <span>{formatDate(article.date)}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mt-2 mb-3 text-brand-text-light dark:text-white">
                                                <AnimatedLink to={`/blog/${article.id}`} className="hover:text-brand-yellow transition-colors">{article.title}</AnimatedLink>
                                            </h3>
                                            <p className="text-gray-600 dark:text-brand-gray text-sm mb-4">
                                                {article.summary}
                                            </p>
                                        </div>
                                        <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/10 text-sm text-gray-500 dark:text-brand-gray">
                                            Oleh: {author?.name || 'Tim Yukihana Studio'}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default BlogPage;