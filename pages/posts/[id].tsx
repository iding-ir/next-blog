import { GetStaticProps } from "next";

import styles from "../../styles/Post.module.css";
import Post from "../../components/Post/Post";
import { IPost } from "../../components/Post/Post";

interface IProp {
  post: IPost;
}

const PostPage = (props: IProp) => {
  const { post } = props;

  return <Post post={post} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    `https://61a36d20d5e8330017291ff7.mockapi.io/blogs/${context.params.id}`
  );
  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: any = async () => {
  const res = await fetch(`https://61a36d20d5e8330017291ff7.mockapi.io/blogs`);
  const posts = await res.json();

  const paths = posts.map((post: IPost) => {
    return {
      params: {
        id: post.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export default PostPage;
