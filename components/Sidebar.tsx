import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Sidebar() {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Image
        src="https://res.cloudinary.com/drfms2hvr/image/upload/v1644695128/Photos-par-num-ros-bricolage-peintures-l-huile-sans-cadre-color-Cool-Animal-moderne-maison-Art-1.jpg_640x640_e8350453-5505-4b7f-a1c8-e71b23bfbbc6-1_vanuvt.jpg"
        alt="avatar"
        className="mx-auto rounded-full"
        width="128px"
        height="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span className="text-green">Juan</span>
        Mira
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-100">
        Web developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-100"
        href="#"
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* / social icon */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green-500 md:w-full">
        <a href="https://github.com/JuanMira">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/juan-sebastian-mira-agudelo-30219b1ab/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-100"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Antioquia, Medellin</span>
        </div>
        <p className="my-2">juanmira720@gmail.com</p>
        <p className="my-2">+54 3193274174</p>
      </div>
      {/* Email button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:juanmira720@gmail.com")}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400"
        onClick={changeTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}
