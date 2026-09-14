const rawProducts = [
  // 1. Indian Handicrafts & Home Decor
  {
    id: 1,
    name: "Handcrafted Blue Pottery Ceramic Vase",
    category: "Indian Products",
    price: 1299,
    originalPrice: 1899,
    rating: 4.8,
    reviewsCount: 124,
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=400&q=75",
    description: "Traditional Jaipur hand-painted blue pottery floral vase. Crafted by master artisans using quartz stone powder.",
    featured: true,
    inStock: true,
    quality: "Handmade",
    sizes: ["Small", "Medium", "Large"],
    shapes: ["Round", "Oval"],
    tags: ["pottery", "handicraft", "home decor", "vase", "jaipur"]
  },
  {
    id: 2,
    name: "Terracotta Handcrafted Tea Kulhad Set (Set of 6)",
    category: "Indian Products",
    price: 499,
    originalPrice: 799,
    rating: 4.9,
    reviewsCount: 230,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=75",
    description: "Eco-friendly handmade natural clay tea cups (kulhads). Perfect for authentic Indian Masala Chai.",
    featured: true,
    inStock: true,
    quality: "Organic",
    sizes: ["150ml"],
    shapes: ["Round"],
    tags: ["clay", "terracotta", "tea", "kulhad", "handicraft", "chai"]
  },
  {
    id: 3,
    name: "Pure Brass Antique Finished Diya Set",
    category: "Home & Kitchen",
    price: 899,
    originalPrice: 1200,
    rating: 4.7,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1605000311542-67ed153139f4?auto=format&fit=crop&w=400&q=75",
    description: "Traditional brass oil lamps for puja and festive home decoration. Durable solid brass construction.",
    featured: false,
    inStock: true,
    quality: "Handmade",
    sizes: ["Medium"],
    shapes: ["Round"],
    tags: ["brass", "diya", "pooja", "home decor", "festive"]
  },

  // 2. Fashion & Indian Apparel
  {
    id: 4,
    name: "Handwoven Chanderi Silk Saree with Zari Border",
    category: "Fashion",
    price: 3499,
    originalPrice: 4999,
    rating: 4.9,
    reviewsCount: 165,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=75",
    description: "Elegant lightweight Chanderi silk saree featuring intricate gold zari motif work. Comes with unstitched blouse piece.",
    featured: true,
    inStock: true,
    quality: "Handmade",
    sizes: ["Free Size"],
    shapes: null,
    tags: ["saree", "silk", "chanderi", "ethnic", "fashion", "wedding"]
  },
  {
    id: 5,
    name: "Men's Pure Khadi Cotton Regular Fit Kurta",
    category: "Fashion",
    price: 1199,
    originalPrice: 1699,
    rating: 4.6,
    reviewsCount: 92,
    image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?auto=format&fit=crop&w=400&q=75",
    description: "Breathable hand-spun khadi cotton mandarin collar kurta for festive and casual traditional wear.",
    featured: false,
    inStock: true,
    quality: "Organic",
    sizes: ["S", "M", "L", "XL", "XXL"],
    shapes: null,
    tags: ["kurta", "khadi", "cotton", "mens fashion", "ethnic"]
  },
  {
    id: 6,
    name: "Embroidered Pashmina Feel Shawl",
    category: "Fashion",
    price: 1799,
    originalPrice: 2499,
    rating: 4.8,
    reviewsCount: 74,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=75",
    description: "Ultra-soft Kashmiri style floral embroidered wrap shawl for winter warmth and regal elegance.",
    featured: false,
    inStock: true,
    quality: "Premium",
    sizes: ["Free Size"],
    shapes: ["Rectangular"],
    tags: ["shawl", "pashmina", "winter", "embroidery", "kashmiri"]
  },

  // 3. Grocery / Food Items & Spices
  {
    id: 7,
    name: "Kashmiri Organic Mongra Saffron (1 Gram)",
    category: "Grocery/Food",
    price: 649,
    originalPrice: 850,
    rating: 4.9,
    reviewsCount: 310,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=75",
    description: "100% pure Grade A1 GI-tagged Pampore Kashmiri Saffron strands. Rich aroma and deep natural crimson color.",
    featured: true,
    inStock: true,
    quality: "Organic",
    sizes: null,
    shapes: null,
    tags: ["saffron", "kesar", "kashmir", "spices", "organic", "grocery"]
  },
  {
    id: 8,
    name: "Darjeeling First Flush Organic Whole Leaf Green Tea (250g)",
    category: "Grocery/Food",
    price: 799,
    originalPrice: 1050,
    rating: 4.7,
    reviewsCount: 140,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=75",
    description: "Hand-picked high-altitude Darjeeling tea leaves packed with natural antioxidants and floral aroma.",
    featured: false,
    inStock: true,
    quality: "Organic",
    sizes: ["250g", "500g"],
    shapes: null,
    tags: ["tea", "green tea", "darjeeling", "organic", "beverage"]
  },
  {
    id: 9,
    name: "Authentic Malabar Whole Black Pepper & Cardamom Combo (500g)",
    category: "Grocery/Food",
    price: 949,
    originalPrice: 1299,
    rating: 4.8,
    reviewsCount: 95,
    image: "https://images.unsplash.com/photo-1509358271058-acd02cc93898?auto=format&fit=crop&w=400&q=75",
    description: "Farm-fresh aromatic spices directly sourced from Kerala spice plantations.",
    featured: false,
    inStock: true,
    quality: "Organic",
    sizes: ["500g"],
    shapes: null,
    tags: ["spices", "kerala", "pepper", "cardamom", "cooking", "organic"]
  },

  // 4. Electronics & Gadgets
  {
    id: 10,
    name: "True Wireless ANC Earbuds with Spatial Audio",
    category: "Audio",
    price: 2499,
    originalPrice: 4499,
    rating: 4.6,
    reviewsCount: 520,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=400&q=75",
    description: "Active Noise Cancellation up to 32dB, 40-hour playback case, quad mics for crystal clear calls.",
    featured: true,
    inStock: true,
    quality: "Standard",
    sizes: null,
    shapes: null,
    tags: ["earbuds", "audio", "bluetooth", "wireless", "electronics", "anc"]
  },
  {
    id: 11,
    name: "1.96\" HD AMOLED Smartwatch with BT Calling",
    category: "Electronics",
    price: 1999,
    originalPrice: 3999,
    rating: 4.5,
    reviewsCount: 380,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=400&q=75",
    description: "Always-On AMOLED Display, SpO2 & Heart Rate tracking, IP68 water resistant with 100+ watch faces.",
    featured: true,
    inStock: true,
    quality: "Standard",
    sizes: ["Standard"],
    shapes: ["Square"],
    tags: ["smartwatch", "fitness", "watch", "electronics", "gadget"]
  },
  {
    id: 12,
    name: "Fast 10000mAh Magnetic Wireless Power Bank",
    category: "Electronics",
    price: 1499,
    originalPrice: 2299,
    rating: 4.7,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1609592424089-a796e6d1c9b2?auto=format&fit=crop&w=400&q=75",
    description: "22.5W Fast Type-C PD output & 15W Mag-Safe wireless charging for iOS & Android devices.",
    featured: false,
    inStock: true,
    quality: "Premium",
    sizes: null,
    shapes: ["Rectangular"],
    tags: ["powerbank", "charger", "mobile accessory", "electronics"]
  },

  // 5. Beauty & Personal Care
  {
    id: 13,
    name: "Kumkumadi Tailam Ayurvedic Night Facial Oil (30ml)",
    category: "Beauty",
    price: 899,
    originalPrice: 1250,
    rating: 4.9,
    reviewsCount: 410,
    image: "https://images.unsplash.com/photo-1608248597261-e4d0947c6b1e?auto=format&fit=crop&w=400&q=75",
    description: "Traditional Ayurvedic glow elixir formulated with Saffron, Sandalwood, and 26 natural herbs.",
    featured: true,
    inStock: true,
    quality: "Organic",
    sizes: ["30ml"],
    shapes: null,
    tags: ["skincare", "ayurveda", "facial oil", "saffron", "beauty"]
  },
  {
    id: 14,
    name: "Natural Neem & Tea Tree Clarifying Face Wash (150ml)",
    category: "Beauty",
    price: 349,
    originalPrice: 499,
    rating: 4.6,
    reviewsCount: 189,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&q=75",
    description: "Sulfate & Paraben free gentle foaming cleanser for oil control and clear acne-free skin.",
    featured: false,
    inStock: true,
    quality: "Organic",
    sizes: ["150ml"],
    shapes: null,
    tags: ["facewash", "skincare", "neem", "acne", "beauty"]
  },

  // 6. Accessories & Lifestyle
  {
    id: 15,
    name: "Handcrafted Genuine Leather Bi-Fold Slim Wallet",
    category: "Accessories",
    price: 799,
    originalPrice: 1299,
    rating: 4.7,
    reviewsCount: 260,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=400&q=75",
    description: "RFID-blocking handcrafted full-grain leather wallet with coin pocket and dual cash slots.",
    featured: false,
    inStock: true,
    quality: "Handmade",
    sizes: ["Standard"],
    shapes: ["Rectangular"],
    tags: ["wallet", "leather", "mens accessory", "fashion"]
  },
  {
    id: 16,
    name: "UV400 Polarized Aviator Sunglasses",
    category: "Accessories",
    price: 999,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 175,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=75",
    description: "Lightweight metal alloy frame sunglasses with scratch-resistant glare-reducing polarized lenses.",
    featured: false,
    inStock: true,
    quality: "Premium",
    sizes: ["Medium"],
    shapes: ["Oval"],
    tags: ["sunglasses", "eyewear", "fashion", "accessories"]
  },
  {
    id: 17,
    name: "Eco-Friendly Bamboo Water Bottle (750ml)",
    category: "Lifestyle",
    price: 599,
    originalPrice: 899,
    rating: 4.6,
    reviewsCount: 110,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=75",
    description: "Insulated food-grade stainless steel inner bottle with natural bamboo exterior wrap.",
    featured: false,
    inStock: true,
    quality: "Organic",
    sizes: ["750ml"],
    shapes: ["Round"],
    tags: ["bamboo", "bottle", "eco friendly", "lifestyle"]
  },
  {
    id: 19,
    name: "Bamboo Handcrafted Table Lamp",
    category: "Handicrafts",
    price: 899,
    originalPrice: 1299,
    rating: 4.7,
    reviewsCount: 68,
    image: "https://images.unsplash.com/photo-1571230743173-2e8cd7fae8d8?auto=format&fit=crop&w=400&q=75",
    description: "Eco-friendly bamboo table lamp with intricate hand-carved patterns, providing warm ambient lighting.",
    featured: false,
    inStock: true,
    quality: "Handmade",
    sizes: null,
    shapes: ["Cylinder"],
    tags: ["bamboo", "lamp", "handicraft", "home decor"]
  },
  {
    id: 20,
    name: "Terracotta Decorative Wall Hanging",
    category: "Handicrafts",
    price: 749,
    originalPrice: 999,
    rating: 4.6,
    reviewsCount: 45,
    image: "https://images.unsplash.com/photo-1588152075605-0de9efc5d5a7?auto=format&fit=crop&w=400&q=75",
    description: "Hand-painted terracotta wall art featuring traditional Indian motifs, perfect for living spaces.",
    featured: false,
    inStock: true,
    quality: "Handpainted",
    sizes: null,
    shapes: ["Rectangle"],
    tags: ["terracotta", "wall hanging", "handicraft", "decor"]
  },
  {
    id: 21,
    name: "Madhubani Hand-painted Canvas",
    category: "Handicrafts",
    price: 1499,
    originalPrice: 1999,
    rating: 4.8,
    reviewsCount: 52,
    image: "https://images.unsplash.com/photo-1606855601319-0f8c2f1e5e6c?auto=format&fit=crop&w=400&q=75",
    description: "Vibrant Madhubani style hand-painted canvas artwork, showcasing Indian folk art traditions.",
    featured: true,
    inStock: true,
    quality: "Handpainted",
    sizes: ["30x40 cm", "40x50 cm"],
    shapes: ["Rectangle"],
    tags: ["Madhubani", "canvas", "handicraft", "art"]
  },
  {
    id: 18,
    name: "Handmade Sheesham Wood Carved Chess Set",
    category: "Indian Products",
    price: 1899,
    originalPrice: 2699,
    rating: 4.9,
    reviewsCount: 84,
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=400&q=75",
    description: "Magnetic folding wooden chess board with intricately hand-carved solid Indian Sheesham wood pieces.",
    featured: false,
    inStock: true,
    quality: "Handmade",
    sizes: ["Medium (12x12 in)"],
    shapes: ["Square"],
    tags: ["chess", "wooden", "handicraft", "games", "sheesham"]
  },
  {
    id: 22, name: "Premium Leather Messenger Bag", category: "Accessories", price: 3499, originalPrice: 4999, rating: 4.8, reviewsCount: 34, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=400&q=75", description: "Vintage style full grain leather messenger bag.", featured: false, inStock: true, quality: "Premium"
  },
  {
    id: 23, name: "Noise Cancelling Headphones", category: "Audio", price: 5999, originalPrice: 8999, rating: 4.7, reviewsCount: 412, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=75", description: "Over-ear noise cancelling wireless headphones.", featured: true, inStock: true, quality: "Premium"
  },
  {
    id: 24, name: "Smart Fitness Band", category: "Electronics", price: 1299, originalPrice: 1999, rating: 4.3, reviewsCount: 890, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b0?auto=format&fit=crop&w=400&q=75", description: "Waterproof fitness band with heart rate monitor.", featured: false, inStock: true, quality: "Standard"
  },
  {
    id: 25, name: "Organic Honey 500g", category: "Grocery/Food", price: 499, originalPrice: 650, rating: 4.9, reviewsCount: 156, image: "https://images.unsplash.com/photo-1587049352847-81a56d773c1c?auto=format&fit=crop&w=400&q=75", description: "Pure raw organic honey from local farms.", featured: false, inStock: true, quality: "Organic"
  },
  {
    id: 26, name: "Ceramic Coffee Mug Set", category: "Home & Kitchen", price: 899, originalPrice: 1299, rating: 4.6, reviewsCount: 45, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=400&q=75", description: "Set of 2 minimalist ceramic coffee mugs.", featured: false, inStock: true, quality: "Handmade"
  },
  {
    id: 27, name: "Men's Classic White Sneakers", category: "Fashion", price: 2199, originalPrice: 3499, rating: 4.5, reviewsCount: 234, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=400&q=75", description: "Comfortable and stylish white sneakers for daily wear.", featured: true, inStock: true, quality: "Premium"
  },
  {
    id: 28, name: "Women's Floral Summer Dress", category: "Fashion", price: 1599, originalPrice: 2299, rating: 4.7, reviewsCount: 189, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=75", description: "Lightweight floral print summer dress.", featured: false, inStock: true, quality: "Standard"
  },
  {
    id: 29, name: "Portable Bluetooth Speaker", category: "Audio", price: 1899, originalPrice: 2999, rating: 4.4, reviewsCount: 312, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=400&q=75", description: "Water-resistant portable speaker with deep bass.", featured: false, inStock: true, quality: "Standard"
  },
  {
    id: 30, name: "Wooden Desk Organizer", category: "Lifestyle", price: 799, originalPrice: 1199, rating: 4.8, reviewsCount: 56, image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=75", description: "Handcrafted wooden organizer for pens and accessories.", featured: false, inStock: true, quality: "Handmade"
  },
  {
    id: 31, name: "Aromatherapy Essential Oil Diffuser", category: "Lifestyle", price: 1499, originalPrice: 2199, rating: 4.6, reviewsCount: 145, image: "https://images.unsplash.com/photo-1602928307616-2d1f7c0062b3?auto=format&fit=crop&w=400&q=75", description: "Ultrasonic humidifier and essential oil diffuser.", featured: true, inStock: true, quality: "Premium"
  },
  {
    id: 32, name: "Organic Arabica Coffee Beans 250g", category: "Grocery/Food", price: 449, originalPrice: 599, rating: 4.9, reviewsCount: 210, image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?auto=format&fit=crop&w=400&q=75", description: "Freshly roasted organic Arabica beans.", featured: false, inStock: true, quality: "Organic"
  },
  {
    id: 33, name: "Minimalist Silver Watch", category: "Accessories", price: 2999, originalPrice: 4500, rating: 4.7, reviewsCount: 88, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=400&q=75", description: "Sleek stainless steel watch with a minimalist dial.", featured: true, inStock: true, quality: "Premium"
  },
  {
    id: 34, name: "Hand-painted Jute Tote Bag", category: "Handicrafts", price: 699, originalPrice: 999, rating: 4.5, reviewsCount: 42, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=75", description: "Eco-friendly tote bag with vibrant hand-painted designs.", featured: false, inStock: true, quality: "Handpainted"
  },
  {
    id: 35, name: "Wireless Charging Pad", category: "Electronics", price: 999, originalPrice: 1499, rating: 4.4, reviewsCount: 156, image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&q=75", description: "15W fast wireless charger for Qi-enabled devices.", featured: false, inStock: true, quality: "Standard"
  },
  {
    id: 36, name: "Vegan Leather Crossbody Bag", category: "Fashion", price: 1899, originalPrice: 2599, rating: 4.6, reviewsCount: 95, image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=400&q=75", description: "Cruelty-free vegan leather bag with adjustable strap.", featured: false, inStock: true, quality: "Premium"
  },
  {
    id: 37, name: "Himalayan Pink Salt 1kg", category: "Grocery/Food", price: 299, originalPrice: 450, rating: 4.8, reviewsCount: 320, image: "https://images.unsplash.com/photo-1517415170366-85c13b30bd27?auto=format&fit=crop&w=400&q=75", description: "Pure, mineral-rich pink salt sourced from the Himalayas.", featured: false, inStock: true, quality: "Organic"
  },
  {
    id: 38, name: "Stainless Steel Chef's Knife", category: "Home & Kitchen", price: 1299, originalPrice: 1999, rating: 4.9, reviewsCount: 110, image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&w=400&q=75", description: "Professional grade 8-inch stainless steel chef's knife.", featured: true, inStock: true, quality: "Premium"
  },
  {
    id: 39, name: "Ayurvedic Hair Growth Oil", category: "Beauty", price: 549, originalPrice: 799, rating: 4.5, reviewsCount: 275, image: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=400&q=75", description: "Infused with Bhringraj and Amla for healthy hair.", featured: false, inStock: true, quality: "Organic"
  },
  {
    id: 40, name: "Handcrafted Brass Urli", category: "Indian Products", price: 2199, originalPrice: 3299, rating: 4.7, reviewsCount: 65, image: "https://images.unsplash.com/photo-1605000311542-67ed153139f4?auto=format&fit=crop&w=400&q=75", description: "Traditional brass bowl for floating flowers and candles.", featured: false, inStock: true, quality: "Handmade"
  },
  {
    id: 41, name: "Silk Blend Sleep Mask", category: "Lifestyle", price: 399, originalPrice: 599, rating: 4.6, reviewsCount: 142, image: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=400&q=75", description: "Soft, breathable sleep mask for a restful night.", featured: false, inStock: true, quality: "Standard"
  },
  {
    id: 42, name: "Macrame Plant Hanger", category: "Handicrafts", price: 499, originalPrice: 750, rating: 4.8, reviewsCount: 98, image: "https://images.unsplash.com/photo-1600411832986-5a4477b64a1c?auto=format&fit=crop&w=400&q=75", description: "Hand-knotted cotton rope hanger for indoor plants.", featured: false, inStock: true, quality: "Handmade"
  },
  {
    id: 43, name: "Mechanical Gaming Keyboard", category: "Electronics", price: 3499, originalPrice: 4999, rating: 4.7, reviewsCount: 215, image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=400&q=75", description: "RGB backlit mechanical keyboard with blue switches.", featured: true, inStock: true, quality: "Premium"
  },
  {
    id: 44, name: "Men's Slim Fit Chinos", category: "Fashion", price: 1499, originalPrice: 2199, rating: 4.4, reviewsCount: 160, image: "https://images.unsplash.com/photo-1473966968600-fa801b1c280e?auto=format&fit=crop&w=400&q=75", description: "Comfortable cotton stretch chinos for work or casual wear.", featured: false, inStock: true, quality: "Standard"
  },
  {
    id: 45, name: "Rose Water Facial Toner", category: "Beauty", price: 299, originalPrice: 450, rating: 4.9, reviewsCount: 380, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=75", description: "100% pure distilled rose water for glowing skin.", featured: false, inStock: true, quality: "Organic"
  },
  {
    id: 46, name: "Copper Water Bottle 1L", category: "Lifestyle", price: 899, originalPrice: 1299, rating: 4.6, reviewsCount: 125, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=75", description: "Ayurvedic health benefits, pure copper bottle.", featured: false, inStock: true, quality: "Standard"
  },
  {
    id: 47, name: "Turmeric Powder (Haldi) 500g", category: "Grocery/Food", price: 199, originalPrice: 299, rating: 4.8, reviewsCount: 250, image: "https://images.unsplash.com/photo-1615486171448-4fd9a6136a61?auto=format&fit=crop&w=400&q=75", description: "High curcumin content, organic turmeric powder.", featured: false, inStock: true, quality: "Organic"
  },
  {
    id: 48, name: "Handwoven Cotton Throw Blanket", category: "Home & Kitchen", price: 1199, originalPrice: 1699, rating: 4.7, reviewsCount: 75, image: "https://images.unsplash.com/photo-1580828369019-22204c3e800c?auto=format&fit=crop&w=400&q=75", description: "Cozy textured cotton blanket for the sofa or bed.", featured: false, inStock: true, quality: "Handmade"
  },
  {
    id: 49, name: "Bluetooth Soundbar", category: "Audio", price: 4599, originalPrice: 6999, rating: 4.5, reviewsCount: 180, image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=400&q=75", description: "Immersive 2.1 channel soundbar with subwoofer.", featured: true, inStock: true, quality: "Premium"
  },
  {
    id: 50, name: "Terracotta Planter Pots (Set of 3)", category: "Indian Products", price: 699, originalPrice: 999, rating: 4.6, reviewsCount: 90, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=75", description: "Classic unglazed clay pots for indoor and outdoor plants.", featured: false, inStock: true, quality: "Handmade"
  },
  {
    id: 51, name: "Polarized Driving Glasses", category: "Accessories", price: 1199, originalPrice: 1899, rating: 4.7, reviewsCount: 110, image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=75", description: "Anti-glare lenses, perfect for driving and outdoor activities.", featured: false, inStock: true, quality: "Premium"
  },
  {
    id: 52, name: "Women's Canvas Tote", category: "Fashion", price: 799, originalPrice: 1299, rating: 4.5, reviewsCount: 145, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=75", description: "Spacious everyday canvas tote bag with inner pockets.", featured: false, inStock: true, quality: "Standard"
  },
  {
    id: 53, name: "Sandalwood Incense Sticks", category: "Lifestyle", price: 249, originalPrice: 350, rating: 4.9, reviewsCount: 420, image: "https://images.unsplash.com/photo-1605000311542-67ed153139f4?auto=format&fit=crop&w=400&q=75", description: "Natural Mysore sandalwood agarbatti for a calming aroma.", featured: true, inStock: true, quality: "Organic"
  }
];

const extraGalleries = {
  1: ['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80'],
  4: ['https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80'],
  10: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'],
  11: ['https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80'],
  18: ['https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=800&q=80'],
};

export const products = rawProducts.map((product) => {
  const gallery = extraGalleries[product.id]
    ? extraGalleries[product.id]
    : [product.image];
  return {
    ...product,
    title: product.name,
    stock: product.inStock === false ? 0 : 6 + (product.id % 18),
    gallery,
    images: gallery,
    createdAt: Date.UTC(2026, (product.id * 2) % 12, (product.id % 27) + 1),
    specifications: {
      Quality: product.quality || 'Standard',
      Category: product.category,
      Origin: 'India',
      ...(product.sizes ? { Options: Array.isArray(product.sizes) ? product.sizes.join(', ') : String(product.sizes) } : {}),
      ...(product.shapes ? { Form: Array.isArray(product.shapes) ? product.shapes.join(', ') : String(product.shapes) } : {}),
    },
  };
});

export const categories = [
  'All',
  'Indian Products',
  'Fashion',
  'Grocery/Food',
  'Tech/Electronics',
  'Audio',
  'Lifestyle',
];
