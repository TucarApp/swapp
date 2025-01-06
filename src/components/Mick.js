const NewSection = () => {
    return (
      <section className="relative bg-gray-100 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda - Texto y botón */}
          <div className="bg-red-600 text-white rounded-lg p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Smart connectivity <br />
              <span className="text-3xl md:text-4xl font-normal">Tu Silence, en tu bolsillo</span>
            </h2>
            <button className="mt-6 bg-white text-red-600 px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-200 transition">
              Todos los detalles de la app &rarr;
            </button>
          </div>
  
          {/* Columna derecha - Imagen del teléfono */}
          <div className="flex justify-center items-center">
            <div className="max-w-xs w-full shadow-lg rounded-lg overflow-hidden">
              <img
                src="/phone_mockup.png"
                alt="Phone Mockup"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default NewSection;
  