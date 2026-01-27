import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SalesChart from "../components/SalesChart";
import OrdersTable from "../components/OrdersTable";

export default function Dashboard() {
  return (
    <div className="d-flex min-vh-100">
      <Sidebar />

      <div className="flex-grow-1 bg-light" style={{ marginLeft: "250px" }}>
        <Navbar />

        <div className="container-fluid px-4 mt-4">

          <div className="row g-3 mb-4">
            {[
              { title: "Total Sales", value: "$12,450" },
              { title: "Orders", value: "320" },
              { title: "Customers", value: "1,240" },
              { title: "Revenue", value: "$8,900" }
            ].map((item, i) => (
              <div className="col-md-3" key={i}>
                <div className="card shadow-sm p-3 text-center">
                  <small className="text-muted">{item.title}</small>
                  <h4 className="fw-bold mt-1">{item.value}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <SalesChart />
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm p-4">
                <h5 className="fw-semibold mb-3">Quick Stats</h5>
                <p>📦 Products: <b>124</b></p>
                <p>👥 Active Customers: <b>860</b></p>
                <p>🚚 Pending Orders: <b>12</b></p>
              </div>
            </div>
          </div>

          <OrdersTable />
        </div>
      </div>
    </div>
  );
}
