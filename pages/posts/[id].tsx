import { GetStaticProps } from "next";

import styles from "../../styles/Post.module.scss";
import Post from "../../components/Post/Post";
import { IPost } from "../../types";
import getPost from "../../utils/getPost";
import getPosts from "../../utils/getPosts";
import Head from "../../components/Head/Head";

interface IProp {
  post: IPost;
}

const PostPage = (props: IProp) => {
  const { post } = props;
  const { name, excerpt } = post;

  return (
    <>
      <Head title={name} description={excerpt} />

      <Post post={post} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = await getPost(context?.params?.id as string);

  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths: any = async () => {
  const posts = await getPosts();

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
