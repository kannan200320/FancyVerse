/* ==========================================================================
   FancyVerse - Dynamic Comprehensive Footer
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
  <footer class="bg-[#101014] text-white pt-20 pb-12 border-t border-zinc-800/80 relative overflow-hidden">
    
    <!-- Ambient Background Radial Glows -->
    <div class="absolute top-0 right-1/4 w-[500px] h-[350px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-10 w-[400px] h-[300px] bg-[#B7410E]/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      
      <!-- Top Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-zinc-800/80">
        
        <!-- Brand Info -->
        <div class="lg:col-span-2 space-y-6">
          <a href="index.html" class="flex items-center gap-3 group transition-transform hover:opacity-90 w-fit cursor-pointer" title="FancyVerse - Return to Home">
            <div class="w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-400/20 to-[#B7410E]/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shadow-lg shadow-amber-500/5 group-hover:scale-105 transition-transform">
              <i class="bi bi-mask text-xl"></i>
            </div>
            <span class="text-2xl font-black tracking-tight text-white font-display group-hover:text-amber-300 transition-colors">
              Fancy<span class="text-amber-400">Verse</span>
            </span>
          </a>

          <p class="text-zinc-400 text-sm leading-relaxed max-w-sm">
            Curating luxury costumes, theatrical wardrobe, bespoke cosplay, and occasion styling for film productions, galas, parties, and festive celebrations worldwide.
          </p>

          <div class="space-y-2.5 text-xs text-zinc-300">
            <p class="flex items-center gap-2.5">
              <i class="bi bi-geo-alt-fill text-amber-400"></i>
              <span>480 Broadway Ave, Theatrical District, Suite 120, NY</span>
            </p>
            <p class="flex items-center gap-2.5">
              <i class="bi bi-telephone-fill text-amber-400"></i>
              <span>+1 (800) 555-FANCY • Concierge: +1 (212) 555-0199</span>
            </p>
            <p class="flex items-center gap-2.5">
              <i class="bi bi-envelope-fill text-amber-400"></i>
              <span>rentals@fancyverse.com</span>
            </p>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <a href="https://www.instagram.com/fancyverse.rentals/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 transition shadow-sm" title="Instagram @fancyverse.rentals">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/fancyverse.rentals/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 transition shadow-sm" title="Facebook @fancyverse.rentals">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 transition shadow-sm" title="X / Twitter">
              <i class="bi bi-twitter-x"></i>
            </a>
            <a href="https://www.linkedin.com/company/fancyverse-rentals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" class="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 transition shadow-sm" title="LinkedIn @fancyverse-rentals">
              <i class="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <!-- Occasions Links -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Costume Occasions
          </h4>
          <ul class="space-y-2.5 text-xs text-zinc-400">
            <li><a href="catalog.html?occasion=Kids" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform duration-150"><span>🎈</span> Kids Fairytales & Heroes</a></li>
            <li><a href="catalog.html?occasion=Themed+Parties" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform duration-150"><span>✨</span> Themed Parties & Galas</a></li>
            <li><a href="catalog.html?occasion=Cultural" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform duration-150"><span>🌸</span> Cultural & Traditional Silk</a></li>
            <li><a href="catalog.html?occasion=Historical" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform duration-150"><span>⚔️</span> Historical & Period Armor</a></li>
            <li class="pt-2"><a href="catalog.html" class="hover:text-amber-300 font-bold text-amber-400 inline-flex items-center gap-1 transition">View All Ensembles →</a></li>
          </ul>
        </div>

        <!-- Rental Services -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Services & Care
          </h4>
          <ul class="space-y-2.5 text-xs text-zinc-400">
            <li><a href="services.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">All Rental Services</a></li>
            <li><a href="pricing.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">Pricing & Security Deposit</a></li>
            <li><a href="fitting-studio.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">Private Fitting Studio & Tailoring</a></li>
            <li><a href="size-guide.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">Size & Fit Guarantee</a></li>
            <li><a href="index.html#bulk-enquiry" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">School & Studio Bulk Hire</a></li>
          </ul>
        </div>

        <!-- VIP Club Newsletter -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            VIP Wardrobe Club
          </h4>
          <p class="text-xs text-zinc-400 leading-relaxed">
            Subscribe for early access to Halloween previews, gala discounts, and styling masterclasses.
          </p>
          <form id="footerNewsletterForm" onsubmit="handleFooterNewsletter(event)" class="space-y-3">
            <div class="relative">
              <input type="email" id="footerEmailInput" required placeholder="Enter your email address..." class="w-full bg-zinc-900/90 border border-zinc-800 rounded-xl px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400/60 focus:ring-1 focus:ring-amber-400/30 transition shadow-inner">
              <button type="submit" aria-label="Subscribe to newsletter" class="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 bg-gradient-to-r from-amber-500 to-[#B7410E] hover:from-amber-400 hover:to-[#C84E18] text-white rounded-lg text-xs font-bold transition flex items-center justify-center shadow-md shadow-amber-500/20">
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
            <p class="text-[10px] text-zinc-500">Zero spam. You can unsubscribe anytime with one click.</p>
          </form>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 text-center text-xs text-zinc-500">
        &copy; ${new Date().getFullYear()} <a href="index.html" class="hover:text-amber-400 transition underline-offset-2 hover:underline">FancyVerse Wardrobe & Rental Co.</a> All rights reserved.
      </div>

    </div>
  </footer>
  `;
});

// Newsletter Submission Handler
window.handleFooterNewsletter = (e) => {
  e.preventDefault();
  const input = document.getElementById("footerEmailInput");
  if (!input || !input.value) return;

  if (window.showToast) {
    window.showToast(`Thank you! Exclusive VIP wardrobe pass sent to ${input.value}.`, 'success');
  }
  input.value = "";
};
