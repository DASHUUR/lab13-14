export async function getProducts() {
  const res = await fetch("http://localhost:3000/api/product", {
    cache: "no-store",
  });

  return res.json();
}

export async function createProduct(data) {
  const res = await fetch("http://localhost:3000/api/product", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
}