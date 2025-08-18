import { FiGrid, FiZap, FiHome } from "react-icons/fi";

const categories = [
  {
    icon: <FiGrid className="text-3xl text-yellow-700 mb-2" />,
    title: "Luxury Sofa Set",
    products: "26 Products",
  },
  {
    icon: <FiGrid className="text-3xl text-yellow-700 mb-2" />,
    title: "Table & Chair",
    products: "40 Products",
  },
  {
    icon: <FiZap className="text-3xl text-yellow-700 mb-2" />,
    title: "Vases & Lamp",
    products: "14 Products",
  },
  {
    icon: <FiHome className="text-3xl text-yellow-700 mb-2" />,
    title: "Interior Collection",
    products: "32 Products",
  },
];

function CategoryBar() {
  return (
    <div className="flex justify-center space-x-6 mt-0">
      {categories.map((cat, idx) => (
        <div
          key={cat.title}
          className={`bg-white rounded-xl shadow p-6 min-w-[180px] flex flex-col items-center ${
            idx !== categories.length - 1 ? "border-r border-gray-200" : ""
          }`}
        >
          {cat.icon}
          <div className="font-semibold text-gray-800">{cat.title}</div>
          <div className="text-sm text-gray-500 mt-1">{cat.products}</div>
        </div>
        
      ))}
    </div>
  );
}

export default CategoryBar;