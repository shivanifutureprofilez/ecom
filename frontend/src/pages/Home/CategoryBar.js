import { FiHome } from "react-icons/fi";
import { RiSofaLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { GiPorcelainVase } from "react-icons/gi";
function CategoryBar() {
  const categories = [
    {
      icon: <RiSofaLine className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2 md:ml-0" />,
      title: "Luxury Sofa Set",
      products: "26 Products",
    },
    {
      icon: <GiOfficeChair className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2" />,
      title: "Table & Chair",
      products: "40 Products",
    },
    {
      icon: <GiPorcelainVase className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2" />,
      title: "Vases & Lamp",
      products: "14 Products",
    },
    {
      icon: <FiHome className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 md:p-2 p-2  md:ml-0" />,
      title: "Interior Collection",
      products: "32 Products",
    },
  ];
  return (
    <>

      <div className=" relative md:max-w-[1120px]  mx-auto top-[-80px] md:top-[-55px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 mt-2 pr-[30px] pl-[30px]">
        {categories.map((cat, id) => (
          <div
            key={cat.title}
            className={`bg-white p-3 rounded-xl flex justify-left gap-4  items-center ${id !== categories.length - 1 ? "   border-b border-bdr-clr md:border-r-2" : ""
              }`}
          >
            <div className="md:max-w-[940px] md:mx-auto p-5 md:p-0">
            {cat.icon}
            <div>
              <h2 className="text-[16px] md:text-[16px] font-medium text-gray-800">{cat.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{cat.products}</p>
            </div>

              </div>
          </div>

        ))}
      </div>
    </>

  );
};

export default CategoryBar;