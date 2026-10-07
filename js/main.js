/* ==========================================================================
   FancyVerse - Global Core JavaScript (Auth, Toasts, Modals, Interactions)
   ========================================================================== */

// ==========================================================================
// Global Direction (LTR / RTL) & Alignment Manager
// Ensures proper LTR default alignment and unified toggling across all pages
// ==========================================================================
window.applySiteDirection = function(dir) {
  const validDir = dir === 'rtl' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', validDir);
  if (document.body) {
    document.body.setAttribute('dir', validDir);
  }
  localStorage.setItem('fancy_dir', validDir);

  // Sync state & tooltips across all toggle buttons
  const isRtl = validDir === 'rtl';
  const label = isRtl ? 'Switch to LTR Layout' : 'Switch to RTL Layout';
  document.querySelectorAll('#rtlToggleBtn, #mobileRtlToggle, #switcherRtlBtn').forEach(btn => {
    btn.setAttribute('title', label);
    btn.setAttribute('aria-label', label);
    if (isRtl) {
      btn.classList.add('text-theme-accent', 'border-theme-accent');
    } else {
      btn.classList.remove('text-theme-accent', 'border-theme-accent');
    }
  });

  window.dispatchEvent(new CustomEvent('directionChanged', { detail: { dir: validDir } }));
};

window.toggleSiteDirection = function() {
  const current = document.documentElement.getAttribute('dir') || 'ltr';
  const target = current === 'rtl' ? 'ltr' : 'rtl';
  window.applySiteDirection(target);
  return target;
};

// Immediate execution to set direction before paint
(function() {
  const stored = localStorage.getItem('fancy_dir');
  const initialDir = stored === 'rtl' ? 'rtl' : 'ltr';
  document.documentElement.setAttribute('dir', initialDir);
  document.addEventListener('DOMContentLoaded', () => {
    window.applySiteDirection(initialDir);
  });
})();

// Auth Manager
window.auth = {
  login: (email, password) => {
    if (email === 'admin@fancyverse.com' && password === 'Admin@123') {
      const adminUser = {
        name: "Arthur Pendelton",
        email: "admin@fancyverse.com",
        role: "Admin",
        title: "Master Wardrobe Curator"
      };
      localStorage.setItem('fancy_user', JSON.stringify(adminUser));
      return { success: true, redirect: 'index.html' };
    }

    if (email === 'user@fancyverse.com' && password === 'User@123') {
      const clientUser = {
        name: "Claire Beaumont",
        email: "user@fancyverse.com",
        role: "Customer",
        title: "VIP Client"
      };
      localStorage.setItem('fancy_user', JSON.stringify(clientUser));
      return { success: true, redirect: 'index.html' };
    }

    // Generic fallback for testing any valid format
    if (email && password && password.length >= 6) {
      const customUser = {
        name: email.split('@')[0],
        email: email,
        role: "Customer",
        title: "Registered Member"
      };
      localStorage.setItem('fancy_user', JSON.stringify(customUser));
      return { success: true, redirect: 'index.html' };
    }

    return { success: false, message: 'Invalid credentials.' };
  },

  logout: () => {
    localStorage.removeItem('fancy_user');
    if (window.showToast) {
      window.showToast('You have been signed out.', 'success');
    }
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 500);
  },

  getUser: () => {
    return JSON.parse(localStorage.getItem('fancy_user') || 'null');
  },

  requireAuth: (allowedRoles = ['Admin', 'Customer']) => {
    const user = window.auth.getUser();
    if (!user) {
      window.location.href = 'index.html';
      return false;
    }
    if (allowedRoles.length && !allowedRoles.includes(user.role)) {
      window.location.href = '404.html';
      return false;
    }
    return true;
  }
};

// Toast Notification System
const getToastContainer = () => {
  let container = document.getElementById("toast-container");
  if (!container && document.body) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "fixed top-20 right-5 z-[9999] flex flex-col gap-2.5 pointer-events-none";
    document.body.appendChild(container);
  }
  return container;
};

