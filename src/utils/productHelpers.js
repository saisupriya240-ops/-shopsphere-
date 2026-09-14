// Category filter list shown in UI
export const CATEGORY_FILTERS = [
  'All',
  'Indian Products',
  'Fashion',
  'Grocery/Food',
  'Tech/Electronics',
  'Audio',
  'Lifestyle',
  "Women's Accessories",
  "Men's Hoodies",
  'Jeans',
  'Crop Tops',
  'Footwear',
  'Bags',
  'Watches',
  'Jewellery',
  "Men's Casual Wear",
  "Women's Casual Wear",
];

// Maps UI filter labels → one or more product.category values
const CATEGORY_GROUPS = {
  'Indian Products': ['Indian Products', 'Handicrafts', 'Home & Kitchen'],
  'Fashion':         ['Fashion'],
  'Grocery/Food':    ['Grocery/Food'],
  'Tech/Electronics':['Tech/Electronics', 'Electronics'],
  'Audio':           ['Audio'],
  'Lifestyle':       ['Lifestyle', 'Accessories', 'Beauty'],
  "Women's Accessories": ["Women's Accessories"],
  "Men's Hoodies":       ["Men's Hoodies"],
  'Jeans':               ['Jeans'],
  'Crop Tops':           ['Crop Tops'],
  'Footwear':            ['Footwear'],
  'Bags':                ['Bags'],
  'Watches':             ['Watches'],
  'Jewellery':           ['Jewellery'],
  "Men's Casual Wear":   ["Men's Casual Wear"],
  "Women's Casual Wear": ["Women's Casual Wear"],
};

export const matchesCategory = (product, selected) => {
  if (!selected || selected === 'All') return true;
  const group = CATEGORY_GROUPS[selected];
  if (group) return group.includes(product.category);
  return product.category === selected;
};

export const getProductImages = (product) => {
  if (!product) return [];
  const list = product.gallery || product.images || [product.image];
  return [...new Set(list.filter(Boolean))];
};

export const getStock = (product) => {
  if (!product) return 0;
  if (typeof product.stock === 'number') return product.stock;
  return product.inStock ? 12 : 0;
};

export const searchProducts = (list, query) => {
  const q = (query || '').trim().toLowerCase();
  if (!q) return list;
  return list.filter((p) => {
    const hay = [p.name, p.title, p.category, p.description, ...(p.tags || [])]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    return hay.includes(q);
  });
};

export const sortProducts = (list, sortBy) => {
  const items = [...list];
  switch (sortBy) {
    case 'price-low':
      return items.sort((a, b) => a.price - b.price);
    case 'price-high':
      return items.sort((a, b) => b.price - a.price);
    case 'rating':
      return items.sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0));
    case 'newest':
      return items.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    case 'discount':
      return items.sort((a, b) => (b.discount || 0) - (a.discount || 0));
    default:
      return items.sort((a, b) =>
        Number(b.featured) - Number(a.featured) ||
        (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0)
      );
  }
};
