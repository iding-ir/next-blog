import Link from "next/Link";

import styles from "./Card.module.scss";

export interface ICard {
  excerpt: string;
  id: string;
  name: string;
}

const Card = (props: ICard) => {
  const { excerpt, id, name } = props;

  return (
    <Link href={`/posts/${id}`}>
      <a className={styles.post}>
        <h2>{name}</h2>
        <p>{excerpt}</p>
      </a>
    </Link>
  );
};

export default Card;
