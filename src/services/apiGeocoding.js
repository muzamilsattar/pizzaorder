export async function getAddress({ latitude, longitude }) {
  const baseUrl = import.meta.env.VITE_BIG_DATA_CLOUD_URL;
  const res = await fetch(
    `${baseUrl}?latitude=${latitude}&longitude=${longitude}`,
  );
  if (!res.ok) throw Error("Failed getting address");

  const data = await res.json();
  return data;
}
