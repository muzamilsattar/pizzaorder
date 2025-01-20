import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="hidden text-sm font-semibold sm:ml-4 sm:mr-4 sm:block sm:text-base">
      {username}
    </div>
  );
}

export default Username;
