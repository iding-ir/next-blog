import Link from "next/Link";

import styles from "./Post.module.scss";

export interface IPost {
  avatar: string;
  content: string;
  createdAt: string;
  excerpt: string;
  id: string;
  name: string;
}

interface IProps {
  post: IPost;
}

const Post = (props: IProps) => {
  const { post } = props;
  const { excerpt, id, name } = post;

  return (
    <Link href={`/posts/${id}`}>
      <a className={styles.post}>
        <h2>{name}</h2>
        <p>{excerpt}</p>
      </a>
    </Link>
  );
};

export default Post;
