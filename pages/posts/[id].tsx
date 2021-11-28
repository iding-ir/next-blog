import { GetStaticProps } from "next";

import styles from "../../styles/Post.module.css";
import Post from "../../components/Post/Post";
import { IPost } from "../../types";
import getPost from "../../utils/getPost";
import getPosts from "../../utils/getPosts";

interface IProp {
  post: IPost;
}

const PostPage = (props: IProp) => {
  const { post } = props;

  return <Post post={post} />;
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
