import { FunctionComponent } from "react";
import { Category } from "../type";

interface INavtItem {
  value: Category | "all";
  handlerFilterCategory: Function;
  active: Category | "all";
}

interface IProjectNavbar {
  handlerFilterCategory: Function;
  active: Category | "all";
}

export const NavItem: FunctionComponent<INavtItem> = ({
  value,
  handlerFilterCategory,
  active,
}): JSX.Element => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";
  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<IProjectNavbar> = (
  props
): JSX.Element => {
  return (
    <div className="flex px-3 py-3 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="Django" {...props} />
      <NavItem value="Express" {...props} />
      <NavItem value="GoLang" {...props} />
      <NavItem value="Mongo" {...props} />
      <NavItem value="PostgreSQL" {...props} />
      <NavItem value="Typescript" {...props} />
      <NavItem value="React" {...props} />
      <NavItem value="CSharp" {...props} />
    </div>
  );
};

export default ProjectNavbar;
