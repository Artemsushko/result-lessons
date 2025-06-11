function getTotalPriceOfShoppingBag(shoppingBagArray) {
  return shoppingBagArray
    .reduce((sum, prod) => {
      const prodId = groceries[prod.productId];
      return sum + (prod.count * prodId.price * (100 - prodId.discount)) / 100;
    }, 0)
    .toFixed(2);
}

const groceries = {
  '73Wakv': {
    name: 'Orange Juice',
    price: 1.5,
    discount: 10,
  },
  '5L3db9': {
    name: 'Chocolate',
    price: 2,
    discount: 0,
  },
};

const shoppingBag = [
  { productId: '73Wakv', count: 3 },
  { productId: '5L3db9', count: 23 },
];

const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
console.log('totalPrice', totalPrice); // Возвращает 50.05
