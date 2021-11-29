import { GetStaticProps } from "next";

import styles from "../styles/Home.module.scss";
import Cards from "../components/Cards/Cards";
import { ICards } from "../types";
import getPosts from "../utils/getPosts";
import Head from "../components/Head/Head";

const Home = (props: ICards) => {
  const { cards } = props;

  return (
    <>
      <Head />

      <div className={styles.container}>
        <main className={styles.main}>
          <Cards cards={cards} />
        </main>
      </div>
    </>
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
