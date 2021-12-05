const api = process.env.API;

const createPost = async (data: any) => {
  const res = await fetch(`${api}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const post = await res.json();

  return post;
};

export default createPost;
