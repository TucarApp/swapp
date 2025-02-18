import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-primary-dark mb-6"
            >
              La batería que revoluciona tu movilidad
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8"
            >
              Descubre nuestro innovador sistema de baterías intercambiables
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-dark text-lg px-8 py-6 rounded-full transition-all duration-300">
                Descubre más
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-dark mb-4">
              Planes de suscripción
            </h2>
            <p className="text-xl text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="p-8 h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-1 bg-primary rounded-full text-sm font-medium text-primary-dark mb-4">
                        {plan.type}
                      </span>
                      <h3 className="text-2xl font-bold text-primary-dark mb-2">{plan.title}</h3>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <div className="mt-auto">
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-primary-dark">{plan.price}€</span>
                        <span className="text-gray-600">/mes</span>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-dark rounded-full transition-all duration-300">
                        Seleccionar plan
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-primary-dark mb-6">
                Características principales
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      {feature.icon({ className: "w-6 h-6 text-primary-dark" })}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-dark mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <img
                src="/placeholder.svg"
                alt="Batería"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Data
const plans = [
  {
    type: "Básico",
    title: "Plan Inicial",
    description: "Perfecto para comenzar tu experiencia con movilidad eléctrica",
    price: 29.99,
  },
  {
    type: "Popular",
    title: "Plan Premium",
    description: "La mejor opción para uso frecuente",
    price: 49.99,
  },
  {
    type: "Pro",
    title: "Plan Ilimitado",
    description: "Libertad total para usuarios intensivos",
    price: 79.99,
  }
];

const features = [
  {
    title: "Intercambio rápido",
    description: "Cambia tu batería en menos de 1 minuto",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Red de estaciones",
    description: "Accede a nuestra amplia red de estaciones de intercambio",
    icon: ({ className }: { className?: string }) => (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default Index;
