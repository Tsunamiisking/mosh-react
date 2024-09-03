import React, { ReactNode } from "react";


interface Props{
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' ;
}
const Exercise = ({children, color}: Props) => {
  return (
      <button className={`btn btn-${color}`}>
        {children}
      </button>
  );
};

export default Exercise;
