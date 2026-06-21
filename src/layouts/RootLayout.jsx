import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        style={{
          marginRight: "10px",
        }}
        to="/"
      >
        Home
      </NavLink>{" "}
      |{" "}
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        style={{
          marginRight: "10px",
          marginLeft: "10px",
        }}
        to="/blog"
      >
        Blogs
      </NavLink>{" "}
      |
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        style={{
          marginLeft: "10px",
        }}
        to="/about"
      >
        About
      </NavLink>
      <p />
      <Outlet />
    </>
  );
}

export default RootLayout;
