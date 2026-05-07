"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  async function loadProducts() {
    const res = await fetch("/api/product");
    const data = await res.json();

    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await fetch("/api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        price,
      }),
    });

    setTitle("");
    setPrice("");

    loadProducts();
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{process.env.NEXT_PUBLIC_SITE_NAME}</h1>

      <h2>Products</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <br />
        <br />

        <button type="submit">Create</button>
      </form>

      <hr />

      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>

          <p>{product.price}₮</p>
        </div>
      ))}
    </div>
  );
}