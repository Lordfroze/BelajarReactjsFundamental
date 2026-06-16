import { useContext } from "react";
import { GlobalContext } from "../context"; // import global context

// membuat ArticleStatus component
const ArticleStatus = ({ isNew }) => {
  return isNew && <span> Baru</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <>
      <div>
        <h3>{props.title}</h3>
      </div>
      <small>
        Date: {props.date}, tags: {props.tags.join(",")}
        {/* menampilkan ArticleStatus component */}
        <ArticleStatus isNew={props.isNew} />{" "}
      </small>
      <div>
        {/*  menampilkan nama user dari GlobalContext */}
        <small>Posted by: {user.name}</small>
      </div>
    </>
  );
}
export default Article;
