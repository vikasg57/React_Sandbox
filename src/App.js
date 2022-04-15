import "./styles.css";
import Inputbox from "./component/Inputbox";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./component/Navbar";

import { Todo } from "./component/Todo";

export default function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path={"/count"} element={<Inputbox />} />
        <Route path={"/todo"} element={<Todo />} />
      </Routes>
    </div>
  );
}
