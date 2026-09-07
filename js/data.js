/* ==========================================================================
   FancyVerse - Mock Database strictly focused on 4 Categories:
   Kids, Themed Parties, Cultural, Historical
   ========================================================================== */

const costumeCategories = [
  'All',
  'Kids',
  'Themed Parties',
  'Cultural',
  'Historical'
];

const occasions = [
  'Kids',
  'Themed Parties',
  'Cultural',
  'Historical'
];

const mockCostumes = [
  // ==================== 1. KIDS COSTUMES (4 Items) ====================
  {
    id: "CST-KID-101",
    name: "Enchanted Fairytale Princess Ballgown",
    category: "Kids",
    occasion: "Kids",
    dailyRate: 35,
    weekendRate: 60,
    deposit: 50,
    rating: 4.9,
    reviewsCount: 52,
    stock: 8,
    sizes: ["Age 3-5", "Age 6-8", "Age 9-11"],
    image: "https://images.unsplash.com/photo-1737257218703-9cb7e8504901?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1737257218703-9cb7e8504901?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1200"
    ],
    badge: "Kids Bestseller",
    isFeatured: true,
    isTrending: true,
    description: "Sparkling multi-tiered pastel organza ballgown featuring delicate butterfly embroidery, non-scratch breathable cotton lining, safe twinkling LED hemline, matching tiara, and star wand.",
    specs: {
      material: "Hypoallergenic Organza, Soft Tulle, 100% Breathable Cotton Lining",
      includes: "Light-Up Ballgown, Sparkle Tiara, Magic Star Wand, Detachable Wings",
      care: "Pediatric dermatologically tested eco-wash between every child rental",
      cleaningDeposit: "Low $50 refundable safety deposit released in 24h"
    }
  },
  {
    id: "CST-KID-102",
    name: "Little Royal Prince Charming & Guard",
    category: "Kids",
    occasion: "Kids",
    dailyRate: 34,
    weekendRate: 58,
    deposit: 50,
    rating: 4.8,
    reviewsCount: 39,
    stock: 9,
    sizes: ["Age 3-5", "Age 6-8", "Age 9-11"],
    image: "https://i.pinimg.com/736x/ff/f3/8a/fff38a70b9ac2bb716ad8ac3549ba5e0.jpg",
    gallery: [
      "https://i.pinimg.com/736x/c3/9a/d7/c39ad77f078edd56a2728683f6294352.jpg"
    ],
    badge: "Birthday Hit",
    isFeatured: true,
    isTrending: true,
    description: "Comfortable, irritation-free royal ceremonial prince suit complete with gold bullion epaulettes, soft satin red sash, gold braid buttons, elasticated white trousers, and soft felt crown.",
    specs: {
      material: "Soft Poly-Satin, Cotton Twill Pants, Felt Trim",
      includes: "Ceremonial Jacket, Trousers, Gold Buckle Belt, Crimson Sash, Crown",
      care: "Gentle eco-cleaning with zero harsh perfumes",
      cleaningDeposit: "Fully refundable $50 deposit"
    }
  },
  {
    id: "CST-KID-103",
    name: "Mighty Galaxy Superhero Ranger Suit",
    category: "Kids",
    occasion: "Kids",
    dailyRate: 36,
    weekendRate: 62,
    deposit: 50,
    rating: 5.0,
    reviewsCount: 44,
    stock: 7,
    sizes: ["Age 4-6", "Age 7-9", "Age 10-12"],
    image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=1200"
    ],
    badge: "Action Hero",
    isFeatured: false,
    isTrending: true,
    description: "High-energy heroic action jumpsuit with soft padded muscle chest, metallic superhero crest, detachable flowing satin cape, comfy half-cowl mask, and lightweight soft utility belt.",
    specs: {
      material: "4-Way Breathable Stretch Spandex, Soft Foam Padding",
      includes: "Muscle Jumpsuit, Snap-On Cape, Soft Cowl Mask, Toy Utility Belt",
      care: "Medical ozone disinfected and hypoallergenic sanitized",
      cleaningDeposit: "100% refundable upon return"
    }
  },
  {
    id: "CST-KID-104",
    name: "Whimsical Storybook Lion King & Safari Explorer",
    category: "Kids",
    occasion: "Kids",
    dailyRate: 32,
    weekendRate: 55,
    deposit: 45,
    rating: 4.8,
    reviewsCount: 31,
    stock: 10,
    sizes: ["Age 3-5", "Age 6-8", "Age 9-11"],
    image: "https://i.pinimg.com/1200x/bc/f0/4c/bcf04c46d3ef769ef62540b2c1fceeea.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/55/77/fb/5577fbc7a2be7fcc989c3e236ae539bf.jpg"
    ],
    badge: "School Plays #1",
    isFeatured: false,
    isTrending: false,
    description: "Ultra-plush and huggable storybook lion onesie with fluffy faux-fur mane hood, soft padded tail, explorer khaki vest, compass prop, and animal paw mittens.",
    specs: {
      material: "Super-Soft Microfleece, Hypoallergenic Faux Fur",
      includes: "Fleece Lion Jumpsuit with Hood, Explorer Vest, Paw Mitts, Toy Compass",
      care: "Pediatric eco-washed",
      cleaningDeposit: "Refundable $45 deposit"
    }
  },

  // ==================== 2. THEMED PARTIES COSTUMES (4 Items) ====================
  {
    id: "CST-PTY-201",
    name: "Roaring 20s Gatsby Diamond Flapper Gown",
    category: "Themed Parties",
    occasion: "Themed Parties",
    dailyRate: 48,
    weekendRate: 85,
    deposit: 100,
    rating: 4.9,
    reviewsCount: 68,
    stock: 12,
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/4b/68/d4/4b68d40f449bd2d4801adc8255a4530e.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/e0/c7/f9/e0c7f9e0cd32b83d5954c1dbefb7c44a.jpg"
    ],
    badge: "Party Legend",
    isFeatured: true,
    isTrending: true,
    description: "Shimmering champagne and gold Art Deco flapper gown dripping in hand-beaded glass fringe, geometric sequined motifs, matching ostrich feather plume headband, and 60-inch pearl strand necklace.",
    specs: {
      material: "Stretch Mesh Base, Glass Bugle Beads, Genuine Ostrich Feather",
      includes: "Fringe Flapper Dress, Feather Headband, Long Pearl Strand, Satin Evening Gloves",
      care: "Professional gentle solvent clean included with rental",
      cleaningDeposit: "Immediate automated deposit refund on return"
    }
  },
  {
    id: "CST-PTY-202",
    name: "70s Disco Inferno Retro Glitz Jumpsuit",
    category: "Themed Parties",
    occasion: "Themed Parties",
    dailyRate: 46,
    weekendRate: 82,
    deposit: 90,
    rating: 4.8,
    reviewsCount: 54,
    stock: 9,
    sizes: ["S", "M", "L", "XL"],
    image: "https://i.pinimg.com/1200x/f2/3b/9f/f23b9f2fe2033ff1fe820b5a8f5c8bdf.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/4f/ff/a8/4fffa84711e02074e48d985c8f53272f.jpg"
    ],
    badge: "Dance Floor Hit",
    isFeatured: true,
    isTrending: true,
    description: "Dazzling metallic lame bell-bottom jumpsuit with plunging V-neckline, mirrored iridescent waist cincher belt, matching oversized retro aviator sunglasses, and funky platform collar jacket.",
    specs: {
      material: "Stretch Metallic Lame, Mirror Sequin Trim",
      includes: "Bell-Bottom Jumpsuit, Disco Belt, Aviator Sunglasses, Glitter Wristbands",
      care: "Eco-solvent steamed & disinfected",
      cleaningDeposit: "Fully refundable upon receipt"
    }
  },
  {
    id: "CST-PTY-203",
    name: "Wonderland Mad Hatter Whimsical Suit",
    category: "Themed Parties",
    occasion: "Themed Parties",
    dailyRate: 58,
    weekendRate: 105,
    deposit: 130,
    rating: 5.0,
    reviewsCount: 61,
    stock: 8,
    sizes: ["S", "M", "L", "XL"],
    image: "https://i.pinimg.com/1200x/25/83/40/258340b374895f53b307199fb169fb13.jpg",
    gallery: [
      "https://i.pinimg.com/736x/9d/0b/f1/9d0bf16d8cea902c815911bb8a5f9e1f.jpg"
    ],
    badge: "Fan Favorite",
    isFeatured: true,
    isTrending: true,
    description: "Vibrant and eccentric theatrical suit featuring a velvet distressed frock coat, mismatched patterned waistcoat, oversized silk bow tie, wooden thread spool bandolier, and iconic 10/6 top hat.",
    specs: {
      material: "Distressed Velveteen, Jacquard Silk, Wool Felt Hat",
      includes: "Velvet Frock Coat, Waistcoat, Striped Pants, Thread Bandolier, Top Hat, Oversized Bow Tie",
      care: "Medical ozone dry sanitized",
      cleaningDeposit: "Full deposit returned within 24 hours"
    }
  },
  {
    id: "CST-PTY-204",
    name: "Neon Carnival Harlequin Masquerade",
    category: "Themed Parties",
    occasion: "Themed Parties",
    dailyRate: 52,
    weekendRate: 92,
    deposit: 110,
    rating: 4.9,
    reviewsCount: 42,
    stock: 6,
    sizes: ["XS", "S", "M", "L"],
    image: "https://images.unsplash.com/photo-1603043147971-564df57e2915?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1603043147971-564df57e2915?auto=format&fit=crop&q=80&w=1200"
    ],
    badge: "Festival Choice",
    isFeatured: false,
    isTrending: false,
    description: "Electric diamond-checkered satin carnival tunic with exaggerated ruff jester collar, flared party trousers, matching feather tricorn hat, and handheld gilded jester masquerade mask.",
    specs: {
      material: "Premium Duchess Satin, Organza Collar, Feather Plume",
      includes: "Harlequin Tunic, Pants, Ruff Collar, Tricorn Hat, Masquerade Stick Mask",
      care: "Non-toxic delicate steam cleaning",
      cleaningDeposit: "100% refundable"
    }
  },

  // ==================== 3. CULTURAL COSTUMES (4 Items) ====================
  {
    id: "CST-CLT-301",
    name: "Traditional Kyoto Silk Furisode Kimono",
    category: "Cultural",
    occasion: "Cultural",
    dailyRate: 75,
    weekendRate: 140,
    deposit: 180,
    rating: 5.0,
    reviewsCount: 36,
    stock: 5,
    sizes: ["One Size (Adjustable)"],
    image: "https://i.pinimg.com/736x/a0/3e/86/a03e86c3ddae57346a230aeda4441cb4.jpg",
    gallery: [
      "https://images.unsplash.com/photo-1671730785203-44897ceef05f?auto=format&fit=crop&q=80&w=1200"
    ],
    badge: "Authentic Silk",
    isFeatured: true,
    isTrending: true,
    description: "Authentic hand-dyed Japanese raw silk furisode with cascading gold-leaf crane and cherry blossom (Sakura) motifs, gold-threaded brocade fukuro obi sash, and wooden geta clogs.",
    specs: {
      material: "100% Genuine Japanese Raw Silk, Gold Thread Embroidery",
      includes: "Kimono, Nagajuban Under-Slip, Brocade Obi Sash, Obijime Cord, Geta Clogs, Kanzashi Hairpin",
      care: "Museum-grade Japanese silk conservation dry treatment",
      cleaningDeposit: "Full deposit refunded post silk inspection"
    }
  },
  {
    id: "CST-CLT-302",
    name: "Venetian Carnivale Gilded Masquerade Ballgown",
    category: "Cultural",
    occasion: "Cultural",
    dailyRate: 65,
    weekendRate: 120,
    deposit: 150,
    rating: 4.9,
    reviewsCount: 58,
    stock: 7,
    sizes: ["S", "M", "L", "XL"],
    image: "https://images.unsplash.com/photo-1768229934730-5dc189e39ddf?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1768229934730-5dc189e39ddf?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1655951578974-48cd5e87db02?auto=format&fit=crop&q=80&w=1200"
    ],
    badge: "Venice Heritage",
    isFeatured: true,
    isTrending: true,
    description: "Centuries-old Venetian Carnival heritage design crafted from heavy Italian silk-blend brocade with interior corset boning, cascading velvet capelet, and filigree hand-carved Venetian mask.",
    specs: {
      material: "Heavy Italian Silk Brocade, Deep Velvet, Gilded Lace",
      includes: "Corset Gown, Hoop Crinoline Skirt, Velvet Cape, Hand-Carved Venetian Mask",
      care: "Eco-solvent dry cleaning & sanitization included",
      cleaningDeposit: "Fully refundable deposit"
    }
  },
  {
    id: "CST-CLT-303",
    name: "Scottish Highland Royal Tartan Kilt & Plaid",
    category: "Cultural",
    occasion: "Cultural",
    dailyRate: 55,
    weekendRate: 98,
    deposit: 120,
    rating: 4.9,
    reviewsCount: 34,
    stock: 8,
    sizes: ["M", "L", "XL"],
    image: "https://i.pinimg.com/1200x/51/df/6e/51df6e3aff3421fdd4813e04cbe6f0e9.jpg",
    gallery: [
      "https://i.pinimg.com/1200x/fa/28/2b/fa282b01053c2e2d6eba9c50ab6a4467.jpg"
    ],
    badge: "Celtic Heritage",
    isFeatured: false,
    isTrending: true,
    description: "Authentic 16oz woven wool 8-yard kilt in Royal Stewart tartan, paired with Prince Charlie black wool jacket, matching waistcoat, horsehair sporran with silver thistle cantle, and kilt pin.",
    specs: {
      material: "100% Pure Woven Scottish Wool, Leather, Cast Pewter",
      includes: "8-Yard Tartan Kilt, Prince Charlie Jacket, Waistcoat, Leather Sporran, Kilt Hose & Flashes",
      care: "Specialist wool press & steaming",
      cleaningDeposit: "Automatic release after check-in"
    }
  },
  {
    id: "CST-CLT-304",
    name: "Bavarian Alpine Dirndl & Lederhosen Set",
    category: "Cultural",
    occasion: "Cultural",
    dailyRate: 50,
    weekendRate: 90,
    deposit: 100,
    rating: 4.8,
    reviewsCount: 47,
    stock: 11,
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/6f/9a/b0/6f9ab0515ea1c3007d8c151e4a065d92.jpg",
    gallery: [
      "https://i.pinimg.com/736x/86/66/97/8666976335d763cbd0e25ab78c811550.jpg"
    ],
    badge: "Oktoberfest Choice",
    isFeatured: false,
    isTrending: false,
    description: "Traditional Munich festival attire featuring hand-embroidered velvet bodice, silk apron, puffed-sleeve cotton blouse, alongside companion genuine goat-suede leather Lederhosen with suspenders.",
    specs: {
      material: "Cotton Velvet, Genuine Suede Leather, Satin Apron",
      includes: "Embroidered Dirndl Dress OR Suede Lederhosen, Suspenders, Alpine Felt Hat with Feather",
      care: "Gentle leather and textile care",
      cleaningDeposit: "Refunded within 24h of return"
    }
  },

  // ==================== 4. HISTORICAL COSTUMES (4 Items) ====================
  {
    id: "CST-HST-401",
    name: "Victorian Aristocrat Steampunk Tailcoat",
    category: "Historical",
    occasion: "Historical",
    dailyRate: 55,
    weekendRate: 98,
    deposit: 120,
    rating: 4.9,
    reviewsCount: 73,
    stock: 8,
    sizes: ["S", "M", "L", "XL"],
    image: "https://i.pinimg.com/1200x/e1/ef/55/e1ef55f0df76e70d329ac1e60a179c91.jpg",
    gallery: [
      "https://i.pinimg.com/736x/9e/d3/77/9ed377fb85d54328e830daaf665177c3.jpg"
    ],
    badge: "Staff Pick",
    isFeatured: true,
    isTrending: true,
    description: "Complete 5-piece Victorian gentleman's ensemble featuring a tailored burgundy velvet tailcoat, double-breasted brocade waistcoat, brass gear goggles, wool top hat, and leather pocket holster.",
    specs: {
      material: "Wool Blend, Velvet, Brass Accents, PU Leather",
      includes: "Tailcoat, Double-Breasted Vest, Trousers, Top Hat with Goggles, Pocket Watch",
      care: "Steam sanitized between every rental",
      cleaningDeposit: "Refunded within 24h of return"
    }
  },
  {
    id: "CST-HST-402",
    name: "Medieval Silver Crusader Knight Plate Armor",
    category: "Historical",
    occasion: "Historical",
    dailyRate: 85,
    weekendRate: 155,
    deposit: 200,
    rating: 5.0,
    reviewsCount: 38,
    stock: 4,
    sizes: ["M", "L", "XL"],
    image: "https://i.pinimg.com/736x/c0/5a/59/c05a59b68eafe940565dffb783b2f965.jpg",
    gallery: [
      "https://i.pinimg.com/736x/a0/69/e8/a069e8f58bd96682e5ede3440cca6710.jpg"
    ],
    badge: "Museum Grade",
    isFeatured: true,
    isTrending: true,
    description: "Mirrored polished lightweight aluminum plate armor featuring engraved heraldic lion crest, articulated shoulder pauldrons, steel chainmail coif hood, and red velvet crusader surcoat.",
    specs: {
      material: "Polished Aviation Aluminum (Lightweight Wearable), Steel Chainmail, Cotton Surcoat",
      includes: "Cuirass Breastplate & Backplate, Pauldrons, Chainmail Coif, Red Surcoat, Leather Sword Belt",
      care: "Anti-tarnish buffing & interior ozone sanitization",
      cleaningDeposit: "Refundable deposit returned immediately on check-in"
    }
  },
  {
    id: "CST-HST-403",
    name: "Royal Renaissance Monarch Robe & Crown",
    category: "Historical",
    occasion: "Historical",
    dailyRate: 70,
    weekendRate: 130,
    deposit: 160,
    rating: 4.9,
    reviewsCount: 32,
    stock: 6,
    sizes: ["M", "L", "XL", "XXL"],
    image: "https://i.pinimg.com/736x/04/c9/e8/04c9e82dd92bd415036bab216f607203.jpg",
    gallery: [
      "https://i.pinimg.com/736x/64/ba/b7/64bab7583d0ad5d0d0a4b23e812f2b68.jpg"
    ],
    badge: "Stage Sovereign",
    isFeatured: false,
    isTrending: false,
    description: "Deep regal purple velvet mantle with faux ermine fur trim, jewel-encrusted chain of office, heavy jacquard doublet, matching trunk hose, and polished brass imperial crown.",
    specs: {
      material: "Cotton Velvet, Jacquard, Faux Ermine, Cast Pewter",
      includes: "Ermine Robe, Doublet, Trousers, Scepter, Imperial Brass Crown",
      care: "Museum-grade ozone sanitization",
      cleaningDeposit: "Full deposit refunded post check-in"
    }
  },
  {
    id: "CST-HST-404",
    name: "Ancient Roman Centurion & Goddess Drape",
    category: "Historical",
    occasion: "Historical",
    dailyRate: 60,
    weekendRate: 110,
    deposit: 140,
    rating: 4.9,
    reviewsCount: 45,
    stock: 7,
    sizes: ["XS", "S", "M", "L", "XL"],
    image: "https://i.pinimg.com/736x/a3/a1/b5/a3a1b58855c0aed3002bd6d267943732.jpg",
    gallery: [
      "https://i.pinimg.com/736x/32/ee/92/32ee925a7cf2507d91de72db3f73e660.jpg"
    ],
    badge: "Classical Antiquity",
    isFeatured: false,
    isTrending: true,
    description: "Authentic Roman Empire dress featuring molded leather-look muscle cuirass, crimson wool military cape, bronze lion clasps, gold laurel leaf wreath, and flowing ivory Grecian drape.",
    specs: {
      material: "Hardened Polyurethane Armor, Wool Cape, Chiffon Drape",
      includes: "Muscle Cuirass, Pteruges Skirt, Roman Cape, Laurel Wreath, Arm Bracers",
      care: "Eco-solvent disinfected",
    }
  }
];

