import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const {
    username,
    status: adressStatus,
    position,
    address,
  } = useSelector((state) => state.user);
  console.log(address);

  const isLoading = adressStatus === "loading";
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formError = useActionData();

  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  return (
    <>
      <div className="px-4 py-6">
        <h2 className="mb-8 text-xl font-semibold">
          Ready to order? Let&apos;s go!
        </h2>
        <Form method="POST">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="sm:basis-40">First Name:</label>
            <input
              className="input"
              defaultValue={username}
              type="text"
              name="customer"
              required
            />
          </div>

          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="sm:basis-30">Phone number:</label>
            <div className="grow">
              <input className="input" type="tel" name="phone" required />
              {formError?.phone && (
                <p className="text-red-500">{formError.phone}</p>
              )}
            </div>
          </div>

          <div className="relative mb-5 flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="sm:basis-28">Address:</label>
            <div className="grow">
              <input
                disabled={isLoading}
                className="input"
                type="text"
                name="address"
                defaultValue={address}
                required
              />
            </div>
            {!position.latitude && !position.longitude && (
              <span className="absolute right-0 top-[2.4rem] z-20 sm:right-0 sm:top-[2.5px]">
                <Button
                  disabled={isLoading}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                  type="small"
                >
                  Get Position
                </Button>
              </span>
            )}
          </div>

          <div className="mb-12 flex items-center gap-5 sm:flex-row sm:items-center">
            <input
              className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
              type="checkbox"
              name="priority"
              id="priority"
              value={withPriority}
              onChange={(e) => setWithPriority(e.target.checked)}
            />
            <label htmlFor="priority">
              Want to yo give your order priority?
            </label>
          </div>

          <input type="hidden" name="cart" value={JSON.stringify(cart)} />

          <div>
            <Button type="primary" disabled={isSubmitting}>
              {isSubmitting ? "Placing Order" : "Order now"}
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);
  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your number; we might need it to contact you.";
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
