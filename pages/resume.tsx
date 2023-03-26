import { Languages, Frameworks } from "../data";
import Bar from "../components/Bar";
import { motion } from "framer-motion";
import { fadeIn, routeAnimation } from "../animations";

export default function Resume(): JSX.Element {
  return (
    <motion.div
      className="p-4"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>            
            <p className="font-semibold"> Tecnico en sistemas (2017 - 2019) </p>
            <p className="font-medium"> Autodidacta </p>
            <p className="font-semibold"> Ingenieria Mecatronica (2022 - ) </p>            
            <p className="my-3">
              Actualmente desempeñandome en el area de la creacion de videojuegos.
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeIn} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Web Developer Jr.</h5>
            <p className="font-semibold">Desempleado</p>            
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages</h5>
          <div className="my-2">
            {Languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Frameworks</h5>
          <div className="my-2">
            {Frameworks.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
