import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children, }: Props) => {
  return (
      <div className="alertBox">
        <div className="elemAlert alert alert-primary">
          {children}
        </div>
      </div>
  );
};

export default Alert;
