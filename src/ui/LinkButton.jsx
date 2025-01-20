/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
  return (
    <Link
      className="text-sm font-semibold capitalize text-blue-500 hover:text-blue-700"
      to={to}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
