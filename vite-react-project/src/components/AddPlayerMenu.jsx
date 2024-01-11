import React, { useEffect, useState } from "react";
import axios from "axios";

const AddPlayerMenu = () => {
  // control user-provided data using useState hooks
  const [name, setName] = useState([]);
  const [number, setNumber] = useState([]);
  const [position, setPosition] = useState([]);

  // functions to handle changes in the input and update using state variables
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };
  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const postNewPlayer = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/players/", {
        name,
        number,
        position,
      });
      console.log("API Response:", response);
      setData(response.data);
    } catch (error) {
      console.error("Error making POST:", error);
    }
  };

  return (
    <form onSubmit={postNewPlayer}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Number:
        <input type="number" value={number} onChange={handleNumberChange} />
      </label>
      <label>
        Position:
        <input type="text" value={position} onChange={handlePositionChange}/>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPlayerMenu;