const mockUsers = [
  { id: "USR-001", name: "Eleanor Vance", email: "eleanor@theatrics.org", role: "School Director", status: "Active", rentalsCount: 14, joinDate: "2026-02-10" },
  { id: "USR-002", name: "Marcus Sterling", email: "marcus@filmlab.com", role: "Party Coordinator", status: "Active", rentalsCount: 28, joinDate: "2026-01-15" },
  { id: "USR-003", name: "Arthur Pendelton", email: "admin@fancyverse.com", role: "Admin", status: "Active", rentalsCount: 0, joinDate: "2025-11-01" },
  { id: "USR-004", name: "Chloe Henderson", email: "chloe@events.co", role: "Parent Association Lead", status: "Active", rentalsCount: 9, joinDate: "2026-05-18" },
  { id: "USR-005", name: "Claire Beaumont", email: "user@fancyverse.com", role: "Customer", status: "Active", rentalsCount: 3, joinDate: "2026-06-20" }
];

const mockRentals = [
  {
    id: "RNT-8891",
    customer: "Eleanor Vance",
    costume: "Enchanted Fairytale Princess Ballgown",
    costumeId: "CST-KID-101",
    dates: "2026-09-08 to 2026-09-11 (3 Days)",
    totalAmount: 60.00,
    deposit: 50.00,
    status: "Active",
    pickupType: "School Delivery & Fitting"
  },
  {
    id: "RNT-8890",
    customer: "Marcus Sterling",
    costume: "Roaring 20s Gatsby Diamond Flapper Gown",
    costumeId: "CST-PTY-201",
    dates: "2026-09-05 to 2026-09-08 (3 Days)",
    totalAmount: 85.00,
    deposit: 100.00,
    status: "Due Today",
    pickupType: "In-Store Pickup"
  },
  {
    id: "RNT-8889",
    customer: "Chloe Henderson",
    costume: "Traditional Kyoto Silk Furisode Kimono",
    costumeId: "CST-CLT-301",
    dates: "2026-09-02 to 2026-09-05 (3 Days)",
    totalAmount: 140.00,
    deposit: 180.00,
    status: "Returned & Checked",
    pickupType: "Express Courier"
  },
  {
    id: "RNT-8888",
    customer: "Claire Beaumont",
    costume: "Medieval Silver Crusader Knight Plate Armor",
    costumeId: "CST-HST-402",
    dates: "2026-08-28 to 2026-08-31 (3 Days)",
    totalAmount: 155.00,
    deposit: 200.00,
    status: "Returned & Checked",
    pickupType: "In-Store Pickup"
  }
];

