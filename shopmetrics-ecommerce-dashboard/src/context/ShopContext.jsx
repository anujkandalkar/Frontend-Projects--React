import { createContext, useState, useContext } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [stats, setStats] = useState([
    { title: "Total Sales", value: 12450, unit: "$" },
    { title: "Orders", value: 320, unit: "" },
    { title: "Customers", value: 1240, unit: "" },
    { title: "Revenue", value: 8900, unit: "$" }
  ]);

  const [products, setProducts] = useState([
    { id: 1, name: "iPhone 14", sales: 120, revenue: 45000 },
    { id: 2, name: "Headphones", sales: 85, revenue: 12300 },
    { id: 3, name: "Laptop", sales: 60, revenue: 72000 },
  ]);

  // Function to update a product and sync stats
  const updateProduct = (id, newSales, newRevenue) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, sales: newSales, revenue: newRevenue } : p));
  };

  return (
    <ShopContext.Provider value={{ stats, setStats, products, updateProduct }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => useContext(ShopContext);