import * as React from "react";
import { IIconSVGProps } from "../../typings/Icon";

export interface IAppProps {}

const MenuIcon: React.FC<IIconSVGProps> = (props: IAppProps) => {
  return (
    <div>
      <svg
        width="18"
        height="15"
        viewBox="0 0 18 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M18 2.5H0V0.5H18V2.5Z" fill="#272343" />
        <path d="M18 8.5H0V6.5H18V8.5Z" fill="#272343" />
        <path d="M18 14.5H0V12.5H18V14.5Z" fill="#272343" />
      </svg>
    </div>
  );
};

export default MenuIcon;
