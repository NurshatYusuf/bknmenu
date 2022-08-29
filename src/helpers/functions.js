export function getCountDishesInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));

  return cart ? cart.dishes.length : 0;
}

export const calcSubPrice = (dish) => +dish.count * dish.item.price;

export const calcTotalPrice = (dishes) => {
  return dishes.reduce((pV, cur) => {
    return (pV += cur.subPrice);
  }, 0);
};
