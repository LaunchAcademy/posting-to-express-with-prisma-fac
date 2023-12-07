import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";

import "../assets/scss/main.scss";

import HobbyList from "./HobbyList";
import NewHobbyForm from "./NewHobbyForm";

const App = (props) => {
  const [hobbies, setHobbies] = useState([]);

  const getHobbies = async () => {
    try {
      const response = await fetch("/api/v1/hobbies");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setHobbies(body.hobbies);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getHobbies();
  }, []);

  const postHobby = async (newHobbyData) => {
    // console.log("newHobbyData", newHobbyData);
    try {
      const response = await fetch("/api/v1/hobbies", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newHobbyData),
      });
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setHobbies([...hobbies, body.hobby]);
    } catch (err) {
      console.error(`Error in fetch: ${err.message}`);
    }
  };

  return (
    <div>
      <NewHobbyForm postHobby={postHobby} />
      <HobbyList hobbies={hobbies} />
    </div>
  );
};

export default hot(App);
