import { GetStaticProps } from "next";

import styles from "../styles/Home.module.css";
import Cards from "../components/Cards/Cards";
import { ICards } from "../types";
import getPosts from "../utils/getPosts";

const Home = (props: ICards) => {
  const { cards } = props;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Cards cards={cards} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const cards = await getPosts();

  return {
    props: {
      cards,
    },
  };
};

export default Home;
