const api = process.env.API;

const getPosts = async () => {
  const res = await fetch(`${api}/`);
  const posts = await res.json();

  return posts;
};

export default getPosts;
