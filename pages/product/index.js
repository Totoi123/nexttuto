import Link from "next/link";

const Product = () => {
  return (
    <div>
      <h1>Products</h1>
      <Link href="/product/product1">
        <a>Product 1</a>
      </Link>
      <Link href="product/product2">
        <a>Product 2</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Product;
