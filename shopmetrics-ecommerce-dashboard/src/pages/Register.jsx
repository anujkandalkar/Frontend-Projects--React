import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();
    // In a real app, you'd save this to a database
    alert("Registration Successful! Please login.");
    navigate("/login");
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow border-0" style={{ width: "380px" }}>
        <h4 className="fw-bold mb-3">Create Account</h4>
        <p className="text-muted small">Join ShopMetrics to manage your store.</p>
        
        <form onSubmit={handleRegister}>
          <input className="form-control mb-2" placeholder="Full Name" required />
          <input className="form-control mb-2" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required />
          <input className="form-control mb-3" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required />
          
          <button className="btn btn-success w-100 fw-bold" type="submit">Register</button>
        </form>

        <p className="text-center mt-3 small">
          Already have an account? <Link to="/login" className="text-decoration-none">Login</Link>
        </p>
      </div>
    </div>
  );
}