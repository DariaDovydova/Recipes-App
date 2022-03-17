import './App.css';
import { useEffect, useState } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {
  const API_ID = "fc5d3120";
  const API_KEY = "3bedecd274a45825826b60c3f17f3f41";

  const [mySearch, setMySearch] = useState('');
  const [myRecipe, setMyRecipe] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState("avocado");


  useEffect(() => {
  async function fetchData() {
    const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setMyRecipe(data.hits);
  }
  fetchData();
}, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
    
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
    setMySearch('');
  }
  
  
  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <h1>Find a Recipe</h1>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' placeholder='Search...' onChange={myRecipeSearch} value={mySearch}>
          </input>
        </form>
      </div>

        <div className='container'>
          <button onClick={(e) => finalSearch(e)}>
          <img src="https://img.icons8.com/fluency/48/000000/fry.png" alt='eggs'/>
          </button>
        </div>

        <div>
        {myRecipe.map((item, index) => (
          <MyRecipesComponent key={index} label={item.recipe.label} image={item.recipe.image} calories={item.recipe.calories} ingredients={item.recipe.ingredientLines} />
      ))}
        </div>
      
    </div>
  )
}

export default App;
