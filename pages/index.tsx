import { GetStaticProps } from "next";

import styles from "../styles/Home.module.css";
import Cards, { ICards } from "../components/Cards/Cards";

const Home = (props: ICards) => {
  const { posts } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Cards posts={posts} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://61a36d20d5e8330017291ff7.mockapi.io/blogs");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
