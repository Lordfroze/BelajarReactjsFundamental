import "./App.css";
import Homepage from "./pages/Index";
import { GlobalContext } from "./context"; // import global context
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

function App() {
  // membuat user object untuk dikirim ke GlobalContext
  const user = {
    name: "Yoga",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        {/* RouterProvider untuk mengatur router */}
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
