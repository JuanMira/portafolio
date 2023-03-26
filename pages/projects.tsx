import { projects as projectsData } from "../data";
import ProjectCard from "../components/ProjectsCard";
import ProjectNavbar from "../components/ProjectNavbar";
import { useState } from "react";
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeIn, stagger, routeAnimation } from "../animations";

export default function Projects(): JSX.Element {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState<Category | "all">("all");

  const handleFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ProjectNavbar
        handlerFilterCategory={handleFilterCategory}
        active={active}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            className="col-span-12 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            variants={fadeIn}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
