import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h2>Terjadi Kesalahan</h2>
      <p>{error?.message}</p>
    </>
  );
}
export default ErrorPage;
