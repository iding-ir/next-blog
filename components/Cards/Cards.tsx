import styles from "./Cards.module.scss";
import Card, { ICard } from "../Card/Card";

export interface ICards {
  cards: ICard[];
}

const Cards = (props: ICards) => {
  const { cards } = props;

  const renderCards = () => {
    return cards.map((card: ICard) => {
      const { excerpt, id, name } = card;

      return <Card key={id} id={id} excerpt={excerpt} name={name} />;
    });
  };

  return <div className={styles.posts}>{renderCards()}</div>;
};

export default Cards;
