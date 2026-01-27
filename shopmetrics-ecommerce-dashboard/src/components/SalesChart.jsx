import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { month: "Jan", sales: 2400 },
  { month: "Feb", sales: 3200 },
  { month: "Mar", sales: 4100 },
  { month: "Apr", sales: 5300 },
];

export default function SalesChart() {
  return (
    <div className="card shadow-sm p-4">
      <h5 className="mb-3 fw-semibold">Sales Growth</h5>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="sales" stroke="#0d6efd" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
