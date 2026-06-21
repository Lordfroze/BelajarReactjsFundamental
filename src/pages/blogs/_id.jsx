import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const params = useParams();
  const [post, setPost] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
      <h2>{post?.title || "Judul"}</h2>
      <p>{post?.body || "Isi"}</p>
    </>
  );
}
export default SinglePost;
