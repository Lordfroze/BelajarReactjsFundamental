import { useState } from "react"; // Import useState hook from React
import postsData from "../posts.json"; // Import posts data from JSON file
import Article from "../components/Arcticle";
import Search from "../components/Search"; // Import Search component from Search.jsx file

function Homepage() {
  // membuat state posts dengan nilai awal postsData
  const [posts, setPosts] = useState(postsData);

  // membuat function onSearchChange yang menerima value
  const onSearchChange = (value) => {
    console.log(value);
    // membuat filteredPosts yang berisi postsData yang title-nya mengandung value
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value),
    );
    // mengupdate state posts dengan nilai filteredPosts
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
