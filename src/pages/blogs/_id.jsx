import { useLoaderData } from "react-router-dom";

function SinglePost() {
  const post = useLoaderData();

  return (
    <>
      <h2>{post?.title || "Judul"}</h2>
      <p>{post?.body || "Isi"}</p>
    </>
  );
}
export default SinglePost;
