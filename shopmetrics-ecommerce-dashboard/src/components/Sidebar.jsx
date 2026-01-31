import { Link } from "react-router-dom";
import { FaChartLine, FaBox, FaUsers, FaUserCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-dark text-white d-flex flex-column p-4" style={{ width: "250px", height: "100vh", position: "fixed" }}>
      <h4 className="mb-4 fw-bold">ShopMetrics</h4>
      <ul className="nav flex-column gap-2">
        <li><Link to="/" className="nav-link text-white"><FaChartLine className="me-2"/> Dashboard</Link></li>
        <li><Link to="/products" className="nav-link text-white"><FaBox className="me-2"/> Products</Link></li>
        <li><Link to="/customers" className="nav-link text-white"><FaUsers className="me-2"/> Customers</Link></li>
        <hr className="bg-secondary" />
        <li><Link to="/admin" className="nav-link text-warning"><FaUserCog className="me-2"/> Admin Panel</Link></li>
      </ul>
    </div>
  );
}