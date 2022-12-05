function ShopCard () {
  return (
    <div className="min-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-10">
        <div className="md:flex rounded-xl">
            <div className="md:shrink-0">
                <img className="h-28 w-full object-cover md:h-full md:w-48 " src="https://www.wbcsd.org/var/site/storage/images/media/images/fresh_pa/80809-2-eng-GB/FRESH_PA_i1140.jpg" alt="Modern building architecture"/>
            </div>
            <div className="p-8">
               <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Stilo Mineiro</div>
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Comida Brasileira</a>
                <p className="mt-2 text-slate-500">4.3 - 30-20m - $3,00</p>
            </div>
       </div>
    </div>
  )
}

export default ShopCard
