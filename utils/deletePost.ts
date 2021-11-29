const api = process.env.API;

const deletePost = async (id: string) => {
  const res = await fetch(`${api}/${id}`, {
    method: "Delete",
  });

  const post = await res.json();

  return post;
};

export default deletePost;
