/* ==========================================================================
   FancyVerse - Ultra-Modern Glassmorphic Header, Navigation & Offcanvas Drawer
   Bulletproof Dropdowns for Home, Services, and Occasions (Kids, Parties, Cultural, Historical)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const navbarContainer = document.getElementById("navbar");
  if (!navbarContainer) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const user = JSON.parse(localStorage.getItem('fancy_user') || 'null');



  navbarContainer.innerHTML = `
  <header id="mainNavbar" class="fixed top-0 left-0 w-full z-40 bg-[#FDFBF7]/90 dark:bg-[#0B0B0E]/90 backdrop-blur-xl border-b border-[#EADBCE]/70 dark:border-[#282832]/80 transition-all duration-300">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
      
      <!-- Brand Logo -->
      <a href="index.html" class="flex items-center gap-2.5 group flex-shrink-0">
        <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
          <i class="bi bi-mask text-xl text-white"></i>
        </div>
        <div class="flex flex-col">
          <span class="text-xl font-black tracking-tight text-theme-main dark:text-white leading-none">
            Fancy<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]">Verse</span>
          </span>
          <span class="text-[9px] uppercase tracking-[0.25em] font-extrabold text-theme-accent dark:text-pink-400 mt-0.5">
            Fun & Festive Rentals
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Menu -->
      <nav class="hidden lg:flex items-center gap-6 text-xs font-bold" id="desktopNavLinks">
        
        <!-- Home Dropdown -->
        <div class="relative nav-dropdown py-2 group">
          <button type="button" class="nav-dropdown-btn flex items-center gap-1.5 hover:text-theme-accent transition cursor-pointer py-1" aria-expanded="false">
            <span>Home</span>
            <i class="bi bi-chevron-down text-[10px] transition-transform duration-200 dropdown-arrow"></i>
          </button>
          <div class="nav-dropdown-menu absolute left-0 top-full pt-1.5 hidden z-50">
            <ul class="w-64 bg-white dark:bg-[#131317] rounded-2xl shadow-2xl border border-theme py-2 text-[#18181B] dark:text-white animate-scale-up">
              <li>
                <a href="index.html" class="block px-4 py-2.5 text-xs hover:bg-theme-subtle transition font-medium">
                  <span class="font-bold block text-theme-main dark:text-white">Home 1: Festive & Fun</span>
                  <span class="text-[10px] text-gray-400">Kids, Parties, Cultural & Historical</span>
                </a>
              </li>
              <li>
                <a href="home2.html" class="block px-4 py-2.5 text-xs hover:bg-theme-subtle transition font-medium border-t border-theme">
                  <span class="font-bold block text-theme-main dark:text-white">Home 2: Studio & Troupe</span>
                  <span class="text-[10px] text-gray-400">Theatrical Wardrobe & Estimator</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Services Dropdown -->
        <div class="relative nav-dropdown py-2 group">
          <button type="button" class="nav-dropdown-btn flex items-center gap-1.5 hover:text-theme-accent transition cursor-pointer py-1" aria-expanded="false">
            <span>Services</span>
            <i class="bi bi-chevron-down text-[10px] transition-transform duration-200 dropdown-arrow"></i>
          </button>
          <div class="nav-dropdown-menu absolute left-0 top-full pt-1.5 hidden z-50">
            <ul class="w-64 bg-white dark:bg-[#131317] rounded-2xl shadow-2xl border border-theme py-2 text-[#18181B] dark:text-white animate-scale-up">
              <li><a href="services.html" class="block px-4 py-2.5 text-xs hover:bg-theme-subtle transition font-bold"><i class="bi bi-grid-fill text-theme-accent mr-1.5"></i> All Rental Services (Grid/List)</a></li>
              <li><a href="service-details.html" class="block px-4 py-2.5 text-xs hover:bg-theme-subtle transition font-bold"><i class="bi bi-file-earmark-text text-theme-accent mr-1.5"></i> Service Details & Pricing Table</a></li>
              <li><a href="fitting-studio.html" class="block px-4 py-2.5 text-xs hover:bg-theme-subtle transition font-bold"><i class="bi bi-scissors text-theme-accent mr-1.5"></i> Private Fitting Studio & Tailoring</a></li>
            </ul>
          </div>
        </div>

        <a href="catalog.html" class="hover:text-theme-accent transition py-2">Catalog</a>
        <a href="size-guide.html" class="hover:text-theme-accent transition py-2">Size Guide</a>
        <a href="pricing.html" class="hover:text-theme-accent transition py-2">Pricing & Deposit</a>
        <a href="contact.html" class="hover:text-theme-accent transition py-2">Contact</a>
      </nav>

      <!-- Desktop Right Controls -->
      <div class="hidden lg:flex items-center gap-3">
        
        <!-- Search Trigger -->
        <button id="searchModalBtn" aria-label="Search Catalog" class="p-2 rounded-xl text-base hover:text-theme-accent hover:bg-theme-subtle transition" title="Search Costumes">
          <i class="bi bi-search"></i>
        </button>

        <!-- Theme Toggle -->
        <button id="themeToggleBtn" aria-label="Toggle Dark Mode" class="p-2 rounded-xl text-base hover:text-theme-accent hover:bg-theme-subtle transition" title="Toggle Theme">
          <i class="bi bi-moon-fill"></i>
        </button>

        <!-- Direction Toggle (Symbol Only) -->
        <button id="rtlToggleBtn" aria-label="Toggle Direction" class="p-2 rounded-xl text-base hover:text-theme-accent hover:bg-theme-subtle transition" title="Toggle Direction">
          <i class="bi bi-arrow-left-right"></i>
        </button>

        <!-- Wishlist Badge -->
        <a href="wishlist.html" aria-label="Saved Wishlist" class="relative p-2 rounded-xl text-base hover:text-theme-accent hover:bg-theme-subtle transition" title="Saved Wishlist">
          <i class="bi bi-heart"></i>
          <span class="wishlist-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-red-600 text-white text-[9px] font-black flex items-center justify-center shadow">
            0
          </span>
        </a>

        <!-- Cart Badge -->
        <a href="cart.html" aria-label="Rental Cart" class="relative p-2 rounded-xl text-base hover:text-theme-accent hover:bg-theme-subtle transition" title="Rental Cart">
          <i class="bi bi-bag"></i>
          <span class="cart-count absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-[9px] font-black flex items-center justify-center shadow">
            0
          </span>
        </a>

        <!-- Book Fitting CTA -->
        <a href="contact.html#fitting" class="btn-primary-theme text-xs py-2 px-4 shadow-sm whitespace-nowrap ml-1 bg-gradient-to-r from-[#7C3AED] to-[#EC4899] hover:opacity-90">
          <i class="bi bi-calendar-heart"></i> Book Fitting
        </a>
      </div>

      <!-- Mobile Header Controls -->
      <div class="flex items-center gap-2 lg:hidden">
        <button id="mobileSearchBtn" aria-label="Search Catalog" class="p-2 text-base text-theme-main dark:text-white hover:text-theme-accent transition" title="Search">
          <i class="bi bi-search"></i>
        </button>
        <a href="cart.html" aria-label="Rental Cart" class="relative p-2 text-base text-theme-main dark:text-white">
          <i class="bi bi-bag"></i>
          <span class="cart-count absolute top-0 right-0 min-w-[16px] h-[16px] rounded-full bg-[#EC4899] text-white text-[9px] font-black flex items-center justify-center">0</span>
        </a>
        <button id="hamburgerBtn" aria-label="Open Menu" class="p-2 text-2xl text-theme-main dark:text-white cursor-pointer hover:text-theme-accent transition">
          <i class="bi bi-list"></i>
        </button>
      </div>

    </div>
  </header>

  <!-- Mobile Offcanvas Backdrop -->
  <div id="mobileMenuBackdrop" class="fixed inset-0 bg-black/60 backdrop-blur-md z-50 hidden transition-opacity duration-300 opacity-0"></div>

  <!-- Mobile Slide-over Drawer -->
  <div id="mobileDrawer" class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#FDFBF7] dark:bg-[#101014] text-[#18181B] dark:text-white z-50 shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col">
    
    <!-- Drawer Header -->
    <div class="p-5 border-b border-theme flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <div class="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#EC4899] text-white flex items-center justify-center shadow-sm">
          <i class="bi bi-mask text-base text-white"></i>
        </div>
        <span class="font-black text-base">Fancy<span class="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] to-[#EC4899]">Verse</span></span>
      </div>
      <button id="closeDrawerBtn" aria-label="Close Menu" class="p-2 text-xl hover:text-theme-accent text-gray-400 cursor-pointer">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <!-- Drawer Body -->
    <div class="p-6 overflow-y-auto flex-1 space-y-4">
      
      <div class="space-y-1">
        <div>
          <button id="mobileHomeToggle" type="button" class="w-full flex items-center justify-between py-2.5 font-bold text-xs hover:text-theme-accent cursor-pointer">
            <span>Home Variations</span>
            <i class="bi bi-chevron-down text-xs transition-transform duration-200" id="mobileHomeArrow"></i>
          </button>
          <div id="mobileHomeMenu" class="hidden pl-4 py-1 space-y-1 text-xs text-theme-muted dark:text-gray-300">
            <a href="index.html" class="block py-1.5 hover:text-theme-accent">Home 1: Fun & Vibrant Landing</a>
            <a href="home2.html" class="block py-1.5 hover:text-theme-accent">Home 2: Theatrical Agency</a>
          </div>
        </div>

        <div>
          <button id="mobileServicesToggle" type="button" class="w-full flex items-center justify-between py-2.5 font-bold text-xs hover:text-theme-accent cursor-pointer">
            <span>Rental Services</span>
            <i class="bi bi-chevron-down text-xs transition-transform duration-200" id="mobileServicesArrow"></i>
          </button>
          <div id="mobileServicesMenu" class="hidden pl-4 py-1 space-y-1 text-xs text-theme-muted dark:text-gray-300">
            <a href="services.html" class="block py-1.5 hover:text-theme-accent">All Services (Grid/List)</a>
            <a href="service-details.html" class="block py-1.5 hover:text-theme-accent">Service Details & FAQs</a>
            <a href="fitting-studio.html" class="block py-1.5 hover:text-theme-accent">Private Fitting Studio & Tailoring</a>
          </div>
        </div>

        <a href="catalog.html" class="block py-2.5 font-bold text-xs hover:text-theme-accent">Catalog</a>
        <a href="size-guide.html" class="block py-2.5 font-bold text-xs hover:text-theme-accent">Size Guide</a>
        <a href="pricing.html" class="block py-2.5 font-bold text-xs hover:text-theme-accent">Pricing & Security Deposit</a>
        <a href="contact.html" class="block py-2.5 font-bold text-xs hover:text-theme-accent">Contact</a>
      </div>

      <div class="pt-4 border-t border-theme space-y-2">
        <a href="wishlist.html" class="flex items-center justify-between py-2 text-xs font-bold">
          <span>Saved Wishlist</span>
          <span class="wishlist-count min-w-[20px] h-[20px] rounded-full bg-red-600 text-white text-[10px] flex items-center justify-center font-black">0</span>
        </a>
        <a href="cart.html" class="flex items-center justify-between py-2 text-xs font-bold">
          <span>Rental Cart</span>
          <span class="cart-count min-w-[20px] h-[20px] rounded-full bg-gradient-to-r from-[#7C3AED] to-[#EC4899] text-white text-[10px] flex items-center justify-center font-black">0</span>
        </a>
      </div>

      <!-- Toggle Controls (Theme & Direction Placed in Menu) -->
      <div class="pt-4 border-t border-theme">
        <div class="flex items-center justify-between py-1">
          <span class="text-xs font-bold text-gray-500 dark:text-gray-400">Settings:</span>
          <div class="flex items-center gap-2">
            <button id="mobileThemeToggle" aria-label="Toggle Dark Mode" class="w-10 h-10 rounded-xl border border-theme text-sm text-theme-main dark:text-white hover:text-theme-accent hover:bg-theme-subtle transition flex items-center justify-center shadow-sm" title="Toggle Dark / Light Theme">
              <i class="bi bi-moon-fill"></i>
            </button>
            <button id="mobileRtlToggle" aria-label="Toggle Direction" class="w-10 h-10 rounded-xl border border-theme text-sm text-theme-main dark:text-white hover:text-theme-accent hover:bg-theme-subtle transition flex items-center justify-center shadow-sm" title="Toggle LTR / RTL Direction">
              <i class="bi bi-arrow-left-right"></i>
            </button>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Global Quick Search Modal -->
  <div id="quickSearchModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 hidden flex items-start justify-center pt-24 px-4">
    <div class="bg-white dark:bg-[#151518] text-[#18181B] dark:text-white w-full max-w-xl rounded-3xl shadow-2xl border border-theme p-6 relative animate-scale-up">
      <div class="flex items-center justify-between pb-4 border-b border-theme">
        <div class="flex items-center gap-2">
          <i class="bi bi-search text-theme-accent"></i>
          <span class="text-xs font-bold uppercase tracking-wider text-theme-main dark:text-white">Quick Search Vault</span>
        </div>
        <button id="closeSearchModalBtn" class="text-gray-400 hover:text-gray-600 dark:hover:text-white text-sm">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>

      <div class="relative mt-4">
        <input type="text" id="globalSearchInput" placeholder="Search Kids, Themed Parties, Cultural, Historical..." class="w-full bg-theme-subtle dark:bg-[#202025] border border-theme rounded-xl px-4 py-3 text-xs text-theme-main dark:text-white placeholder-gray-400 focus:outline-none focus:border-theme-accent">
      </div>

      <div id="searchResultsContainer" class="mt-4 max-h-80 overflow-y-auto space-y-2">
        <p class="text-xs text-gray-400 py-2">Start typing to explore Kids, Themed Parties, Cultural, and Historical costumes...</p>
      </div>
    </div>
  </div>
  `;

  // Active Nav Link highlight
  document.querySelectorAll('#desktopNavLinks a, #mobileDrawer a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('text-theme-accent', 'font-black');
    }
  });

  // ================= DESKTOP DROPDOWNS: HOVER + CLICK =================
  const setupDesktopDropdowns = () => {
    const dropdowns = document.querySelectorAll('#desktopNavLinks .nav-dropdown');

    dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.nav-dropdown-btn');
      const menu = dropdown.querySelector('.nav-dropdown-menu');
      const arrow = dropdown.querySelector('.dropdown-arrow');

      if (!btn || !menu) return;

      const openDropdown = () => {
        dropdown.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        arrow?.classList.add('rotate-180');
        menu.classList.remove('hidden');
      };

      const closeDropdown = () => {
        dropdown.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        arrow?.classList.remove('rotate-180');
        menu.classList.add('hidden');
      };

      // Click to toggle
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isOpen = dropdown.classList.contains('open');

        // Close any other open dropdown
        dropdowns.forEach(other => {
          if (other !== dropdown) {
            other.classList.remove('open');
            other.querySelector('.nav-dropdown-btn')?.setAttribute('aria-expanded', 'false');
            other.querySelector('.dropdown-arrow')?.classList.remove('rotate-180');
            other.querySelector('.nav-dropdown-menu')?.classList.add('hidden');
          }
        });

        if (isOpen) {
          closeDropdown();
        } else {
          openDropdown();
        }
      });

      // Hover support
      dropdown.addEventListener('mouseenter', openDropdown);
      dropdown.addEventListener('mouseleave', closeDropdown);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        dropdowns.forEach(d => {
          d.classList.remove('open');
          d.querySelector('.nav-dropdown-btn')?.setAttribute('aria-expanded', 'false');
          d.querySelector('.dropdown-arrow')?.classList.remove('rotate-180');
          d.querySelector('.nav-dropdown-menu')?.classList.add('hidden');
        });
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropdowns.forEach(d => {
          d.classList.remove('open');
          d.querySelector('.nav-dropdown-btn')?.setAttribute('aria-expanded', 'false');
          d.querySelector('.dropdown-arrow')?.classList.remove('rotate-180');
          d.querySelector('.nav-dropdown-menu')?.classList.add('hidden');
        });
      }
    });
  };

  setupDesktopDropdowns();

  // ================= MOBILE DRAWER & ACCORDIONS =================
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const closeDrawerBtn = document.getElementById('closeDrawerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

  const openDrawer = () => {
    mobileDrawer.classList.remove('translate-x-full');
    mobileMenuBackdrop.classList.remove('hidden');
    setTimeout(() => mobileMenuBackdrop.classList.add('opacity-100'), 10);
    if (window.lockScroll) {
      window.lockScroll();
    } else {
      document.documentElement.classList.add('scroll-locked');
      document.body.classList.add('scroll-locked');
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }
  };

  const closeDrawer = () => {
    mobileDrawer.classList.add('translate-x-full');
    mobileMenuBackdrop.classList.remove('opacity-100');
    setTimeout(() => {
      mobileMenuBackdrop.classList.add('hidden');
      if (window.unlockScroll) {
        window.unlockScroll();
      } else {
        document.documentElement.classList.remove('scroll-locked');
        document.body.classList.remove('scroll-locked');
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
      }
    }, 300);
  };

  hamburgerBtn?.addEventListener('click', openDrawer);
  closeDrawerBtn?.addEventListener('click', closeDrawer);
  mobileMenuBackdrop?.addEventListener('click', closeDrawer);

  mobileMenuBackdrop?.addEventListener('touchmove', (e) => {
    e.preventDefault();
  }, { passive: false });

  mobileDrawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Mobile Submenu Accordions
  const setupMobileAccordion = (toggleId, menuId, arrowId) => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    const arrow = document.getElementById(arrowId);

    toggle?.addEventListener('click', (e) => {
      e.preventDefault();
      const isHidden = menu.classList.toggle('hidden');
      arrow?.classList.toggle('rotate-180', !isHidden);
    });
  };

  setupMobileAccordion('mobileHomeToggle', 'mobileHomeMenu', 'mobileHomeArrow');
  setupMobileAccordion('mobileServicesToggle', 'mobileServicesMenu', 'mobileServicesArrow');

  // Theme management
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');

  const applyTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('fancy_theme', theme);
    const icon = theme === 'dark' ? '<i class="bi bi-brightness-high-fill text-amber-400"></i>' : '<i class="bi bi-moon-fill"></i>';
    if (themeToggleBtn) themeToggleBtn.innerHTML = icon;
    if (mobileThemeToggle) mobileThemeToggle.innerHTML = icon;
  };

  const currentTheme = localStorage.getItem('fancy_theme') || 'light';
  applyTheme(currentTheme);

  const toggleTheme = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(isDark ? 'light' : 'dark');
  };

  themeToggleBtn?.addEventListener('click', toggleTheme);
  mobileThemeToggle?.addEventListener('click', toggleTheme);

  // RTL management
  const rtlToggleBtn = document.getElementById('rtlToggleBtn');
  const mobileRtlToggle = document.getElementById('mobileRtlToggle');

  const applyDir = (dir) => {
    document.documentElement.setAttribute('dir', dir);
    localStorage.setItem('fancy_dir', dir);
  };

  const currentDir = localStorage.getItem('fancy_dir') || 'ltr';
  applyDir(currentDir);

  const toggleDir = () => {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    applyDir(isRtl ? 'ltr' : 'rtl');
  };

  rtlToggleBtn?.addEventListener('click', toggleDir);
  mobileRtlToggle?.addEventListener('click', toggleDir);

  // Sync Badges
  const updateBadges = () => {
    if (!window.store) return;
    const cartCount = window.store.getCart().reduce((sum, item) => sum + (item.quantity || 1), 0);
    const wishlistCount = window.store.getWishlist().length;

    document.querySelectorAll('.cart-count').forEach(el => el.textContent = cartCount);
    document.querySelectorAll('.wishlist-count').forEach(el => el.textContent = wishlistCount);
  };

  updateBadges();
  window.addEventListener('cartUpdated', updateBadges);
  window.addEventListener('wishlistUpdated', updateBadges);

  const searchModalBtn = document.getElementById('searchModalBtn');
  const mobileSearchBtn = document.getElementById('mobileSearchBtn');
  const quickSearchModal = document.getElementById('quickSearchModal');
  const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');
  const globalSearchInput = document.getElementById('globalSearchInput');
  const searchResultsContainer = document.getElementById('searchResultsContainer');

  const openSearch = () => {
    quickSearchModal?.classList.remove('hidden');
    globalSearchInput?.focus();
    if (window.lockScroll) window.lockScroll();
  };

  const closeSearch = () => {
    quickSearchModal?.classList.add('hidden');
    if (window.unlockScroll) window.unlockScroll();
  };

  searchModalBtn?.addEventListener('click', openSearch);
  mobileSearchBtn?.addEventListener('click', openSearch);
  closeSearchModalBtn?.addEventListener('click', closeSearch);

  quickSearchModal?.addEventListener('click', (e) => {
    if (e.target === quickSearchModal) closeSearch();
  });

  globalSearchInput?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    if (!q || q.length < 2) {
      searchResultsContainer.innerHTML = '<p class="text-xs text-gray-400 py-2">Start typing to explore...</p>';
      return;
    }

    if (!window.db) return;
    const matches = window.db.costumes.filter(c => 
      c.name.toLowerCase().includes(q) || 
      c.category.toLowerCase().includes(q) ||
      c.occasion.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      searchResultsContainer.innerHTML = '<p class="text-xs text-gray-400 py-4 text-center">No matching costume ensembles found.</p>';
      return;
    }

    searchResultsContainer.innerHTML = matches.map(c => `
      <a href="costume-details.html?id=${c.id}" class="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-theme-subtle transition">
        <img src="${c.image}" class="w-12 h-12 rounded-xl object-cover flex-shrink-0 shadow-sm" alt="${c.name}">
        <div class="flex-1 min-w-0">
          <p class="text-xs font-bold truncate text-theme-main dark:text-white">${c.name}</p>
          <span class="text-[10px] text-gray-500">${c.occasion} • $${c.dailyRate}/day</span>
        </div>
        <span class="text-xs font-extrabold text-theme-accent">Rent →</span>
      </a>
    `).join('');
  });

});
