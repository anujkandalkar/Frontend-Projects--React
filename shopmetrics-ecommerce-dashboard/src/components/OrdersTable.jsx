const orders = [
  { id: 101, customer: "John Doe", amount: "$120", status: "Delivered" },
  { id: 102, customer: "Aman Patel", amount: "$240", status: "Pending" },
  { id: 103, customer: "Sara Khan", amount: "$90", status: "Cancelled" },
];

export default function OrdersTable() {
  return (
    <div className="card shadow-sm p-4 mt-4">
      <h5 className="mb-3 fw-semibold">Recent Orders</h5>

      <table className="table table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td>
                <span className={`badge ${
                  order.status === "Delivered" ? "bg-success" :
                  order.status === "Pending" ? "bg-warning text-dark" :
                  "bg-danger"
                }`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
