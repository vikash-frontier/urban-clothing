import { categories } from "./utils/mockData";
import Directory from "./components/directory/Directory";
function App() {
  return <Directory categories={categories} />;
}

export default App;
