/**
 * Formats a numeric value into Indian Rupee (INR) currency string.
 * Example: 1299 -> ₹1,299
 */
export const formatINR = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

export default formatINR;
