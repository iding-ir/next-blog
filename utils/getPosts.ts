const getPosts = async () => {
  const res = await fetch(`https://61a36d20d5e8330017291ff7.mockapi.io/blogs`);
  const posts = await res.json();

  return posts;
};

export default getPosts;
