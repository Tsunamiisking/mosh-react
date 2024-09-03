import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClick: () => void
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible"
    >
      { children }
      <button
        type="button"
        className="btn-close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Alert;
