import { GetStaticProps } from "next";
import { useDispatch } from "react-redux";

import styles from "../styles/Home.module.scss";
import Cards from "../components/Cards/Cards";
import { ICards } from "../types";
import getPosts from "../utils/getPosts";
import Head from "../components/Head/Head";
import { IState } from "../reducers";
import { setData } from "../actions/data";

const HomePage = (props: ICards) => {
  const { cards } = props;

  const dispatch = useDispatch();

  dispatch(setData(cards));

  return (
    <>
      <Head />

      <Cards />
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
