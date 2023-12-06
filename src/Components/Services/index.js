export const getPosts = async () => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return response.json();
};
