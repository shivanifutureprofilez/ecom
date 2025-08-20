import { FiHome } from "react-icons/fi";
import { RiSofaLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { GiPorcelainVase } from "react-icons/gi";
function CategoryBar() {
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
  return (
    <div className="relative top-[-64px] md:top-[-70px]  flex flex-wrap justify-center space-x-2 md:space-x-4 mt-2 pt-0">
      {categories.map((cat, id) => (
        <div
          key={cat.title}
          className={`bg-white rounded-xl shadow p-2  md:p-6 min-w-[80px] lg:min-w-[150px] mb-3 flex flex-col items-center ${
            id !== categories.length-1 ? "border-r border-gray-200" : ""
          }`}
        >
          {cat.icon}
          <div className="text-[14px] md:text-[16px] font-normal text-gray-800">{cat.title}</div>
          <div className="text-sm text-gray-500 mt-1">{cat.products}</div>
        </div>
        
      ))}
    </div>
  );
}

export default CategoryBar;