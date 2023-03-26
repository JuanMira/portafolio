import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { motion } from "framer-motion";
import { fadeIn, stagger, routeAnimation } from "../animations";

export default function Home() {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h5 className="my-3 font-medium">
        Aunque puede que no tenga experiencia laboral previa, cuenta con
        habilidades técnicas básicas en programación y está ansioso por aprender
        y crecer en el campo. Está dispuesto a trabajar en equipo, seguir
        instrucciones y buscar soluciones creativas a los desafíos que se le
        presenten.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold">Que ofresco</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-300"
              variants={fadeIn}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
