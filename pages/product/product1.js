import Link from "next/link";

const Product1 = () => {
  return (
    <div>
      <h1>Product 1 Page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
};

export default Product1;
