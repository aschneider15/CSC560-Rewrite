// From ChatGPT
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PlayerTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/players/');
        console.log('API Response:', response);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // empty dependency array to fetch data only once when the component mounts

  // Render your table here using the 'data' state
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Position</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((Player) => (
            <tr key={Player._id}>
              <td>{Player.name}</td>
              <td>{Player.number}</td>
              <td>{Player.position}</td>
              <button type="button">X</button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerTable;
