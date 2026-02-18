function Article() {
  const name = "Yoga";
  const titles = ["React", "Next.js", "Node.js"];

  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>

      {titles.map((title) => (
        <div key={title}>
          <h2>{title}</h2>
        </div>
      ))}
    </>
  );
}
export default Article;
