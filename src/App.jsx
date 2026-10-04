import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import MenuView from './components/MenuView';
import AboutView from './components/AboutView';
import CustomizeModal from './components/CustomizeModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import ReceiptModal from './components/ReceiptModal';
import OrderHistoryModal from './components/OrderHistoryModal';
import Footer from './components/Footer';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Load initial cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('kopikita_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Load history transactions from localStorage
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('kopikita_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Modal & Drawer States
  const [customizeItem, setCustomizeItem] = useState(null);
  const [editingCartItem, setEditingCartItem] = useState(null);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [activeTransaction, setActiveTransaction] = useState(null);

  // Sync cart to localStorage and also keep compatible format with original tubes
  useEffect(() => {
    try {
      localStorage.setItem('kopikita_cart', JSON.stringify(cart));
      
      // Simpan format string original "Americano - Ice - Normal" agar kompatibel
      const legacyOrders = cart.map(i => `${i.name} - ${i.temperature} - ${i.sugar}`);
      localStorage.setItem('orders', JSON.stringify(legacyOrders));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Sync history to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kopikita_history', JSON.stringify(history));
    } catch (e) {
      console.error(e);
    }
  }, [history]);

  // Handler: Select item to customize
  const handleSelectItem = (item) => {
    setCustomizeItem(item);
    setEditingCartItem(null);
    setIsCustomizeOpen(true);
  };

  // Handler: Add or update cart
  const handleAddToCart = (orderData) => {
    if (editingCartItem) {
      // Update existing item
      setCart((prev) =>
        prev.map((item) => (item.cartId === editingCartItem.cartId ? orderData : item))
      );
      setEditingCartItem(null);
    } else {
      // Add new
      setCart((prev) => [...prev, orderData]);
    }
    setIsCustomizeOpen(false);
    setIsCartOpen(true); // Auto show cart drawer for feedback
  };

  // Handler: Edit item from cart
  const handleEditItem = (cartItem) => {
    setCustomizeItem(cartItem.item);
    setEditingCartItem(cartItem);
    setIsCartOpen(false);
    setIsCustomizeOpen(true);
  };

  // Handler: Update quantity
  const handleUpdateQuantity = (cartId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(cartId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartId === cartId ? { ...item, quantity: newQty } : item))
    );
  };

  // Handler: Remove item
  const handleRemoveItem = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  // Handler: Open Checkout
  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Handler: Complete Order
  const handleCompleteOrder = (transactionData) => {
    // Simpan customer data ke localStorage persis seperti Tubes PBO
    try {
      localStorage.setItem('customer', JSON.stringify(transactionData.customer));
    } catch (e) {}

    // Add to history
    setHistory((prev) => [transactionData, ...prev]);

    // Clear cart
    setCart([]);

    // Close checkout and open receipt
    setIsCheckoutOpen(false);
    setActiveTransaction(transactionData);
    setIsReceiptOpen(true);
  };

  // Handler: Select historical transaction to view receipt
  const handleSelectHistoryTransaction = (transaction) => {
    setActiveTransaction(transaction);
    setIsReceiptOpen(true);
  };

  const handleClearHistory = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus seluruh riwayat pesanan?')) {
      setHistory([]);
      localStorage.removeItem('kopikita_history');
    }
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5ed] text-forest-950 font-sans selection:bg-gold-500 selection:text-forest-950">
      {/* Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenHistory={() => setIsHistoryOpen(true)}
        onOpenOrderNow={() => {
          setActiveTab('menu');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomeView
            onExploreMenu={() => {
              setActiveTab('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectItem={handleSelectItem}
          />
        )}

        {activeTab === 'menu' && (
          <MenuView onSelectItem={handleSelectItem} />
        )}

        {activeTab === 'about' && (
          <AboutView
            onExploreMenu={() => {
              setActiveTab('menu');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Modals & Drawers */}
      <CustomizeModal
        isOpen={isCustomizeOpen}
        onClose={() => {
          setIsCustomizeOpen(false);
          setEditingCartItem(null);
        }}
        item={customizeItem}
        editingItem={editingCartItem}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
        onProceedCheckout={handleProceedCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onCompleteOrder={handleCompleteOrder}
      />

      <ReceiptModal
        isOpen={isReceiptOpen}
        onClose={() => setIsReceiptOpen(false)}
        transaction={activeTransaction}
      />

      <OrderHistoryModal
        isOpen={isHistoryOpen}
        onClose={() => setIsHistoryOpen(false)}
        history={history}
        onSelectTransaction={handleSelectHistoryTransaction}
        onClearHistory={handleClearHistory}
      />
    </div>
  );
}
