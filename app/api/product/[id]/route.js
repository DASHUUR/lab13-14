import { products } from "../route";

export async function GET(request, { params }) {
  const product = products.find(
    (p) => p.id === Number(params.id)
  );

  if (!product) {
    return Response.json(
      {
        error: {
          message: "Product not found",
        },
      },
      { status: 404 }
    );
  }

  return Response.json(product);
}