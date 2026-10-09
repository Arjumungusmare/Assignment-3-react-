import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div>
      <h2>Recipe Details</h2>
      <p>Recipe ID: {id}</p>
      <h3>{recipe.name}</h3>
      <p>Cuisine: {recipe.cuisine}</p>
      <p>Rating: {recipe.rating}</p>

      <h4>Ingredients</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeDetails;