import Link from "next/Link";
import { useDispatch } from "react-redux";

import styles from "./Card.module.scss";
import { ICard } from "../../types";
import deletePost from "../../utils/deletePost";
import { deleteData } from "../../actions/data";

const Card = (props: ICard) => {
  const { excerpt, id, name } = props;

  const dispatch = useDispatch();

  const onDelete = async () => {
    await deletePost(id);

    dispatch(deleteData(id));
  };

  return (
    <div className={styles.card}>
      <button className={styles.delete} onClick={onDelete}>
        Delete
      </button>

      <Link href={`/posts/${id}`}>
        <a className={styles.link}>
          <h2>{name}</h2>
          <p>{excerpt}</p>
        </a>
      </Link>
    </div>
  );
};

export default Card;
