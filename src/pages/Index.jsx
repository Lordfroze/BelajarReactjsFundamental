import { useState, useEffect } from "react"; // Import useState and useEffect hooks from React
import postsData from "../posts.json"; // Import posts data from JSON file
import Article from "../components/Article";
import Search from "../components/Search"; // Import Search component from Search.jsx file

function Homepage() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);

  // membuat function onSearchChange yang menerima value
  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value),
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  // useEffect pertama untuk mengambil data dari API JSONPlaceholder
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => setExternalPosts(json));
  // }, []);

  return (
    <>
      <h1>Simple blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {/* menampilkan Article component */}
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
