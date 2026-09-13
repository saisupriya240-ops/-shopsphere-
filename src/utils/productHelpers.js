export const CATEGORY_FILTERS = [
  'All',
  'Indian Products',
  'Fashion',
  'Grocery/Food',
  'Tech/Electronics',
  'Audio',
  'Lifestyle',
];

const CATEGORY_GROUPS = {
  'Indian Products': ['Indian Products', 'Handicrafts', 'Home & Kitchen'],
  Fashion: ['Fashion'],
  'Grocery/Food': ['Grocery/Food'],
  'Tech/Electronics': ['Electronics', 'Tech/Electronics'],
  Audio: ['Audio'],
  Lifestyle: ['Lifestyle', 'Accessories', 'Beauty'],
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
      return items.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return items.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0) || b.id - a.id);
    default:
      return items.sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating);
  }
};
