import { useState } from "react";
const elvenSheildRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
};

const elvenGauntletsRecipe = {
  ...elvenSheildRecipe,
  leather: 5,
  refinedMoonstone: 3,
};

console.log(elvenSheildRecipe);
console.log(elvenGauntletsRecipe);

const Recipes = () => {
  const [recipe, setRecipe] = useState({});

  return (
    <div>
      <h3>Current Recipe</h3>
      <button onClick={() => setRecipe(elvenSheildRecipe)}>
        Elven Shield{" "}
      </button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Shield{" "}
      </button>

      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Recipes;
