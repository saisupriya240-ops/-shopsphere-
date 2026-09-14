import { products } from './src/data/products.js';

const cats = {};
products.forEach(p => {
  cats[p.category] = (cats[p.category] || 0) + 1;
});

console.log('Total products:', products.length);
console.log('\nProducts by raw category:');
Object.entries(cats).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => console.log(`  ${k}: ${v}`));

const ids = products.map(p => p.id);
const uniqueIds = new Set(ids);
console.log('\nUnique IDs:', uniqueIds.size);
console.log('Duplicate IDs:', ids.length - uniqueIds.size);

// Check duplicate names
const names = products.map(p => p.name);
const uniqueNames = new Set(names);
console.log('Unique names:', uniqueNames.size);
console.log('Duplicate names:', names.length - uniqueNames.size);

// Verify rating is always a number
const badRatings = products.filter(p => typeof p.rating !== 'number' || isNaN(p.rating));
console.log('\nProducts with non-numeric rating:', badRatings.length);
if (badRatings.length) badRatings.forEach(p => console.log(' ', p.id, p.name, p.rating));

// Verify images all exist
const missingImages = products.filter(p => !p.image);
console.log('Products with missing image:', missingImages.length);

// Show featured count
const featured = products.filter(p => p.featured);
console.log('\nFeatured products:', featured.length);
