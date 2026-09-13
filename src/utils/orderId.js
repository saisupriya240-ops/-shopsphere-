export const generateOrderId = () => {
  const stamp = Date.now().toString(36).toUpperCase();
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SS-${stamp}-${rand}`;
};

export default generateOrderId;
