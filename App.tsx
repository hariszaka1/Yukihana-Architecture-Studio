import React, { useLayoutEffect } from 'react';
// FIX: Use namespace import for 'react-router-dom' to resolve module export errors.
import * as ReactRouterDOM from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ContactPage from './pages/ContactPage';
import WhatsAppPopup from './components/WhatsAppPopup';
import PricingPage from './pages/PricingPage';
import { WhatsAppProvider } from './contexts/WhatsAppContext';
import { AuthProvider } from './contexts/AuthContext';
import { ProjectProvider } from './contexts/ProjectContext';
import { ContentProvider } from './contexts/ContentContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import ProtectedRoute from './components/ProtectedRoute';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './contexts/CartContext';
import UserProfilePage from './pages/UserProfilePage';
import ScrollToTopButton from './components/ScrollToTopButton';
import { ThemeProvider } from './contexts/ThemeContext';
import { ProductProvider } from './contexts/ProductContext';
import { MessageProvider } from './contexts/MessagesContext';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import { BlogProvider } from './contexts/BlogContext';
import { PageTransitionProvider } from './contexts/PageTransitionContext';
import PageTransitionLoader from './components/PageTransitionLoader';
import AIGeneratorPage from './pages/AIGeneratorPage';
import { AssetProvider } from './contexts/AssetContext';
import AssetManagerPage from './pages/AssetManagerPage';

const ScrollToAnchor = () => {
    const { hash } = ReactRouterDOM.useLocation();
  
    useLayoutEffect(() => {
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          // Adjust for fixed navbar height
          const navbarHeight = 120; 
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

          window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
          });
        }
      }
    }, [hash]);
  
    return null;
};

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ContentProvider>
          <ProjectProvider>
            <ProductProvider>
              <BlogProvider>
                <AssetProvider>
                  <CartProvider>
                    <MessageProvider>
                      <WhatsAppProvider>
                        <ReactRouterDOM.HashRouter>
                          <PageTransitionProvider>
                            <ScrollToAnchor />
                            <Navbar />
                            <main className="pt-24">
                              <ReactRouterDOM.Routes>
                                <ReactRouterDOM.Route path="/" element={<HomePage />} />
                                <ReactRouterDOM.Route path="/about" element={<AboutPage />} />
                                <ReactRouterDOM.Route path="/services" element={<ServicesPage />} />
                                <ReactRouterDOM.Route path="/portofolio" element={<PortfolioPage />} />
                                <ReactRouterDOM.Route path="/portofolio/:id" element={<ProjectDetailPage />} />
                                <ReactRouterDOM.Route path="/contact" element={<ContactPage />} />
                                <ReactRouterDOM.Route path="/biaya" element={<PricingPage />} />
                                <ReactRouterDOM.Route path="/produk" element={<ProductsPage />} />
                                <ReactRouterDOM.Route path="/produk/:id" element={<ProductDetailPage />} />
                                <ReactRouterDOM.Route path="/ai-generator" element={<AIGeneratorPage />} />
                                <ReactRouterDOM.Route path="/blog" element={<BlogPage />} />
                                <ReactRouterDOM.Route path="/blog/:id" element={<ArticleDetailPage />} />
                                <ReactRouterDOM.Route path="/login" element={<LoginPage />} />
                                <ReactRouterDOM.Route path="/register" element={<RegisterPage />} />
                                <ReactRouterDOM.Route 
                                  path="/admin"
                                  element={
                                    <ProtectedRoute adminOnly={true}>
                                      <AdminDashboardPage />
                                    </ProtectedRoute>
                                  } 
                                />
                                <ReactRouterDOM.Route 
                                  path="/admin/assets"
                                  element={
                                    <ProtectedRoute adminOnly={true}>
                                      <AssetManagerPage />
                                    </ProtectedRoute>
                                  } 
                                />
                              <ReactRouterDOM.Route 
                                  path="/profile"
                                  element={
                                    <ProtectedRoute>
                                      <UserProfilePage />
                                    </ProtectedRoute>
                                  } 
                                />
                                <ReactRouterDOM.Route path="/keranjang" element={<CartPage />} />
                              </ReactRouterDOM.Routes>
                            </main>
                            <Footer />
                            <div className="fixed bottom-6 right-6 sm:bottom-8 sm-right-8 z-50 flex items-end gap-4">
                                <WhatsAppPopup />
                                <ScrollToTopButton />
                            </div>
                            <PageTransitionLoader />
                          </PageTransitionProvider>
                        </ReactRouterDOM.HashRouter>
                      </WhatsAppProvider>
                    </MessageProvider>
                  </CartProvider>
                </AssetProvider>
              </BlogProvider>
            </ProductProvider>
          </ProjectProvider>
        </ContentProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;