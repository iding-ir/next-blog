import Link from "next/Link";

import styles from "./Post.module.scss";
import { IPost } from "../../types";

interface IProps {
  post: IPost;
}

const Post = (props: IProps) => {
  const { post } = props;
  const { excerpt, content, name } = post;

  return (
    <div className={styles.post}>
      <h2>{name}</h2>
      <p>{excerpt}</p>
      <hr />
      <p>{content}</p>

      <Link href="/">
        <a>Go back</a>
      </Link>
    </div>
  );
};

export default Post;
