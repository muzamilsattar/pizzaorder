import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 outline outline-1 outline-stone-500 transition-colors duration-300 ease-in hover:bg-yellow-500  focus:outline-none focus:ring focus:ring-yellow-600 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 hover:neon-purple",
    small:
      base +
      " px-4 py-2 md:px-5 md:py-2.5 me-1 text-xs md:text-sm hover:neon-rose",
    round:
      base +
      " px-2 py-1 md:px-3.5 md:py-2  text-sm md:text-sm w-8 h-8 md:w-10 md:h-10 hover:neon-green",
    secondary:
      "inline-block rounded-full  border-2 border-slate-400  font-semibold uppercase tracking-wide text-stone-800 outline outline-1 outline-stone-500 transition-all duration-300 ease-in  hover:neon-slate focus:outline-none focus:ring focus:ring-slate-600 focus:ring-offset-2 disabled:cursor-not-allowed px-3 py-2 md:px-6 md:py-3",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
