import Head from "next/head";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Style from "./Layout.module.css";

const Layout = (props) => {
  const { children, pageTitle } = props;

  return (
    <>
      <Head>
        <title>NextJS Starter | {pageTitle}</title>
        <meta name="description" content="NextJS Starter" />
      </Head>
      <div className={Style.container}>
        <Header />
        <div className={Style.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
