import Listing from "../Shop/Listing";

function NewArrival({ title = "New Arrival" }) {
  return (
    <section className=" mx-auto md:mt-0  px-4   p-5 md:p-0">
    <div className=" container mx-auto">
      <div className="flex flex-wrap items-center justify-between mb-6  p-5 md:p-0">
        <h2 className="text-2xl md:text-3xl font-semibold leading-none text-gray-800 pt-9 ">{title}</h2>
        <a href="/collection" className="text-gray-700 pt-[40px] md:pt-[50px] font-medium hover:text-yellow-700 ">
          See All Collection <span>&rarr;</span>
        </a>
      </div>
      <Listing category={"all"}/>
      <br /><br />
    </div>
    </section>
  );
}

export default NewArrival;