import { FiHome } from "react-icons/fi";
import { RiSofaLine } from "react-icons/ri";
import { GiOfficeChair } from "react-icons/gi";
import { GiPorcelainVase } from "react-icons/gi";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Api } from "../../Api/Api";
function CategoryBar() {

  const [categories,setCategories] = useState([]);

  useEffect(()=>{ 
    const fetch = Api.get("http://localhost:5001/api/product/get-stats");
    fetch.then((res)=>{ 
      const stats = res?.data?.allstats
      setCategories([
      {
        icon: <RiSofaLine size={24} className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2 md:ml-0" />,
        title: "Luxury Sofa Set",
        value: "sofa",
        products: `${stats && stats['sofa']} Products`,
      },
      {
        icon: <GiOfficeChair size={24} className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2" />,
        title: "Table & Chair",
        value: "table",
        products: `${stats && stats['table']} Products`,

      },
      {
        icon: <GiPorcelainVase size={24} className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 p-2" />,
        title: "Vases & Lamp",
        value: "lamp",
        products: `${stats && stats['lamp']} Products`,

      },
      {
        icon: <FiHome size={24} className="hover:bg-yellow-700 hover:text-white text-5xl min-h-[55px] rounded-xl min-w-[55px] text-yellow-700 mb-2 border border-primary round-[10px] border-yellow-700 md:p-2 p-2  md:ml-0" />,
        title: "Chairs",
        value: "chair",
        products: `${stats && stats['chair']} Products`,
      },
    ])
    })
  })

  return (
    <div className="relative container mx-auto top-[-80px] md:top-[-55px] grid  grid-cols-1 md:grid-cols-4 xl:grid-cols-4 mt-2 pr-[30px] pl-[30px]">
      {categories.map((cat, id) => (
        <Link  to={`/shop?selected_category=${cat.value}`}
          key={cat.title}
          className={`bg-white md:p-8 group flex items-center gap-5 p-6 shadow-md 
          first:rounded-t-lg last:rounded-b-lg 
          md:first:rounded-l-lg md:last:rounded-r-lg 
          justify-center md:justify-start 
          ${id !== categories.length - 1 ? "border-b border-bdr-clr md:border-r-2" : ""}`}
        >
          <div className="p-1 shrink-0">
            {cat.icon}
          </div>
          <div className="p-1 flex-1 text-left">
            <p>
            <h2 className="text-[15px] font-medium text-gray-800 leading-tight truncate">
                {cat.title}
            </h2>
            </p>
            <p className="text-sm text-gray-500 mt-1">{cat.products}</p>
          </div>
        </Link>

      ))}

    </div>
  );
};

export default CategoryBar;