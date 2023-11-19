export const fetchData = (item) => {
  const existingItems = JSON.parse(localStorage.getItem(item));
  return existingItems;
};

export const addToCart = (product, amount) => {
  const existingProducts = fetchData("products") || [];

  const newProduct = {
    id: product.id,
    name: product.shortName,
    price: product.price,
    cartImage: product.cartImage,
    counter: amount,
  };
  
  const existingProduct = existingProducts.findIndex((item) =>
    item.id === product.id);

  if (existingProduct !== -1) {
    existingProducts[existingProduct].counter = amount
  } else {
    existingProducts.push(newProduct)
  }

  localStorage.setItem("products", JSON.stringify(existingProducts));
  return existingProducts;
};

