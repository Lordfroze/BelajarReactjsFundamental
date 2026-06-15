import { useState } from "react"; // Import useState hook from React

function Search(props) {
  // membuat state search dengan nilai awal ""
  const [search, setSearch] = useState("");

  // membuat function onSearchChange yang mengirim nilai search ke parent component dan mengupdate state posts
  const onSearchChange = () => {
    props.onSearchChange(search);
  };

  // jika user menekan tombol Enter, maka akan memanggil function onSearchChange
  const SearchKeydown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };

  return (
    <>
      <div>
        Cari Artikel :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={SearchKeydown}
        ></input>
        {/* onClick Methods */}
        <button onClick={onSearchChange}>Cari</button>
      </div>
      <small>
        Ditemukan {props.totalPosts} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;
