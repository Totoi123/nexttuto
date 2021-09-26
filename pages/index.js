import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
      <Link href="/product">
        <a>View Product</a>
      </Link>
    </div>
  );
};

export default Home;
