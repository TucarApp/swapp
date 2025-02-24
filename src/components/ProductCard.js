import React from "react";
import Link from "next/link";

function ProductCard() {
  return (
    <div className="flex flex-col gap-y-8 mt-12">
      <Link href="/cpx">
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-200">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-black">CPX</h2>
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
              src="/CPX/cpxcostado.webp"
              alt="Moto eléctrica S01+"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
      </Link>
      <Link href="/vs1">
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-200">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-black">VS1</h2>
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
              src="/VS1/vs1costado.png"
              alt="Moto eléctrica S01+"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
      </Link>
      <Link href="/vs3">
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-6 w-full max-w-lg border border-gray-200">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-black">VS3</h2>
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
              src="/VS3/VS3.webp"
              alt="Moto eléctrica S01+"
              className="w-40 h-auto object-contain"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
