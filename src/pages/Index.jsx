import posts from "../posts.json";
import Article from "../components/Arcticle";

function Homepage() {
  return (
    <>
      <h1>Simple blog</h1>
      {posts.map((blog) => (
        <Article title={blog.title} tags={blog.tags} date={blog.date} />
      ))}
    </>
  );
}

export default Homepage;
