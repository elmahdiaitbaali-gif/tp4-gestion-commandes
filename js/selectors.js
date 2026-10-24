export function getCustomer(order, customers) {
  return customers.find(customer => customer.id === order.customerId);
}

export function getProduct(item, products) {
  return products.find(product => product.id === item.productId);
}
export function getProductAmount(item, products) {
  const product = getProduct(item, products);
  return product.price * item.quantity;
}
export function getOrderTotal(order, products) {
  let total = 0;
  order.items.forEach(item => {
    total += getProductAmount(item, products);
  });
  return total;
}

export function getOrdersData(orders, customers, products) {
  return orders.map(order => {
    const customer = getCustomer(order, customers);

return {
...order,
customer,
total: getOrderTotal(order, products)
};
});
}

export function filterOrders(orders, customers, products, search, status, category) {
return getOrdersData(orders, customers, products).filter(order => {
const nameMatch = order.customer.name
.toLowerCase()
.includes(search.toLowerCase());

const statusMatch = !status || order.status === status;

const categoryMatch =
!category ||
order.items.some(item => {
const product = getProduct(item, products);
return product.category === category;
});

return nameMatch && statusMatch && categoryMatch;
  });
}