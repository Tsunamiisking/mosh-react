import React, { ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick: () => void;
}
const Exercise = ({ children, color, onClick }: Props) => {

  return (
    <button onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
};

export default Exercise;
