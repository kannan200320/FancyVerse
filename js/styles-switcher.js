/* ==========================================================================
   FancyVerse - Site Styles Interactive Customizer Widget
   Directly matching the user's uploaded "Site Styles" screenshot
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const switcherContainer = document.createElement("div");
  switcherContainer.id = "style-switcher-panel";
  switcherContainer.innerHTML = `
    <!-- Floating Trigger Gear -->
    <button id="style-switcher-toggle" aria-label="Open Site Styles" title="Customize Site Styles & Themes">
      <i class="bi bi-palette2"></i>
    </button>

    <!-- Header -->
    <div class="style-switcher-header">
      <div class="flex items-center gap-2">
        <i class="bi bi-sliders text-theme-accent text-base"></i>
        <h3 class="text-sm font-black tracking-tight text-theme-main dark:text-white">Site Styles</h3>
      </div>
      <button id="closeStyleSwitcherBtn" class="text-gray-400 hover:text-gray-600 dark:hover:text-white text-base">
        <i class="bi bi-x-lg"></i>
      </button>
    </div>

    <!-- Body -->
    <div class="style-switcher-body">
      
      <!-- 1. Themes (Exact replica of user screenshot top block) -->
      <div>
        <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">Themes</span>
        <div class="site-styles-preview-card">
          <span class="text-4xl font-extrabold text-theme-main dark:text-white font-current" id="switcherAaPreview">Aa</span>
          <div class="site-styles-swatches">
            <span style="background: var(--color-bg-light); border: 1px solid #ddd;"></span>
            <span style="background: var(--color-bg-subtle);"></span>
            <span style="background: var(--color-accent);"></span>
            <span style="background: var(--color-secondary);"></span>
            <span style="background: var(--color-primary);"></span>
          </div>
          <button class="px-3 py-1.5 rounded-lg bg-theme-main text-white text-[10px] font-black tracking-wider uppercase shadow-sm">
            BUTTON
          </button>
        </div>
      </div>

      <!-- 2. Fonts Section (Matching user screenshot) -->
      <div>
        <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">Fonts</span>
        <div class="space-y-2">
          
          <button class="font-opt-btn active flex items-center justify-between" data-font-val="sans">
            <div>
              <h5 class="text-xs font-black text-theme-main dark:text-white font-sans">Modern Sans (Plus Jakarta)</h5>
              <p class="text-[10px] text-gray-500 font-sans">This is your paragraph.</p>
            </div>
            <i class="bi bi-chevron-right text-xs text-gray-400"></i>
          </button>

          <button class="font-opt-btn flex items-center justify-between" data-font-val="serif">
            <div>
              <h5 class="text-xs font-black text-theme-main dark:text-white font-serif">Playfair Editorial</h5>
              <p class="text-[10px] text-gray-500 font-serif">This is your paragraph.</p>
            </div>
            <i class="bi bi-chevron-right text-xs text-gray-400"></i>
          </button>

          <button class="font-opt-btn flex items-center justify-between" data-font-val="display">
            <div>
              <h5 class="text-xs font-black text-theme-main dark:text-white font-display">Cinzel Theatrical</h5>
              <p class="text-[10px] text-gray-500 font-display">This is your paragraph.</p>
            </div>
            <i class="bi bi-chevron-right text-xs text-gray-400"></i>
          </button>

        </div>
      </div>

      <!-- 3. Colors Palette (Matching user screenshot) -->
      <div>
        <span class="text-[11px] font-bold text-gray-500 uppercase tracking-wider block mb-2">Colors</span>
        <div class="space-y-2" id="paletteSelectorGrid">
          
          <!-- Palette 1: Earthy Terracotta & Sand (Default) -->
          <div class="palette-card active flex items-center justify-between" data-palette-val="default">
            <div class="flex-1 mr-3">
              <span class="text-xs font-black text-theme-main dark:text-white">Terracotta & Warm Sand</span>
              <div class="palette-swatches">
                <span style="background: #FDFBF7;"></span>
                <span style="background: #F4EFEB;"></span>
                <span style="background: #966B57;"></span>
                <span style="background: #C84E18;"></span>
                <span style="background: #B7410E;"></span>
              </div>
            </div>
            <i class="bi bi-chevron-right text-xs text-gray-400"></i>
          </div>

          <!-- Palette 2: Royal Velvet & Imperial Gold -->
          <div class="palette-card flex items-center justify-between" data-palette-val="royal">
            <div class="flex-1 mr-3">
              <span class="text-xs font-black text-theme-main dark:text-white">Royal Velvet & Imperial Gold</span>
              <div class="palette-swatches">
                <span style="background: #FAF8FE;"></span>
                <span style="background: #EEE8FA;"></span>
                <span style="background: #B38612;"></span>
                <span style="background: #321759;"></span>
                <span style="background: #180D2B;"></span>
              </div>
            </div>
            <i class="bi bi-chevron-right text-xs text-gray-400"></i>
          </div>

          <!-- Palette 3: Emerald Haute Couture -->
          <div class="palette-card flex items-center justify-between" data-palette-val="emerald">
            <div class="flex-1 mr-3">
              <span class="text-xs font-black text-theme-main dark:text-white">Emerald Haute Couture</span>
              <div class="palette-swatches">
                <span style="background: #F3FAF6;"></span>
                <span style="background: #E2F4EC;"></span>
                <span style="background: #059669;"></span>
                <span style="background: #10483A;"></span>
                <span style="background: #07241C;"></span>
              </div>
            </div>
            <i class="bi bi-chevron-right text-xs text-gray-400"></i>
          </div>

          <!-- Palette 4: Midnight Noir & Crimson Regalia -->
          <div class="palette-card flex items-center justify-between" data-palette-val="crimson">
            <div class="flex-1 mr-3">
              <span class="text-xs font-black text-theme-main dark:text-white">Midnight Noir & Crimson</span>
              <div class="palette-swatches">
                <span style="background: #FFF6F7;"></span>
                <span style="background: #FFE3E7;"></span>
                <span style="background: #BE123C;"></span>
                <span style="background: #40101C;"></span>
                <span style="background: #1C080D;"></span>
              </div>
            </div>
            <i class="bi bi-chevron-right text-xs text-gray-400"></i>
          </div>

        </div>
      </div>

      <!-- Quick Toggles -->
      <div class="pt-2 border-t border-theme flex items-center justify-between">
        <span class="text-xs font-bold">Dark / Light Mode</span>
        <button id="switcherThemeBtn" class="px-3 py-1.5 rounded-xl border border-theme text-xs font-bold hover:border-theme-accent">
          Toggle Mode
        </button>
      </div>

      <div class="flex items-center justify-between">
        <span class="text-xs font-bold flex items-center gap-1.5">
          <i class="bi bi-arrow-left-right text-theme-accent"></i>
          Direction
        </span>
        <button id="switcherRtlBtn" aria-label="Toggle Direction" class="px-3 py-1.5 rounded-xl border border-theme text-xs font-bold hover:border-theme-accent transition flex items-center justify-center">
          <i class="bi bi-arrow-left-right"></i>
        </button>
      </div>

    </div>
  `;

  document.body.appendChild(switcherContainer);

  const toggleBtn = document.getElementById("style-switcher-toggle");
  const closeBtn = document.getElementById("closeStyleSwitcherBtn");

  toggleBtn.addEventListener("click", () => {
    switcherContainer.classList.toggle("open");
  });

  closeBtn.addEventListener("click", () => {
    switcherContainer.classList.remove("open");
  });

  // Palette Switching
  const paletteCards = document.querySelectorAll(".palette-card");
  const savedPalette = localStorage.getItem("fancy_palette") || "default";

  const applyPalette = (paletteVal) => {
    if (paletteVal === "default") {
      document.documentElement.removeAttribute("data-palette");
    } else {
      document.documentElement.setAttribute("data-palette", paletteVal);
    }
    localStorage.setItem("fancy_palette", paletteVal);

    paletteCards.forEach(c => {
      if (c.getAttribute("data-palette-val") === paletteVal) {
        c.classList.add("active");
      } else {
        c.classList.remove("active");
      }
    });
  };

  applyPalette(savedPalette);

  paletteCards.forEach(card => {
    card.addEventListener("click", () => {
      const paletteVal = card.getAttribute("data-palette-val");
      applyPalette(paletteVal);
    });
  });

  // Font Switching
  const fontButtons = document.querySelectorAll(".font-opt-btn");
  const savedFont = localStorage.getItem("fancy_font") || "sans";

  const applyFont = (fontVal) => {
    if (fontVal === "sans") {
      document.documentElement.removeAttribute("data-font");
    } else {
      document.documentElement.setAttribute("data-font", fontVal);
    }
    localStorage.setItem("fancy_font", fontVal);

    fontButtons.forEach(btn => {
      if (btn.getAttribute("data-font-val") === fontVal) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  };

  applyFont(savedFont);

  fontButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const fontVal = btn.getAttribute("data-font-val");
      applyFont(fontVal);
    });
  });

  // Mode and RTL shortcuts
  document.getElementById("switcherThemeBtn")?.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark" || document.documentElement.classList.contains("dark");
    const target = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", target);
    document.documentElement.classList.toggle("dark", target === "dark");
    localStorage.setItem("fancy_theme", target);
    
    // Sync navbar theme toggle button icons
    const icon = target === 'dark' ? '<i class="bi bi-brightness-high-fill text-amber-400"></i>' : '<i class="bi bi-moon-fill"></i>';
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    if (themeToggleBtn) themeToggleBtn.innerHTML = icon;
    if (mobileThemeToggle) mobileThemeToggle.innerHTML = icon;
  });

  document.getElementById("switcherRtlBtn")?.addEventListener("click", () => {
    const isRtl = document.documentElement.getAttribute("dir") === "rtl";
    const target = isRtl ? "ltr" : "rtl";
    document.documentElement.setAttribute("dir", target);
    localStorage.setItem("fancy_dir", target);
  });

});
