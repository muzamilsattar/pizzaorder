import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex flex-row items-center justify-between border-b-2 border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link
        className="text-sm font-semibold tracking-normal sm:text-base"
        to="/"
      >
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
