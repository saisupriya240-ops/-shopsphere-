const fs = require('fs');
const path = require('path');

const categories = [
  "Women's Accessories",
  "Men's Hoodies",
  "Jeans",
  "Crop Tops",
  "Footwear",
  "Bags",
  "Watches",
  "Jewellery",
  "Men's Casual Wear",
  "Women's Casual Wear"
];

const templates = {
  "Women's Accessories": { base: 199, max: 999, names: ["Silk Scarf", "Retro Sunglasses", "Leather Belt", "Hair Clips Set", "Hairband"] },
  "Men's Hoodies": { base: 699, max: 1499, names: ["Oversized Hoodie", "Zip-Up Hoodie", "Graphic Print Hoodie", "Essential Fleece", "Athletic Pullover"] },
  "Jeans": { base: 799, max: 1599, names: ["Slim Fit Denim", "Relaxed Fit Jeans", "Vintage Wash Jeans", "Distressed Denim", "High Waisted Jeans"] },
  "Crop Tops": { base: 299, max: 899, names: ["Ribbed Crop Top", "Graphic Crop Tee", "Long Sleeve Crop", "Halter Crop", "Knitted Crop Top"] },
  "Footwear": { base: 499, max: 1499, names: ["Chunky Sneakers", "Classic Canvas Shoes", "Leather Loafers", "Running Shoes", "Slip-on Sandals"] },
  "Bags": { base: 399, max: 1299, names: ["Tote Bag", "Crossbody Bag", "Mini Backpack", "Shoulder Bag", "Laptop Messenger"] },
  "Watches": { base: 499, max: 1499, names: ["Minimalist Watch", "Chronograph Watch", "Digital Sports Watch", "Leather Strap Watch", "Steel Band Watch"] },
  "Jewellery": { base: 199, max: 799, names: ["Hoop Earrings", "Layered Necklace", "Chunky Chain", "Minimalist Ring", "Charm Bracelet"] },
  "Men's Casual Wear": { base: 499, max: 1299, names: ["Cotton T-Shirt", "Polo Shirt", "Cargo Pants", "Chino Shorts", "Casual Button Down"] },
  "Women's Casual Wear": { base: 499, max: 1299, names: ["Maxi Dress", "Oversized Tee", "Linen Trousers", "Denim Skirt", "Cardigan"] }
};

const images = [
  "https://images.unsplash.com/photo-1520975954732-57dd22299614?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1434389678243-d7313364f981?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1617325247661-6750059c4d9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

let products = [];
let idCounter = 1;

for (const category of categories) {
  const tpl = templates[category];
  for (let i = 0; i < 5; i++) {
    const price = Math.floor(Math.random() * (tpl.max - tpl.base)) + tpl.base;
    const originalPrice = Math.floor(price * (1 + (Math.random() * 0.5 + 0.1)));
    
    products.push({
      id: idCounter.toString(),
      name: tpl.names[i] + ' ' + (Math.random() > 0.5 ? 'Premium' : 'Classic'),
      category: category,
      price: price,
      originalPrice: originalPrice,
      discount: Math.round(((originalPrice - price) / originalPrice) * 100),
      rating: (Math.random() * 1.5 + 3.5).toFixed(1),
      reviewCount: Math.floor(Math.random() * 500) + 10,
      image: images[Math.floor(Math.random() * images.length)],
      description: 'Experience premium quality and style with this affordable essential. Perfect for everyday wear or statement looks.',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Grey'],
      stock: Math.floor(Math.random() * 50) + 5,
      tags: ['New', 'Trending', category.split(' ')[0]],
      featured: i === 0,
      createdAt: Date.now() - Math.floor(Math.random() * 10000000000)
    });
    idCounter++;
  }
}

const fileContent = "export const products = " + JSON.stringify(products, null, 2) + ";\n";

fs.writeFileSync(path.join(__dirname, 'src', 'data', 'products.js'), fileContent);
console.log('Generated 50 products in src/data/products.js');
