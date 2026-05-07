let products = [
  {
    id: 1,
    title: "iPhone 15",
    price: 4500000,
    description: "Apple phone",
  },
  {
    id: 2,
    title: "RTX 4070",
    price: 3200000,
    description: "Gaming GPU",
  },
];

export async function GET() {
  return Response.json(products);
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.title || !body.price) {
      return Response.json(
        {
          error: {
            message: "Title and price required",
          },
        },
        { status: 400 }
      );
    }

    const newProduct = {
      id: Date.now(),
      title: body.title,
      price: Number(body.price),
      description: body.description || "",
    };

    products.push(newProduct);

    return Response.json(newProduct, {
      status: 201,
    });
  } catch (error) {
    return Response.json(
      {
        error: {
          message: "Invalid JSON",
        },
      },
      { status: 500 }
    );
  }
}

export { products };