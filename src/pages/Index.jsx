import React, { useState } from "react"; // Import useState hook from React
import posts from "../posts.json";
import Article from "../components/Arcticle";

function Homepage() {
  // membuat state search
  const [search, setSearch] = useState("");

  // membuat function changeSearch
  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h1>Simple blog</h1>
      {/* Membuat input search */}
      <div>
        Cari Artikel : <input onChange={changeSearch}></input>
      </div>
      <small>Ditemukan 0 data dengan pencarian kata {search}</small>
      {posts.map((blog, index) => (
        <Article
          title={blog.title}
          tags={blog.tags}
          date={blog.date}
          key={index}
        />
      ))}
    </>
  );
}

export default Homepage;
