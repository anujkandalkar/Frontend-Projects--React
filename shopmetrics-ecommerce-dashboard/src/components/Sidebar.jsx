import { FaChartLine, FaBox, FaUsers, FaShoppingCart } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div
      className="bg-dark text-white d-flex flex-column p-4"
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0
      }}
    >
      <h4 className="mb-4 fw-bold">ShopMetrics</h4>

      <ul className="nav flex-column gap-3">
        <li className="nav-item">
          <span className="nav-link text-white d-flex align-items-center gap-2">
            <FaChartLine /> Dashboard
          </span>
        </li>

        <li className="nav-item">
          <span className="nav-link text-white d-flex align-items-center gap-2">
            <FaShoppingCart /> Orders
          </span>
        </li>

        <li className="nav-item">
          <span className="nav-link text-white d-flex align-items-center gap-2">
            <FaBox /> Products
          </span>
        </li>

        <li className="nav-item">
          <span className="nav-link text-white d-flex align-items-center gap-2">
            <FaUsers /> Customers
          </span>
        </li>
      </ul>

      <div className="mt-auto text-muted small">
        © 2026 ShopMetrics
      </div>
    </div>
  );
}
