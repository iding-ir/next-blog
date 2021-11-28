import styles from "./Cards.module.scss";
import Card from "../Card/Card";
import { ICard, ICards } from "../../types";

const Cards = (props: ICards) => {
  const { cards } = props;

  const renderCards = () => {
    return cards.map((card: ICard) => {
      const { excerpt, id, name } = card;

      return <Card key={id} id={id} excerpt={excerpt} name={name} />;
    });
  };

  return <div className={styles.cards}>{renderCards()}</div>;
};

export default Cards;
