// membuat ArticleStatus component
const ArticleStatus = ({ isNew }) => {
  return isNew && <span> Baru</span>;
};

// membuat newArticle component
const NewArticle = () => {
  return <span> Baru!</span>;
};

function Article(props) {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
      </div>
      <small>
        Date: {props.date}, tags: {props.tags.join(",")}
        {/* menampilkan ArticleStatus component */}
        <ArticleStatus isNew={props.isNew} />{" "}
        {/* menampilkan NewArticle component jika props.isNew adalah true*/}
        {props.isNew && <NewArticle />}
      </small>
    </>
  );
}
export default Article;
