/* eslint-disable react/prop-types */
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-1 sm:py-3">
      <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
