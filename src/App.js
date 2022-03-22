import React from "react";

const App = () => {
  const pressEnter = (e) => {
    if (e.key === "Enter") {
      alert(e.target.value);
    }
  };

  return (
    <>
      <div style={{ fontWeight: "bold" }}>Image Search</div>
      <input type='text' placeholder='search by enter key' onKeyDown={(e) => pressEnter(e)} />
    </>
  );
};

export default App;
