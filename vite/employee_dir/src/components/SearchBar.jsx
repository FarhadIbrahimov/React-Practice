import { useState } from "react";

export default function SearchBar() {
  const [input, setInput] = useState(""); // Declare a state variable...
  console.log(input);
  return (
    <div className="searchBar">
      <input
        value={input} // ...force the input's value to match the state variable...
        onChange={(e) => setInput(e.target.value)} // ... and update the state variable on any edits!
      />
    </div>
  );
}
