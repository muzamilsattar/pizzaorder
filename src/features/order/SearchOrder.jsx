import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="w-[8rem] rounded-full bg-yellow-100 px-4 py-2 text-sm shadow-2xl transition-all duration-300 placeholder:text-stone-600 focus:w-[8.5rem] focus:outline-none focus:ring-4 focus:ring-yellow-600 focus:ring-opacity-50 sm:w-64 sm:focus:w-72 sm:focus:neon-orange md:w-80 md:focus:w-96"
        type="text"
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchOrder;
