import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Blog() {
  const result = useLoaderData();

  return (
    <>
      <>
        <h2>{result.data.lokasi}</h2>
        <p>Tanggal: {result.data.jadwal.tanggal}</p>
        <p>Subuh: {result.data.jadwal.subuh}</p>
        <p>Maghrib: {result.data.jadwal.maghrib}</p>
      </>
    </>
  );
}

export default Blog;