const mockQuotes = [
  {
    id: "ENQ-501",
    name: "St. Jude Academy Stage Crew",
    email: "theatre@stjude.edu",
    phone: "+1 (555) 918-2834",
    occasion: "Kids",
    volume: "15-25 Outfits",
    date: "2026-10-15",
    status: "In Discussion",
    message: "Need 18 fairytale prince, princess and storybook costumes for autumn annual school play."
  },
  {
    id: "ENQ-502",
    name: "Great Gatsby Gala Committee",
    email: "gala@manhattanevents.com",
    phone: "+1 (555) 302-8491",
    occasion: "Themed Parties",
    volume: "10-15 Outfits",
    date: "2026-10-28",
    status: "New",
    message: "Seeking complete 1920s flapper dresses and mobster tuxedo tailcoats for charity ball."
  },
  {
    id: "ENQ-503",
    name: "Scottish Highland Games & Dance",
    email: "info@celticheritage.org",
    phone: "+1 (555) 441-2900",
    occasion: "Cultural",
    volume: "8 Outfits",
    date: "2026-11-04",
    status: "Confirmed",
    message: "Authentic wool tartans and sporrans required for ceremonial bagpipers and dancers."
  }
];

// Attach to window
window.db = {
  categories: costumeCategories,
  occasions: occasions,
  costumes: mockCostumes,
  users: mockUsers,
  rentals: mockRentals,
  quotes: mockQuotes,
  enquiries: mockQuotes
};
