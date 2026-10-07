/* ==========================================================================
   FancyVerse - Dynamic Comprehensive Luxury Footer
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const footerContainer = document.getElementById("footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
  <footer class="bg-[#0B0B0F] text-white pt-16 pb-12 border-t border-amber-500/20 relative overflow-hidden">
    
    <!-- Ambient Radial Glows -->
    <div class="absolute top-0 right-1/4 w-[500px] h-[300px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
    <div class="absolute bottom-0 left-10 w-[450px] h-[300px] bg-[#B7410E]/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
      
      <!-- Pre-Footer: 4 Luxury Assurance Badges -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-12 border-b border-zinc-800/80">
        
        <div class="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/30 transition flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
            <i class="bi bi-gem"></i>
          </div>
          <div>
            <h5 class="text-xs font-bold text-white uppercase tracking-wider">Couture Quality</h5>
            <p class="text-[11px] text-zinc-400 mt-0.5">Handcrafted silks, corsetry & plate armor</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/30 transition flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
            <i class="bi bi-shield-check"></i>
          </div>
          <div>
            <h5 class="text-xs font-bold text-white uppercase tracking-wider">100% Fit Guarantee</h5>
            <p class="text-[11px] text-zinc-400 mt-0.5">Alterations kit & same-day courier swaps</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/30 transition flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
            <i class="bi bi-virus"></i>
          </div>
          <div>
            <h5 class="text-xs font-bold text-white uppercase tracking-wider">Medical Ozone Clean</h5>
            <p class="text-[11px] text-zinc-400 mt-0.5">100% sanitized & hypoallergenic care</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/30 transition flex items-center gap-3.5 group">
          <div class="w-11 h-11 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
            <i class="bi bi-arrow-repeat"></i>
          </div>
          <div>
            <h5 class="text-xs font-bold text-white uppercase tracking-wider">Automated Escrow</h5>
            <p class="text-[11px] text-zinc-400 mt-0.5">Full deposit release within 48 hours</p>
          </div>
        </div>

      </div>

      <!-- Main 4-Column Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/80">
        
        <!-- Column 1: Brand Info -->
        <div class="space-y-5">
          <a href="index.html" class="flex items-center gap-3 group transition-transform hover:opacity-90 w-fit cursor-pointer" title="FancyVerse - Return to Home">
            <div class="w-10 h-10 rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform flex-shrink-0 bg-[#B7410E] flex items-center justify-center">
              <img src="favicon.svg" alt="FancyVerse Custom Costume Hire" class="w-full h-full object-cover">
            </div>
            <div class="flex flex-col justify-center">
              <span class="text-xl font-black tracking-tight text-white leading-none">
                Fancy<span class="brand-verse">Verse</span>
              </span>
              <span class="text-[9px] uppercase tracking-[0.22em] font-extrabold text-[#E5A87B] mt-0.5 brand-subtitle">
                Custom & Costume Hire
              </span>
            </div>
          </a>

          <p class="text-zinc-400 text-xs leading-relaxed">
            Curating luxury costumes, theatrical wardrobe, bespoke cosplay, and occasion styling for film productions, galas, parties, and festive celebrations worldwide.
          </p>

          <div class="flex items-center gap-2.5 pt-1">
            <a href="https://www.instagram.com/fancyverse.rentals/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 transition shadow-sm" title="Instagram @fancyverse.rentals">
              <i class="bi bi-instagram text-xs"></i>
            </a>
            <a href="https://www.facebook.com/fancyverse.rentals/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Page" class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 transition shadow-sm" title="Facebook @fancyverse.rentals">
              <i class="bi bi-facebook text-xs"></i>
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter" class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 transition shadow-sm" title="X / Twitter">
              <i class="bi bi-twitter-x text-xs"></i>
            </a>
            <a href="https://www.linkedin.com/company/fancyverse-rentals/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" class="w-8 h-8 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-400/50 hover:bg-zinc-800/80 transition shadow-sm" title="LinkedIn @fancyverse-rentals">
              <i class="bi bi-linkedin text-xs"></i>
            </a>
          </div>
        </div>

        <!-- Column 2: Costume Occasions -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Costume Occasions
          </h4>
          <ul class="space-y-2 text-xs text-zinc-400">
            <li><a href="catalog.html?occasion=Kids" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform duration-150"><span>🎈</span> Kids Fairytales & Heroes</a></li>
            <li><a href="catalog.html?occasion=Themed+Parties" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform duration-150"><span>✨</span> Themed Parties & Galas</a></li>
            <li><a href="catalog.html?occasion=Cultural" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform duration-150"><span>🌸</span> Cultural & Traditional Silk</a></li>
            <li><a href="catalog.html?occasion=Historical" class="hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-transform duration-150"><span>⚔️</span> Historical & Period Armor</a></li>
            <li class="pt-1.5"><a href="catalog.html" class="hover:text-amber-300 font-bold text-amber-400 inline-flex items-center gap-1 transition">View All 2,500+ Ensembles →</a></li>
          </ul>
        </div>

        <!-- Column 3: Wardrobe Services -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Services & Care
          </h4>
          <ul class="space-y-2 text-xs text-zinc-400">
            <li><a href="services.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">All Wardrobe Services</a></li>
            <li><a href="service-details.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">Service Details & Pricing Table</a></li>
            <li><a href="fitting-studio.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">Private Fitting Studio & Tailoring</a></li>
            <li><a href="size-guide.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">Size Guide & Fit Guarantee</a></li>
            <li><a href="pricing.html" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">Pricing & Security Deposit Policy</a></li>
            <li><a href="index.html#bulk-enquiry" class="hover:text-white hover:translate-x-1 inline-block transition-transform duration-150">School & Studio Bulk Hire</a></li>
          </ul>
        </div>

        <!-- Column 4: Broadway Flagship & Concierge -->
        <div class="space-y-4">
          <h4 class="text-xs font-bold uppercase tracking-widest text-amber-400 flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Broadway Flagship
          </h4>
          <div class="space-y-2.5 text-xs text-zinc-300">
            <p class="flex items-start gap-2">
              <i class="bi bi-geo-alt-fill text-amber-400 text-sm mt-0.5 flex-shrink-0"></i>
              <span>480 Broadway Ave, Theatrical District, Suite 120, Manhattan, NY</span>
            </p>
            <p class="flex items-center gap-2">
              <i class="bi bi-telephone-fill text-amber-400 text-sm flex-shrink-0"></i>
              <a href="tel:+18005553262" class="hover:text-white transition">+1 (800) 555-FANCY</a>
            </p>
            <p class="flex items-center gap-2">
              <i class="bi bi-lightning-charge-fill text-red-400 text-sm flex-shrink-0"></i>
              <span>Emergency 24/7: +1 (212) 555-0199</span>
            </p>
            <p class="flex items-center gap-2">
              <i class="bi bi-clock-fill text-amber-400 text-sm flex-shrink-0"></i>
              <span class="text-zinc-400">Mon–Fri: 10AM–8PM • Sat–Sun: 11AM–6PM</span>
            </p>
          </div>
          <div class="pt-1">
            <a href="contact.html#fitting" class="btn-primary-theme text-[11px] py-2 px-4 rounded-xl font-bold shadow inline-flex items-center gap-1.5">
              <i class="bi bi-calendar-check-fill"></i> Book Salon Chamber
            </a>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <p>&copy; ${new Date().getFullYear()} <a href="index.html" class="hover:text-amber-400 transition font-semibold">FancyVerse Wardrobe & Rental Co.</a> All rights reserved.</p>
        <div class="flex flex-wrap items-center gap-4 text-[11px]">
          <span class="text-zinc-400 flex items-center gap-1"><i class="bi bi-shield-check text-emerald-500"></i> 100% Fit Guarantee</span>
          <span class="text-zinc-400 flex items-center gap-1"><i class="bi bi-truck text-amber-500"></i> Manhattan Courier</span>
          <span class="text-zinc-400 flex items-center gap-1"><i class="bi bi-lock-fill text-purple-500"></i> Escrow Protected</span>
        </div>
      </div>

    </div>
  </footer>
  `;
});
