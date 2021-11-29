import Link from "next/Link";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/posts/create">
        <a>Create</a>
      </Link>
    </nav>
  );
};

export default Navbar;
