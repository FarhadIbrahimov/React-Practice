import HomePage from "./pages/HomePage";
import { data } from "./data.jsx";
import "./index.css";
import { useState } from "react";

export default function App() {
  const [employees, setEmployees] = useState(data);
  const [search, setSearch] = useState(data);

  return (
    <div className="App">
      <HomePage data={employees} />
    </div>
  );
}
