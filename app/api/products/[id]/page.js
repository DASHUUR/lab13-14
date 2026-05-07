export default async function ProductDetail({ params }) {
  const res = await fetch(
    `http://localhost:3000/api/product/${params.id}`,
    {
      cache: "no-store",
    }
  );

  const data = await res.json();

  if (data.error) {
    return <h1>Product not found</h1>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{data.title}</h1>

      <p>Price: {data.price}₮</p>

      <p>{data.description}</p>
    </div>
  );
}