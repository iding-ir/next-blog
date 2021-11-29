import { ReactNode } from "react";
import styles from "./Layout.module.scss";

interface IProps {
  children: ReactNode;
}

const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default Layout;
