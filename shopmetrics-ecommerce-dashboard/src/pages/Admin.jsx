import Sidebar from "../components/Sidebar";
import { useShop } from "../context/ShopContext";

export default function Admin() {
  const { products, updateProduct } = useShop();

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-5" style={{ marginLeft: "250px" }}>
        <h3>Admin Control Panel</h3>
        <p className="text-muted">Update product data to see real-time Dashboard changes.</p>
        
        <div className="card shadow-sm p-4">
          <table className="table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Sales</th>
                <th>Revenue ($)</th>
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>
                    <input type="number" className="form-control" defaultValue={p.sales} 
                      onChange={(e) => updateProduct(p.id, parseInt(e.target.value), p.revenue)} />
                  </td>
                  <td>
                    <input type="number" className="form-control" defaultValue={p.revenue} 
                      onChange={(e) => updateProduct(p.id, p.sales, parseInt(e.target.value))} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}