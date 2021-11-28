const getPost = async (id: string) => {
  const res = await fetch(
    `https://61a36d20d5e8330017291ff7.mockapi.io/blogs/${id}`
  );
  const post = await res.json();

  return post;
};

export default getPost;
