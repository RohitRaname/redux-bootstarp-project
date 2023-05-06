export const formatPrice = (price) => {
  const amount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
  return amount;
};

export const getUniqueValues = (items, field) => {
  return [...new Set(items.map((item) => item[field]))];
};
