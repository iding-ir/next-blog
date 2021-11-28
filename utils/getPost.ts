const api = process.env.API;

const getPost = async (id: string) => {
  const res = await fetch(`${api}/${id}`);
  const post = await res.json();

  return post;
};

export default getPost;
