import { GetStaticProps } from "next";

import styles from "../styles/Home.module.scss";
import Cards from "../components/Cards/Cards";
import { ICards } from "../types";
import getPosts from "../utils/getPosts";
import Head from "../components/Head/Head";

const HomePage = (props: ICards) => {
  const { cards } = props;

  return (
    <>
      <Head />

      <Cards cards={cards} />
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

export default HomePage;
