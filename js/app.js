import { state } from "./state.js";
import { loadData } from "./dataservices.js";
import { filterOrders, getOrderTotal } from "./selectors.js";
import { render } from "./view.js";

const app = document.querySelector("#app");

async function init() {
  try {
    const data = await loadData();

    state.customers = data.customers;
    state.products = data.products;
    state.orders = data.orders;

    renderApp();
  } catch (error) {
    app.innerHTML = `
      <div class="alert alert-danger">
        Impossible de charger les données.
      </div>
    `;
  }
}

function renderApp() {
  const orders = filterOrders(
    state.orders,
    state.customers,
    state.products,
    state.search,
    state.status,
    state.category
  );

  app.dataset.customers = state.customers.length;

  render(app, orders, state.products, showDetail);
}

function showDetail(id) {
  const order = state.orders.find(order => order.id === id);

  const customer = state.customers.find(
    customer => customer.id === order.customerId
  );

  let message = "Commande #" + order.id + "\n";
  message += "Client : " + customer.name + "\n";
  message += "Ville : " + customer.city + "\n";
  message += "Date : " + order.date + "\n";
  message += "Statut : " + order.status + "\n\n";

  order.items.forEach(item => {
    const product = state.products.find(
      product => product.id === item.productId
    );

    const amount = product.price * item.quantity;

    message += product.name + "\n";
    message += "Prix : " + product.price + " MAD\n";
    message += "Quantité : " + item.quantity + "\n";
    message += "Montant : " + amount + " MAD\n\n";
  });

  message += "Total : " + getOrderTotal(order, state.products) + " MAD";

  alert(message);
}

document.querySelector("#search").addEventListener("input", event => {
  state.search = event.target.value;
  renderApp();
});

document.querySelector("#status").addEventListener("change", event => {
  state.status = event.target.value;
  renderApp();
});

document.querySelector("#category").addEventListener("change", event => {
  state.category = event.target.value;
  renderApp();
});

init();