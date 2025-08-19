import { FiHome } from "react-icons/fi";
import { RiSofaLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { GiPorcelainVase } from "react-icons/gi";

const categories = [
  {
    icon: <RiSofaLine className="text-3xl text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700" />,
    title: "Luxury Sofa Set",
    products: "26 Products",
  },
  {
    icon: <GiOfficeChair className="text-3xl text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700"  />,
    title: "Table & Chair",
    products: "40 Products",
  },
  {
    icon: <GiPorcelainVase className="text-3xl text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700"  />,
    title: "Vases & Lamp",
    products: "14 Products",
  },
  {
    icon: <FiHome className="text-3xl text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700" />,
    title: "Interior Collection",
    products: "32 Products",
  },
];

function CategoryBar() {
  return (
    <div className="relative top-[-64px]  flex flex-wrap justify-center space-x-6 mt-2 pt-0">
      {categories.map((cat, id) => (
        <div
          key={cat.title}
          className={`bg-white rounded-xl shadow p-6 md:min-w-[150px]  flex flex-col items-center ${
            id !== categories.length-1 ? "border-r border-gray-200" : ""
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