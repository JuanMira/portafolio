import { FunctionComponent, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../type";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, stagger } from "../animations";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({ project: { name, category, github_url, description, key_techs } }) => {
  const image_path =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEWpqammpqbU1NTZ2dne3t7i4uLm5ubs7Ozy8vKjo6PS0tL////6+vr19fXf39+fn5+RQGonAAABXElEQVR4nO3dTUrDABRG0SRNmqb+7X+3BtGBdGARRE56zwrenX/whqfnl8u6rufdsps/nb6bfu/0o/ker8s9zjcuw/K2fRl9243rsIzDkY1Thbq9cK7QVqGvQl+Fvgp9Ffr2wlOFtgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb69cKrQVqGvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb6HWAxViKvQV6GvQl+Fvgp9Ffoq9FXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0LfQ/yZqRBXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6KvQV6FvL1wqtFXoq9BXoa9CX4W+Cn0V+ir0Veir0Fehr0Jfhb4KfRX6KvRV6HuIwvP230f8qQp9Ffoq9FXoq9BXoa9CX4W+j8LxyLZpuFynQ1vfAZCIDyXLzJtdAAAAAElFTkSuQmCC";
  const [showDetail, setShowDetail] = useState<boolean>(false);
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        width="300"
        height="150"
        layout="responsive"
        quality="100"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetail && (
        <motion.div
          className="absolute top-0 left-0 z-10 grid w-full h-auto p-6 text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <div>
            <motion.div variants={fadeIn}>
              <Image
                src={image_path}
                alt={name}
                layout="responsive"
                height="150"
                width="300"
              />
            </motion.div>
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 rounded-sm dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
            </div>
          </div>
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              className="mb-3 text-xl font-medium md:text-2xl"
              variants={fadeIn}
            >
              {name}
            </motion.div>
            <motion.div className="mb-3 font-medium" variants={fadeIn}>
              {description}
            </motion.div>
            <motion.div
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
              variants={fadeIn}
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProjectCard;
