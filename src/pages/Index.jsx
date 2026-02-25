import { useState } from "react"; // Import useState hook from React
import postsData from "../posts.json";
import Article from "../components/Arcticle";
import Search from "../components/Search";

function Homepage() {
  const [posts, setPosts] = useState(postsData);

  const onSearchChange = (value) => {
    console.log(value);
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value),
    );
    setPosts(filteredPosts);
  };
  return (
    <>
      <h1>Simple blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </>
  );
}

export default Homepage;