window.showToast = (message, type = 'success') => {
  const toastContainer = getToastContainer();
  if (!toastContainer) return;

  const id = "toast-" + Date.now();
  const isSuccess = type === 'success';
  const bgClass = isSuccess ? "bg-[#B7410E] text-white" : "bg-red-600 text-white";
  const iconClass = isSuccess ? "bi-check-circle-fill text-[#D7CCC8]" : "bi-exclamation-triangle-fill text-white";

  const toast = document.createElement("div");
  toast.id = id;
  toast.className = `${bgClass} px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-white/10 pointer-events-auto transform transition-all duration-300 translate-x-full opacity-0 max-w-sm text-xs font-semibold leading-relaxed`;
  toast.innerHTML = `
    <i class="bi ${iconClass} text-lg flex-shrink-0"></i>
    <span class="flex-1">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-white/60 hover:text-white ml-2 text-sm">
      <i class="bi bi-x"></i>
    </button>
  `;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.remove("translate-x-full", "opacity-0");
    });
  });

  setTimeout(() => {
    toast.classList.add("translate-x-full", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

document.addEventListener("DOMContentLoaded", () => {
  getToastContainer();

  // Global Image Error Fallback: ensures cards and images always display cleanly on mobile and desktop
  window.addEventListener("error", (e) => {
    if (e.target && e.target.tagName === "IMG") {
      const img = e.target;
      if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = "true";
        img.src = "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&q=80&w=800";
      }
    }
  }, true);

  // Sticky Header Scroll Effect
  const header = document.getElementById("mainNavbar");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("shadow-md", "py-2.5");
        header.classList.remove("py-3.5");
      } else {
        header.classList.remove("shadow-md", "py-2.5");
        header.classList.add("py-3.5");
      }
    });
  }

  // Global Scroll Lock Handlers
  window.lockScroll = () => {
    document.documentElement.classList.add("scroll-locked");
    document.body.classList.add("scroll-locked");
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  };

  window.unlockScroll = () => {
    const quickViewOpen = document.getElementById("costumeQuickViewModal") && !document.getElementById("costumeQuickViewModal").classList.contains("hidden");
    const drawer = document.getElementById("mobileDrawer");
    const drawerOpen = drawer && !drawer.classList.contains("translate-x-full");
    const searchModal = document.getElementById("quickSearchModal");
    const searchOpen = searchModal && !searchModal.classList.contains("hidden");

    if (!quickViewOpen && !drawerOpen && !searchOpen) {
      document.documentElement.classList.remove("scroll-locked");
      document.body.classList.remove("scroll-locked");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  };

  window.closeQuickView = () => {
    const modal = document.getElementById("costumeQuickViewModal");
    if (modal) {
      modal.classList.add("hidden");
    }
    window.unlockScroll();
  };

  // Quick View Modal
  const quickViewModal = document.createElement("div");
  quickViewModal.id = "costumeQuickViewModal";
  quickViewModal.className = "fixed inset-0 z-50 bg-black/70 backdrop-blur-sm hidden flex items-center justify-center p-4 overscroll-contain";
  quickViewModal.innerHTML = `
    <div class="bg-white dark:bg-[#151518] w-full max-w-3xl rounded-3xl shadow-2xl border border-theme overflow-hidden relative animate-scale-up max-h-[90vh] overflow-y-auto">
      <button onclick="window.closeQuickView()" class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition cursor-pointer" aria-label="Close Quick View">
        <i class="bi bi-x-lg text-sm"></i>
      </button>
      <div id="quickViewContent" class="grid grid-cols-1 md:grid-cols-2">
        <!-- Injected via JavaScript -->
      </div>
    </div>
  `;
  document.body.appendChild(quickViewModal);

  window.openQuickView = (costumeId) => {
    if (!window.db) return;
    const costume = window.db.costumes.find(c => c.id === costumeId);
    if (!costume) return;

    const content = document.getElementById("quickViewContent");
    content.innerHTML = `
      <div class="relative bg-gray-100 dark:bg-black/40 min-h-[320px]">
        <img src="${costume.image}" alt="${costume.name}" class="w-full h-full object-cover">
        <span class="absolute top-4 left-4 badge theme-badge-gold text-[10px] font-bold px-3 py-1 rounded-full shadow">
          ${costume.badge || costume.category}
        </span>
      </div>
      <div class="p-6 md:p-8 flex flex-col justify-between">
        <div>
          <span class="text-[10px] font-bold text-theme-accent uppercase tracking-widest block mb-1">${costume.occasion}</span>
          <h3 class="text-xl font-bold text-theme-main dark:text-white mb-2 leading-tight">${costume.name}</h3>
          
          <div class="flex items-center gap-2 mb-4 text-xs">
            <div class="flex text-amber-500">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <span class="font-bold">${costume.rating}</span>
            <span class="text-gray-400">(${costume.reviewsCount} rentals)</span>
          </div>

          <p class="text-xs text-theme-muted dark:text-gray-300 leading-relaxed mb-6">
            ${costume.description}
          </p>

          <div class="p-3.5 rounded-2xl bg-[#EFEBE9] dark:bg-[#202025] mb-6 space-y-1.5 text-xs">
            <div class="flex justify-between">
              <span class="text-gray-500">Daily Rental:</span>
              <span class="font-bold text-theme-main dark:text-white">$${costume.dailyRate} / day</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-500">Weekend 3-Day Pass:</span>
              <span class="font-bold text-theme-main dark:text-white">$${costume.weekendRate}</span>
            </div>
            <div class="flex justify-between text-theme-accent">
              <span>Refundable Deposit:</span>
              <span class="font-bold">$${costume.deposit}</span>
            </div>
          </div>

          <!-- Interactive Size Selector in Quick View (Issue 5) -->
          <div class="mb-4">
            <span class="text-xs font-bold block text-theme-main dark:text-white mb-1.5">Select Size</span>
            <div class="flex flex-wrap gap-1.5" id="quickViewSizes">
              ${costume.sizes.map((s, idx) => `
                <button type="button" onclick="selectQuickViewSize('${s}', this)" class="qv-size-btn text-[10px] font-semibold px-2.5 py-1 rounded-lg border transition ${idx === 0 ? 'bg-theme-main text-white font-bold border-theme-main shadow-xs' : 'border-theme bg-theme-subtle dark:bg-[#202025] text-theme-muted hover:text-theme-main dark:hover:text-white'}" data-size="${s}">
                  ${s}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="space-y-3 pt-2">
          <div class="flex gap-3">
            <button onclick="window.store.addToCart('${costume.id}', {size: window.quickViewSelectedSize || '${costume.sizes[0]}'}); window.showToast('Added ${costume.name.replace(/'/g, "\\'")} (' + (window.quickViewSelectedSize || '${costume.sizes[0]}') + ') to Rental Cart', 'success'); window.closeQuickView();" class="flex-1 btn-primary-theme text-xs py-3 rounded-xl font-bold">
              <i class="bi bi-bag-plus"></i> Add to Cart
            </button>
            <a href="costume-details.html?id=${costume.id}" onclick="window.closeQuickView()" class="px-4 py-3 rounded-xl border border-theme text-xs font-bold hover:bg-theme-subtle flex items-center justify-center">
              Full Details
            </a>
          </div>
          <p class="text-[10px] text-center text-gray-400">
            <i class="bi bi-shield-check text-emerald-600"></i> Sanitized, dry-cleaned & fit guaranteed
          </p>
        </div>
      </div>
    `;

    window.quickViewSelectedSize = costume.sizes && costume.sizes.length > 0 ? costume.sizes[0] : "Standard";
    window.selectQuickViewSize = (s, btn) => {
      window.quickViewSelectedSize = s;
      document.querySelectorAll('.qv-size-btn').forEach(b => {
        b.classList.remove('bg-theme-main', 'text-white', 'font-bold', 'border-theme-main', 'shadow-xs');
        b.classList.add('border-theme', 'bg-theme-subtle', 'dark:bg-[#202025]', 'text-theme-muted');
      });
      btn.classList.remove('border-theme', 'bg-theme-subtle', 'dark:bg-[#202025]', 'text-theme-muted');
      btn.classList.add('bg-theme-main', 'text-white', 'font-bold', 'border-theme-main', 'shadow-xs');
    };

    quickViewModal.classList.remove("hidden");
    window.lockScroll();
  };

  quickViewModal.addEventListener("click", (e) => {
    if (e.target === quickViewModal) {
      window.closeQuickView();
    }
  });

  quickViewModal.addEventListener("touchmove", (e) => {
    if (e.target === quickViewModal) {
      e.preventDefault();
    }
  }, { passive: false });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (quickViewModal && !quickViewModal.classList.contains("hidden")) {
        window.closeQuickView();
      }
    }
  });

  // ==========================================================================
  // Modern Page Animations & Micro-Interactions Engine
  // ==========================================================================

  // 1. Top Scroll Progress Bar
  const progressBar = document.createElement("div");
  progressBar.id = "scroll-progress-bar";
  document.body.appendChild(progressBar);

  // 2. Floating Back-to-Top Action
  const backToTopBtn = document.createElement("button");
  backToTopBtn.id = "backToTopBtn";
  backToTopBtn.setAttribute("aria-label", "Back to top of page");
  backToTopBtn.innerHTML = '<i class="bi bi-arrow-up text-lg font-bold"></i>';
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${scrollPercent}%`;

    if (scrollTop > 350) {
      backToTopBtn.classList.add("visible");
    } else {
      backToTopBtn.classList.remove("visible");
    }
  }, { passive: true });

  // 3. Global Scroll Reveal Engine (IntersectionObserver)
  const initScrollReveals = () => {
    // Auto-enrich sections, cards, and grid items that don't have explicit reveal classes
    document.querySelectorAll("section:not(#mainNavbar) > div, .theme-card, .service-card, .feature-card, .testimonial-card").forEach((el, idx) => {
      if (!el.classList.contains("reveal") && 
          !el.classList.contains("reveal-up") && 
          !el.classList.contains("reveal-left") && 
          !el.classList.contains("reveal-right") && 
          !el.classList.contains("reveal-scale") &&
          !el.querySelector(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale") &&
          !el.closest("#navbar") && 
          !el.closest("#footer")) {
        el.classList.add("reveal-up");
        if (idx % 4 === 1) el.classList.add("delay-100");
        if (idx % 4 === 2) el.classList.add("delay-200");
        if (idx % 4 === 3) el.classList.add("delay-300");
      }
    });

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll(".reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-scale").forEach(el => {
        el.classList.add("reveal-visible");
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 100px 0px",
      threshold: 0.01
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll(".reveal:not(.reveal-visible), .reveal-up:not(.reveal-visible), .reveal-left:not(.reveal-visible), .reveal-right:not(.reveal-visible), .reveal-scale:not(.reveal-visible)").forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top <= viewportHeight + 100) {
        el.classList.add("reveal-visible");
      } else {
        revealObserver.observe(el);
      }
    });

    // Safety timeout: ensures all cards are unconditionally visible even in headless testing environments
    setTimeout(() => {
      document.querySelectorAll(".reveal:not(.reveal-visible), .reveal-up:not(.reveal-visible), .reveal-left:not(.reveal-visible), .reveal-right:not(.reveal-visible), .reveal-scale:not(.reveal-visible)").forEach(el => {
        el.classList.add("reveal-visible");
      });
    }, 1200);
  };

  initScrollReveals();

  // 4. Smooth Number Counter Animation
  const initCounters = () => {
    const counterElements = document.querySelectorAll("[data-counter]:not([data-counter-bound])");
    if (!counterElements.length) return;

    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseFloat(el.getAttribute("data-counter") || el.innerText.replace(/[^0-9.]/g, ""));
          const prefix = el.getAttribute("data-prefix") || "";
          const suffix = el.getAttribute("data-suffix") || "";
          const isDecimal = String(target).includes(".");
          const duration = 1600;
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const currentVal = target * ease;

            if (isDecimal) {
              el.innerText = `${prefix}${currentVal.toFixed(1)}${suffix}`;
            } else {
              el.innerText = `${prefix}${Math.floor(currentVal).toLocaleString()}${suffix}`;
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              if (isDecimal) {
                el.innerText = `${prefix}${target.toFixed(1)}${suffix}`;
              } else {
                el.innerText = `${prefix}${target.toLocaleString()}${suffix}`;
              }
            }
          };

          requestAnimationFrame(updateCounter);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.25 });

    counterElements.forEach(el => {
      el.setAttribute("data-counter-bound", "true");
      counterObserver.observe(el);
    });
  };

  initCounters();

  // 5. Interactive 3D Card Hover Perspective
  const initTiltCards = () => {
    const cards = document.querySelectorAll(".tilt-card, .theme-card");
    cards.forEach(card => {
      if (card.dataset.tiltBound) return;
      card.dataset.tiltBound = "true";

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.5;
        const rotateY = ((x - centerX) / centerX) * 3.5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  };

  initTiltCards();

  // Global helper for dynamically rendered items
  window.refreshPageEffects = () => {
    initScrollReveals();
    initCounters();
    initTiltCards();
  };
});
