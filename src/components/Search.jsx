import { useState } from "react"; // Import useState hook from React

function Search(props) {
  // membuat state search dengan nilai awal ""
  const [search, setSearch] = useState("");

  // membuat function onSearchChange yang menerima event
  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        {/* membuat input search dengan onChange yang memanggil onSearchChange */}
        Cari Artikel : <input onChange={onSearchChange}></input>
      </div>
      <small>
        Ditemukan {props.total} data dengan pencarian kata {search}
      </small>
    </>
  );
}

export default Search;
