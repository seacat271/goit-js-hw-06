const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredientsContainerEl = document.querySelector("#ingredients");

const createListIngredients = (array) => {
return array.map(ingredient => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  return itemEl; 
})
};

const listIngredientsEl = createListIngredients(ingredients);
listIngredientsContainerEl.append(...listIngredientsEl);


