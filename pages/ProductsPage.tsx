import React from 'react';
import AnimatedLink from '../components/AnimatedLink';
import PageBanner from '../components/PageBanner';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { useCart } from '../contexts/CartContext';
import { useProducts } from '../contexts/ProductContext';
import { Product } from '../types';

const ProductsPage: React.FC = () => {
    const { addToCart } = useCart();
    const { products } = useProducts();

    const handleAddToCart = (product: Product) => {
        addToCart(product, 1);
        alert(`'${product.name}' telah ditambahkan ke keranjang!`);
    };

    return (
        <div>
            <PageBanner title="Produk Digital & Layanan" />
            <div className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <section className="glass-panel p-6 sm:p-8 md:p-12">
                    <SectionTitle title="Jelajahi Produk Kami" subtitle="Katalog" />
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <div key={product.id} className="glass-panel flex flex-col overflow-hidden transition-all duration-300 hover:scale-105 glow-on-hover">
                                <AnimatedLink to={`/produk/${product.id}`} className="block">
                                    <img src={product.image} alt={product.name} className="w-full h-60 object-cover" />
                                </AnimatedLink>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex-grow">
                                        <span className="text-xs bg-brand-yellow text-brand-dark font-semibold px-2 py-1 rounded">{product.category}</span>
                                        <h3 className="text-lg sm:text-xl font-bold mt-3 mb-2 text-brand-text-light dark:text-white">
                                            <AnimatedLink to={`/produk/${product.id}`} className="hover:text-brand-yellow transition-colors">{product.name}</AnimatedLink>
                                        </h3>
                                        <p className="text-gray-600 dark:text-brand-gray text-sm mb-4">
                                            {product.description.substring(0, 100)}...
                                        </p>
                                    </div>
                                    <div className="mt-auto">
                                        <p className="text-2xl font-bold text-brand-yellow mb-4">
                                            Rp {product.price.toLocaleString('id-ID')}
                                        </p>
                                        <Button onClick={() => handleAddToCart(product)} className="w-full">
                                            Tambah ke Keranjang
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductsPage;