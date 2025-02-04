import React from 'react'

function ProductCard() {
    return (
        <div className='flex flex-col gap-y-8 mt-12'>
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-200">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-black">S01</h2>
            <div className="flex items-center mt-4 space-x-6">
              <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
                Probar <span className="ml-2">›</span>
              </button>
              <button className="text-black text-lg font-medium flex items-center">
                Configurar <span className="ml-2">›</span>
              </button>
            </div>
          </div>
          <div>
            <img
              src="/vs3/1.webp"
              alt="Moto eléctrica S01+"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-200">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-black">S01+</h2>
            <div className="flex items-center mt-4 space-x-6">
              <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
                Probar <span className="ml-2">›</span>
              </button>
              <button className="text-black text-lg font-medium flex items-center">
                Configurar <span className="ml-2">›</span>
              </button>
            </div>
          </div>
          <div>
            <img
              src="/vs3/2.webp"
              alt="Moto eléctrica S01+"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
        {/* <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-200">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-black">S02</h2>
            <div className="flex items-center mt-4 space-x-6">
              <button className="bg-black text-white px-6 py-2 rounded-lg flex items-center">
                Probar <span className="ml-2">›</span>
              </button>
              <button className="text-black text-lg font-medium flex items-center">
                Configurar <span className="ml-2">›</span>
              </button>
            </div>
          </div>
          <div>
            <img
              src="/vs3/3.webp"
              alt="Moto eléctrica S01+"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div> */}
        
        </div>
      );
}

export default ProductCard