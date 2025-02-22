import React from "react";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
export interface MethodCardProps {
  icon: React.ReactNode;
  heading: string;
  method1: string;
  method2: string;
  method3: string;
}

const MethodCard: React.FC<MethodCardProps> = ({
  icon,
  heading,
  method1,
  method2,
  method3,
}) => {
  return (
    <div className="method-card p-4 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105 text-center">
      <div className="icon mb-4 w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-purple-500">
        {icon}
      </div>
      <p className="text-xl font-semibold mb-4">{heading}</p>
      <div className="space-y-2 ml-[20%]">
        <div className="flex items-center">
          <DoneOutlinedIcon className="text-green-500 mr-2" />
          <span>{method1}</span>
        </div>
        <div className="flex items-center">
          <DoneOutlinedIcon className="text-green-500 mr-2" />
          <span>{method2}</span>
        </div>
        <div className="flex items-center">
          <DoneOutlinedIcon className="text-green-500 mr-2" />
          <span>{method3}</span>
        </div>
      </div>
    </div>
  );
};

export default MethodCard;
