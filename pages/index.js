import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Style from "../styles/Home.module.css";

const Home = () => {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/img/avatar.png" width={200} height={200} alt="Avatar" />
      <h1 className={Style["title-homepage"]}>Welcome to Next.js</h1>
    </Layout>
  );
};

export default Home;
