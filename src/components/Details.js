import React, { useState, useEffect } from "react";
import { API_KEY } from "../Constants/index";
import axios from "axios";

const Details = (props) => {
  const { charIndex, close } = props;
  const [details, setDetails] = useState(null);
  console.log(details);
  useEffect(() => {
    axios
      .get(API_KEY)
      .then((res) => {
        console.log(res.data);
        setDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [charIndex]);

  return (
    <div>
      <h2>Details</h2>
      {/* {details && (
        <>
          <p>
            {details.name} is {details.age}
          </p>
          <ul>
            {details.films.map((film, idx) => {
              return <li kye={idx}>{film}</li>;
            })}
          </ul>
        </>
      )} */}
      <button onClick={close}>Close</button>
    </div>
  );
};

export default Details;
