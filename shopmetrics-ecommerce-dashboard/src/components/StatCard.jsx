export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-5 rounded shadow hover:shadow-md transition">
      <h4 className="text-gray-500 text-sm">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
