import "./App.css";
import Navbar from "./Navbar.js";
import { Array } from "./Array.js";
import Cards from "./Cards";

function App() {
  const arr = Array.map((item) => {
    return <Cards item={item} />;
  });
  return (
    <div>
      <Navbar />
      {arr}
    </div>
  );
}

export default App;
