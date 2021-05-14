import React, { useState, useEffect } from "react";
import { API_KEY } from "../Constants/index";
import axios from "axios";

const Details = ({ currentCharacterIndex, close, index, char }) => {
  const [details, setDetails] = useState(null);
  console.log(details);
  useEffect(() => {
    axios
      .get(API_KEY)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [index]);
  console.log(index);
  return (
    <>
      <h2>Details:</h2>
      {/*
          It lets me use this map function for a while and then I change something up, like the css, it reloads and tells me cannot read property of null.
      */}
      {/* {details.map((detail) => {
        return (
          <div>
            <p>
              {detail.name} was in {detail.films}
            </p>
          </div>
        );
      })} */}
      <button onClick={close}>Close</button>
    </>
  );
};

export default Details;
