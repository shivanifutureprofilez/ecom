function Card({products}) {
    
  return (
    <div className="max-w-6xl mx-auto px-4">
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-[65px] ">
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </div>
      </div>
  )
}

export default Card;