import { ReactNode } from "react"

interface Props {
    children: ReactNode
    onClick: () => void
}

const Alert = ({ children, onClick }: Props) => {
  return (
    <div onClick={onClick} className="alert alert-primary">
      {children}
    </div>
  )
}

export default Alert
