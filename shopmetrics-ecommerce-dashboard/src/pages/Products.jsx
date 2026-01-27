export default function Products() {
  return (
    <div className="container mt-4">
      <h4>Product Performance</h4>

      <table className="table table-hover mt-3">
        <thead className="table-light">
          <tr>
            <th>Product</th>
            <th>Sales</th>
            <th>Revenue</th>
          </tr>
        </thead>

        <tbody>
          <tr><td>iPhone 14</td><td>120</td><td>$45,000</td></tr>
          <tr><td>Headphones</td><td>85</td><td>$12,300</td></tr>
          <tr><td>Laptop</td><td>60</td><td>$72,000</td></tr>
        </tbody>
      </table>
    </div>
  );
}
