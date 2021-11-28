import styles from "./Cards.module.scss";
import Card, { ICard } from "../Card/Card";

export interface ICards {
  posts: ICard[];
}

const Cards = (props: ICards) => {
  const { posts } = props;

  const renderCards = () => {
    return posts.map((post: ICard) => {
      const { avatar, content, createdAt, excerpt, id, name } = post;

      return (
        <Card
          key={id}
          id={id}
          avatar={avatar}
          content={content}
          createdAt={createdAt}
          excerpt={excerpt}
          name={name}
        />
      );
    });
  };

  return <div className={styles.posts}>{renderCards()}</div>;
};

export default Cards;
