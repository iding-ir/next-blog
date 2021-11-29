import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import { ICard } from "../../types";
import { IState } from "../../reducers";

const Cards = () => {
  const router = useRouter();
  const cards = useSelector((state: IState) => state.data.current);
  const postCount = cards.length;

  useEffect(() => {
    if (postCount === 0) {
      router.push("/posts/create");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const renderCards = () => {
    return cards?.map((card: ICard) => {
      const { excerpt, id, name } = card;

      return <Card key={id} id={id} excerpt={excerpt} name={name} />;
    });
  };

  return <div className={styles.cards}>{renderCards()}</div>;
};

export default Cards;
