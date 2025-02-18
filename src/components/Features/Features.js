import { Battery, Zap, Timer, Leaf } from 'lucide-react';

const features = [
  {
    title: "Batería Extraíble",
    description: "Sistema de batería extraíble para una carga más cómoda",
    icon: Battery
  },
  {
    title: "Motor Potente",
    description: "Motor eléctrico de alta eficiencia",
    icon: Zap
  },
  {
    title: "Carga Rápida",
    description: "Carga completa en solo 6-8 horas",
    icon: Timer
  },
  {
    title: "Eco-Friendly",
    description: "0% emisiones, 100% sostenible",
    icon: Leaf
  }
];

const Features = () => {
  return (

    <section className="py-20 px-4 bg-white pt-[120px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 text-[#333333]">
            Características Principales
          </h2>
          <p className="text-lg text-gray-600">
            Descubre por qué la VS1 es la mejor opción para moverse por la ciudad
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 "
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#333333]">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;