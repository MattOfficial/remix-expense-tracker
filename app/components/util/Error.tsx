import { FaExclamationCircle } from "react-icons/fa";

export interface ErrorProps {
  title: string;
  children?: React.ReactNode;
}

function Error({ title, children }: ErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <FaExclamationCircle className="text-4xl" />
        </div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <div className="text-center">{children}</div>
      </div>
    </div>
  );
}

export default Error;
