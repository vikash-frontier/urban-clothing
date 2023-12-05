import { useState } from "react";
import { categories } from "./utils/mockData";
import "./categories.styles.scss";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div className="category-container" key={category.id}>
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{category.title}</h2>
            <p>{category.subTitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
