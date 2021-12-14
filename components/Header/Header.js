import Link from "next/link";
import Style from "./Header.module.css";

const Header = () => {
  return (
    <header className={Style.container}>
      <ul className={Style.list}>
        <li className={Style.item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={Style.item}>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li className={Style.item}>
          <Link href="/users">
            <a>Users</a>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
