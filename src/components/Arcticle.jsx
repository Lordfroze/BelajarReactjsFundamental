function Article(props) {
  return (
    <>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
        {props.titles.map((title) => {
          return <div>{title}</div>;
        })}
      </div>
    </>
  );
}
export default Article;
