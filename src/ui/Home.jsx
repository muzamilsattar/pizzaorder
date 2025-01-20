import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const username = useSelector((state) => state.user.username);
  return (
    <div className="my-14 flex flex-col items-center justify-between gap-10 px-4 text-center text-xl font-semibold capitalize sm:my-16 sm:text-xl md:my-24 md:text-3xl">
      <h1 className="mb-8 text-xl md:text-4xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {username === "" ? (
        <CreateUser />
      ) : (
        <Button className="" to="/menu" type="primary">
          Continue {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
