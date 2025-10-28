import React from 'react';
import PageBanner from '../components/PageBanner';
import Button from '../components/Button';
import { useCart } from '../contexts/CartContext';
import { CloseIcon } from '../components/icons';
import { useAuth } from '../contexts/AuthContext';
import AnimatedLink from '../components/AnimatedLink';
import { usePageTransition } from '../contexts/PageTransitionContext';

const CartPage: React.FC = () => {
    const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
    const { currentUser } = useAuth();
    const { transitionTo } = usePageTransition();

    const handleCheckout = () => {
        if (!currentUser) {
            transitionTo('/login');
            return;
        }
        alert('Checkout berhasil! (Simulasi). Terima kasih telah berbelanja.');
        clearCart();
        transitionTo('/');
    };

    return (
        <div>
            <PageBanner title="Keranjang Belanja" />
            <div className="py-16 md:py-20 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-panel p-6 sm:p-8 md:p-12">
                    {cartItems.length === 0 ? (
                        <div className="text-center py-8">
                            <h2 className="text-xl sm:text-2xl font-bold text-brand-text-light dark:text-white mb-4">Keranjang Anda kosong.</h2>
                            <p className="text-gray-600 dark:text-brand-gray mb-8">Sepertinya Anda belum menambahkan produk apapun.</p>
                            <Button to="/produk">Jelajahi Produk</Button>
                        </div>
                    ) : (
                        <div className="grid lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-6">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex items-center gap-4 sm:gap-6 p-4 glass-panel">
                                        <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                        <div className="flex-grow">
                                            <AnimatedLink to={`/produk/${item.id}`} className="text-lg font-bold text-brand-text-light dark:text-white hover:text-brand-yellow">{item.name}</AnimatedLink>
                                            <p className="text-gray-500 dark:text-brand-gray text-sm">Rp {item.price.toLocaleString('id-ID')}</p>
                                        </div>
                                        <div className="flex items-center border border-black/10 dark:border-white/20 rounded-lg">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 font-bold hover:bg-black/5 dark:hover:bg-white/10 rounded-l-lg">-</button>
                                            <input type="number" readOnly value={item.quantity} className="w-12 text-center bg-transparent border-x border-black/10 dark:border-white/20 focus:outline-none" />
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 font-bold hover:bg-black/5 dark:hover:bg-white/10 rounded-r-lg">+</button>
                                        </div>
                                        <p className="w-32 text-right font-bold text-brand-text-light dark:text-white text-lg">
                                            Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                                        </p>
                                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-400 p-2 ml-2 sm:ml-4">
                                            <CloseIcon className="w-5 h-5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="lg:col-span-1">
                                <div className="glass-panel p-6 sticky top-32">
                                    <h3 className="text-xl sm:text-2xl font-bold text-brand-text-light dark:text-white border-b border-black/10 dark:border-white/20 pb-4 mb-4">Ringkasan</h3>
                                    <div className="flex justify-between mb-2 text-gray-600 dark:text-brand-gray">
                                        <span>Subtotal</span>
                                        <span>Rp {cartTotal.toLocaleString('id-ID')}</span>
                                    </div>
                                    <div className="flex justify-between mb-6 text-gray-600 dark:text-brand-gray">
                                        <span>Biaya Pengiriman</span>
                                        <span>Gratis</span>
                                    </div>
                                    <div className="flex justify-between font-bold text-brand-text-light dark:text-white text-xl border-t border-black/10 dark:border-white/20 pt-4 mb-6">
                                        <span>Total</span>
                                        <span>Rp {cartTotal.toLocaleString('id-ID')}</span>
                                    </div>
                                    <Button onClick={handleCheckout} className="w-full">
                                        Lanjut ke Checkout
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartPage;