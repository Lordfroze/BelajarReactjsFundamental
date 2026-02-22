function Article(props) {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
      </div>
      <small>
        Date: {props.date}, tags: {props.tags.join(",")}
      </small>
    </>
  );
}
export default Article;
