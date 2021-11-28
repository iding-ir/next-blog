import Link from "next/Link";

import styles from "./Card.module.scss";
import { ICard } from "../../types";

const Card = (props: ICard) => {
  const { excerpt, id, name } = props;

  return (
    <Link href={`/posts/${id}`}>
      <a className={styles.card}>
        <h2>{name}</h2>
        <p>{excerpt}</p>
      </a>
    </Link>
  );
};

export default Card;
