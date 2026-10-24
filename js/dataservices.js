export async function loadData() {
  try {
    const customersResponse = await fetch("../data/customer.json");
    const productsResponse = await fetch("../data/product.json");
    const ordersResponse = await fetch("../data/orders.json");

    if (!customersResponse.ok || !productsResponse.ok || !ordersResponse.ok) {
      throw new Error("Impossible de charger les fichiers JSON");
    }

    const customers = await customersResponse.json();
    const products = await productsResponse.json();
    const orders = await ordersResponse.json();

    return {
      customers,
      products,
      orders
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}