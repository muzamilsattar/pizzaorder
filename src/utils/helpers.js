export function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function formatDate(dateStr) {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
}

export function calcMinutesLeft(dateStr) {
  // Get the current time in milliseconds
  const currentTime = Date.now();

  // Convert the input date string to a timestamp
  const deliveryTime = new Date(dateStr).getTime();

  // Validate the input date
  if (isNaN(deliveryTime)) {
    throw new Error("Invalid date string provided.");
  }

  // Calculate the difference in minutes
  const minutesLeft = Math.round((deliveryTime - currentTime) / 60000);

  // Optional: Log for debugging
  // console.log("Current Time:", currentTime, "Delivery Time:", deliveryTime);

  return minutesLeft;
}

// export function calcMinutesLeft(dateStr) {
//   const d1 = new Date().getTime();
//   const d2 = new Date(dateStr).getTime();
//   console.log(d1, d2);

//   return Math.round((d2 - d1) / 60000);
// }
