import { FunctionComponent } from "react";
import { ISkill } from "../type";

const Bar: FunctionComponent<{ data: ISkill }> = ({
  data: { Icon, name, lvl },
}): JSX.Element => {
  return (
    <div className="">
      <div className="flex px-4 py-1 rounded-full item-center ">
        <Icon className="mr-3" />
        <span className="w-48">{name}</span>
      </div>
    </div>
  );
};

export default Bar;
