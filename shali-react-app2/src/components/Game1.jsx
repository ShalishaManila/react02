import React, { useState } from "react";

const Game1 = () => {
    const [dog, setDog] = useState({});
  const fetchAPI = async () => {
    try {
      const apiResponse = await fetch(
        "https://dog.ceo/api/breeds/image/random"
      );
      const apiData = await apiResponse.json();
      setDog(apiData);
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };
  const fetchDog = () =>{
    fetchAPI();
  }
  return (
    <>
    <button className="btn btn-info" onClick={fetchDog}>Get a Dog</button>
      <h1>Game message</h1>
      <p>{JSON.stringify(dog)}</p>
      <img src={dog.message}></img>
    </>
  );
};

export default Game1;
