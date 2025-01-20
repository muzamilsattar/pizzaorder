import { useDispatch } from "react-redux";
import { removeItem } from "./cartSlice";
import Button from "../../ui/Button";

// eslint-disable-next-line react/prop-types
function DeleteCartItem({ pizzaId }) {
  const dispatch = useDispatch();
  function handleDelete() {
    if (!window.confirm("Are you sure you want to delete")) {
      return;
    }
    dispatch(removeItem(pizzaId));
  }
  return (
    <Button onClick={handleDelete} type="small">
      Delete
    </Button>
  );
}

export default DeleteCartItem;
