import "./styles/index.scss";

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
