import "./App.css";
import { useEffect } from "react";
import categoryResponsitory from "./data/Responsitories/categoryReponsitory";

function App() {
  const HomepageRepo = new categoryResponsitory();
  useEffect(() => {
    HomepageRepo.getHomepage()
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);
  return <h1 className="App">Hello world</h1>;
}

export default App;
