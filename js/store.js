/* ==========================================================================
   FancyVerse - Reactive Local Storage State Management (Store)
   ========================================================================== */

window.store = {
  // Cart Management
  getCart: () => {
    return JSON.parse(localStorage.getItem('fancy_cart') || '[]');
  },

  addToCart: (costumeId, options = {}) => {
    const cart = window.store.getCart();
    const duration = options.duration || 3; // default 3-day rental
    const size = options.size || "M";
    const startDate = options.startDate || new Date().toISOString().split('T')[0];
    
    // Check if same costume + duration + size already in cart
    const existingIndex = cart.findIndex(
      item => item.costumeId === costumeId && item.size === size && item.duration === duration
    );

    if (existingIndex > -1) {
      cart[existingIndex].quantity += (options.quantity || 1);
    } else {
      cart.push({
        costumeId: costumeId,
        quantity: options.quantity || 1,
        duration: duration,
        size: size,
        startDate: startDate,
        addedAt: Date.now()
      });
    }

    localStorage.setItem('fancy_cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    return cart;
  },

  updateQuantity: (costumeId, size, duration, newQty) => {
    let cart = window.store.getCart();
    if (newQty <= 0) {
      cart = cart.filter(
        item => !(item.costumeId === costumeId && item.size === size && item.duration === duration)
      );
    } else {
      const item = cart.find(
        item => item.costumeId === costumeId && item.size === size && item.duration === duration
      );
      if (item) item.quantity = newQty;
    }
    localStorage.setItem('fancy_cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    return cart;
  },

  removeFromCart: (costumeId, size, duration) => {
    let cart = window.store.getCart();
    cart = cart.filter(
      item => !(item.costumeId === costumeId && item.size === size && item.duration === duration)
    );
    localStorage.setItem('fancy_cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cartUpdated'));
    return cart;
  },

  clearCart: () => {
    localStorage.setItem('fancy_cart', '[]');
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  },

  // Wishlist Management
  getWishlist: () => {
    return JSON.parse(localStorage.getItem('fancy_wishlist') || '[]');
  },

  toggleWishlist: (costumeId) => {
    let wishlist = window.store.getWishlist();
    let added = false;
    if (wishlist.includes(costumeId)) {
      wishlist = wishlist.filter(id => id !== costumeId);
      added = false;
    } else {
      wishlist.push(costumeId);
      added = true;
    }
    localStorage.setItem('fancy_wishlist', JSON.stringify(wishlist));
    window.dispatchEvent(new CustomEvent('wishlistUpdated', { detail: { costumeId, added } }));
    return added;
  },

  isInWishlist: (costumeId) => {
    return window.store.getWishlist().includes(costumeId);
  },

  // Bookings & Rentals State
  getRentals: () => {
    const stored = localStorage.getItem('fancy_rentals');
    if (!stored && window.db) {
      localStorage.setItem('fancy_rentals', JSON.stringify(window.db.rentals));
      return window.db.rentals;
    }
    return JSON.parse(stored || '[]');
  },

  addRentalBooking: (bookingData) => {
    const rentals = window.store.getRentals();
    const newRental = {
      id: "RNT-" + Math.floor(1000 + Math.random() * 9000),
      createdAt: new Date().toISOString(),
      status: "Reserved",
      ...bookingData
    };
    rentals.unshift(newRental);
    localStorage.setItem('fancy_rentals', JSON.stringify(rentals));
    window.dispatchEvent(new CustomEvent('rentalsUpdated'));
    return newRental;
  },

  updateRentalStatus: (rentalId, newStatus) => {
    const rentals = window.store.getRentals();
    const target = rentals.find(r => r.id === rentalId);
    if (target) {
      target.status = newStatus;
      localStorage.setItem('fancy_rentals', JSON.stringify(rentals));
      window.dispatchEvent(new CustomEvent('rentalsUpdated'));
    }
  },

  // Enquiries & Bulk Studio Requests
  getEnquiries: () => {
    let enquiries = [];
    try {
      const stored = localStorage.getItem('fancy_enquiries');
      if (stored && stored !== 'undefined' && stored !== 'null') {
        enquiries = JSON.parse(stored);
      } else if (window.db) {
        const initial = window.db.enquiries || window.db.quotes || [];
        enquiries = [...initial];
        localStorage.setItem('fancy_enquiries', JSON.stringify(enquiries));
      }
    } catch (e) {
      if (window.db && (window.db.enquiries || window.db.quotes)) {
        enquiries = [...(window.db.enquiries || window.db.quotes)];
      } else {
        enquiries = [];
      }
      try {
        localStorage.setItem('fancy_enquiries', JSON.stringify(enquiries));
      } catch (err) {}
    }
    return Array.isArray(enquiries) ? enquiries : [];
  },

  addEnquiry: (enquiryData) => {
    const enquiries = window.store.getEnquiries();
    const newEnquiry = {
      id: "ENQ-" + Math.floor(5000 + Math.random() * 5000),
      date: new Date().toISOString().split('T')[0],
      status: "New",
      ...enquiryData
    };
    enquiries.unshift(newEnquiry);
    try {
      localStorage.setItem('fancy_enquiries', JSON.stringify(enquiries));
    } catch (err) {
      console.error('Could not save enquiry to localStorage:', err);
    }
    window.dispatchEvent(new CustomEvent('enquiriesUpdated'));
    return newEnquiry;
  },

  updateEnquiryStatus: (enquiryId, newStatus) => {
    const enquiries = window.store.getEnquiries();
    const target = enquiries.find(e => e.id === enquiryId);
    if (target) {
      target.status = newStatus;
      try {
        localStorage.setItem('fancy_enquiries', JSON.stringify(enquiries));
      } catch (err) {}
      window.dispatchEvent(new CustomEvent('enquiriesUpdated'));
    }
  }
};
