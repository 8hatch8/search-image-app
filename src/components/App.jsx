import React, { useState, useEffect } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: process.env.REACT_APP_API_KEY,
});

const PhotoComp = ({ photo }) => {
  const { urls } = photo;
  return (
    <>
      <img className='img' src={urls.regular} style={{ width: "500px" }} />
    </>
  );
};

const Body = ({ data }) => {
  if (data === null) {
    return null;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <div className='feed'>
        <ul className='columnUl'>
          {data.response.results.map((photo) => (
            <li key={photo.id} className='li' style={{ listStyle: "none" }}>
              <PhotoComp photo={photo} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

const App = () => {
  const [response, setResponse] = useState(null);

  const pressEnter = (e) => {
    if (e.key === "Enter" && e.target.value) {
      api.search
        .getPhotos({ query: e.target.value, orientation: "landscape" })
        .then((result) => setResponse(result))
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
      <Body data={response} />
    </>
  );
};

export default App;
