import "./App.css";
import Homepage from "./pages/Index";
import { GlobalContext } from "./context"; // import global context

function App() {
  // membuat user object untuk dikirim ke GlobalContext
  const user = {
    name: "Yoga",
  };

  return (
    <div className="App">
      <GlobalContext.Provider value={user}>
        {/* Homepage dan turunan dimasukkan ke GlobalContext.Provider */}
        <Homepage />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
