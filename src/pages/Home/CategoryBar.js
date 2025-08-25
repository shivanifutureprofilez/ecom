import { FiHome } from "react-icons/fi";
import { RiSofaLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { GiPorcelainVase } from "react-icons/gi";
function CategoryBar() {
  const categories = [
  {
    icon: <RiSofaLine className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2" />,
    title: "Luxury Sofa Set",
    products: "26 Products",
  },
  {
    icon: <GiOfficeChair className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2"  />,
    title: "Table & Chair",
    products: "40 Products",
  },
  {
    icon: <GiPorcelainVase className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2"  />,
    title: "Vases & Lamp",
    products: "14 Products",
  },
  {
    icon: <FiHome className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2" />,
    title: "Interior Collection",
    products: "32 Products",
  },
];
  return (
    <>
    {/* <div className="relative top-[-64px] md:top-[-70px] flex flex-wrap justify-center items-center gap-[90px] mt-2 p-[1.5px] pt-0">
      {categories.map((cat, id) => (
        <div
          key={cat.title}
          className={`bg-white rounded-xl shadow p-2 md:w-[200px] md:p-6 mb-3 flex flex-col items-center ${
            id !== categories.length-1 ? "border-r border-gray-200" : ""
          }`}
        >
          {cat.icon}
          <div className="text-[14px] md:text-[16px] font-normal text-gray-800">{cat.title}</div>
          <div className="text-sm text-gray-500 mt-1">{cat.products}</div>
          </div>
        
      ))}
    </div> */}
    <div className="container m-auto">
    <div className=" bg-white shadow-lg  rounded-xl relative  m-auto top-[-30px] md:top-[-55px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4   xl:grid-cols-4   mt-2 p-[1.5px]  ">
      {categories.map((cat, id) => (
        <div
          key={cat.title}
          className={`bg-white  w-full  p-3 flex  justify-center gap-4   items-center ${
            id !== categories.length-1 ? "  border-black border-dashed border-r-2" : ""
          }`}
        >
          {cat.icon}
          <div>
            <h2 className="text-[14px] md:text-[16px] font-normal text-gray-800">{cat.title}</h2>
            <p className="text-sm text-gray-500 mt-1">{cat.products}</p>
          </div>


          </div>
        
      ))}
    </div>
    </div>
    </>
    
  );
};

export default CategoryBar;