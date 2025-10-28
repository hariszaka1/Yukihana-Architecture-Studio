import React, { useState, useEffect } from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import Button from '../components/Button';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductContext';
import AnimatedLink from '../components/AnimatedLink';
import { usePageTransition } from '../contexts/PageTransitionContext';

const ProductDetailPage: React.FC = () => {
    const { id } = ReactRouterDOM.useParams<{ id: string }>();
    const { transitionTo } = usePageTransition();
    const { products } = useProducts();
    const product = products.find(p => p.id === id);

    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const handleAddToCart = () => {
        if (product) {
            addToCart(product, quantity);
            alert(`${quantity} x '${product.name}' telah ditambahkan ke keranjang!`);
        }
    };

    if (!product) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-center px-6">
                <div className="glass-panel p-12">
                    <h1 className="text-4xl font-bold text-brand-text-light dark:text-white mb-4">404 - Produk Tidak Ditemukan</h1>
                    <p className="text-gray-600 dark:text-brand-gray mb-8">Maaf, produk yang Anda cari tidak ada.</p>
                    <Button onClick={() => transitionTo('/produk')}>Kembali ke Produk</Button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                <div className="glass-panel p-6 sm:p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div>
                            <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-xl" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs bg-brand-yellow text-brand-dark font-semibold px-2 py-1 rounded self-start mb-3">{product.category}</span>
                            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-brand-text-light dark:text-white mb-4">{product.name}</h1>
                            <p className="text-3xl font-bold text-brand-yellow mb-6">
                                Rp {product.price.toLocaleString('id-ID')}
                            </p>
                            <article className="prose prose-lg max-w-none mb-8">
                                <p>{product.description}</p>
                            </article>
                            
                            <div className="mt-auto pt-6 flex items-center gap-4">
                               <div className="flex items-center border border-black/10 dark:border-white/20 rounded-lg">
                                  <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-3 text-lg font-bold hover:bg-black/5 dark:hover:bg-white/10 rounded-l-lg">-</button>
                                  <input type="number" readOnly value={quantity} className="w-16 text-center bg-transparent border-x border-black/10 dark:border-white/20 focus:outline-none" />
                                  <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-3 text-lg font-bold hover:bg-black/5 dark:hover:bg-white/10 rounded-r-lg">+</button>
                               </div>
                                <Button onClick={handleAddToCart} className="flex-grow">
                                    Tambah ke Keranjang
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <AnimatedLink to="/produk" className="text-brand-text-light dark:text-white font-semibold hover:text-brand-yellow transition-colors text-lg">
                        &larr; Kembali ke Daftar Produk
                    </AnimatedLink>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;