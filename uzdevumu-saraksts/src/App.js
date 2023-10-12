import "./App.css";
import { data } from "./tektsts";
import SortCompleted from "./SortCompleted.js";

function App() {
  console.log(data);
  return (
    <>
      <h1>{data[0].title}</h1>
      <SortCompleted dater={data} />
    </>
  );
}

export default App;
