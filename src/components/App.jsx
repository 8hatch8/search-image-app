import React, { useEffect } from "react";
import { createApi } from "unsplash-js";
import ImageList from "./ImageList";

const App = () => {
  const api = createApi({
    accessKey: process.env.REACT_APP_API_KEY,
  });

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      api.search
        .getPhotos({ query: e.target.value, orientation: "landscape" })
        .then((result) => console.log({ result }))
        .catch(() => {
          console.log("something went wrong!");
        });
    }
  };

  return (
    <>
      <div className='Search_Form'>
        <div style={{ fontWeight: "bold" }}>Image Search</div>
        <input type='text' placeholder='search by enter key' onKeyDown={(e) => pressEnter(e)} />
      </div>
      <ImageList props={null} />
    </>
  );
};

export default App;
