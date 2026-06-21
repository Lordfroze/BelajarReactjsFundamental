import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]); // Menyimpan data dari API JSONPlaceholder

  // useEffect pertama untuk mengambil data dari API JSONPlaceholder
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h2>Blog Posts</h2>
      {posts.map((item, index) => (
        <div key={index}>
          <Link to={`/blog/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </>
  );
}

export default Blog;
