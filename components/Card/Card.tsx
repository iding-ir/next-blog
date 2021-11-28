import Link from "next/Link";

import styles from "./Card.module.scss";

export interface ICard {
  avatar: string;
  content: string;
  createdAt: string;
  excerpt: string;
  id: string;
  name: string;
}

const Cards = (props: ICard) => {
  const { avatar, content, createdAt, excerpt, id, name } = props;

  return (
    <div className={styles.post}>
      <Link href="https://nextjs.org/docs">
        <a className={styles.card}>
          <h2>{name}</h2>
          <p>{excerpt}</p>
        </a>
      </Link>
    </div>
  );
};

export default Cards;
