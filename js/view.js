export function render(app, orders, products, onDetail) {
app.innerHTML = `
<div class="row mb-4">

<div class="col-md-3">
<div class="card p-3">
<h6>Clients</h6>
<h3 id="totalCustomers">0</h3>
</div>
</div>

<div class="col-md-3">
<div class="card p-3">
<h6>Produits</h6>
<h3 id="totalProducts">0</h3>
</div>
</div>

      <div class="col-md-3">
        <div class="card p-3">
          <h6>Commandes</h6>
          <h3 id="totalOrders">0</h3>
        </div>
      </div>

      <div class="col-md-3">
        <div class="card p-3">
          <h6>Total</h6>
          <h3 id="totalAmount">0 MAD</h3>
        </div>
      </div>

    </div>

    <div id="orders"></div>
  `;

  const ordersContainer = document.querySelector("#orders");

  orders.forEach(order => {
    ordersContainer.innerHTML += `
      <div class="card mb-3 p-3">
        <h5>Commande #${order.id}</h5>
        <p>Client : ${order.customer.name}</p>
        <p>Date : ${order.date}</p>
        <p>Statut : ${order.status}</p>
        <p>Total : ${order.total} MAD</p>

        <button class="btn btn-primary detail-button" data-id="${order.id}">
          Détail
        </button>
      </div>
    `;
  });

  document.querySelector("#totalCustomers").textContent =
    app.dataset.customers;

  document.querySelector("#totalProducts").textContent =
    products.length;

  document.querySelector("#totalOrders").textContent =
    orders.length;

  const total = orders.reduce((sum, order) => sum + order.total, 0);

  document.querySelector("#totalAmount").textContent =
    total + " MAD";

  document.querySelectorAll(".detail-button").forEach(button => {
    button.addEventListener("click", () => {
      onDetail(Number(button.dataset.id));
    });
  });
}