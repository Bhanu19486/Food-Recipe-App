import React, { useState } from 'react';
import Products from './Products';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const APP_ID = "d4329f4a";
  const APP_KEY = "215b531d923ebb36e9225659bb3de4f3";
  const USER_ID = "your-user-id"; 
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`,
        {
          headers: {
            'Edamam-Account-User': USER_ID
          }
        }
      );

      const result = await response.json();
      if (response.ok) {
        setData(result.hits);
      } else {
        console.error(result);
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to fetch recipes.");
    }
  };

  return (
    <div>
      <center>
        <h1>Food Recipe App</h1>
        <h2>Find your favorite recipes</h2>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for recipes..."
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
        {data.length >= 1 ? <Products data={data} /> : null}
      </center>
    </div>
  );
};

export default App;
