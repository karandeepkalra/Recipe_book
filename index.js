const searchbox = document.querySelector('.searchbox');
const recipe_container = document.querySelector('.recipe_container');
const searchbtn = document.querySelector('.searchbtn');
const form = document.getElementById('searchForm');
const details = document.querySelector('.recipe-details');
const recipe_details = document.querySelector('.recipe-details-content');
const recipe_close = document.querySelector('.recipe-close-button');

//function to get recipes
const fetchRecipes = async (query) => {
    recipe_container.innerHTML = "<h2>Fetchin Recipee.....</h2>";
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);//await is used so that until complete data is not fetched it should not move ahead
    const response = await data.json();
    recipe_container.innerHTML = "";
    if (response.meals) {
        response.meals.forEach(meal => {
            const recipediv = document.createElement('div');
            recipediv.classList.add('recipe');
            recipediv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `
            const button = document.createElement('button');
            button.textContent = "View Recipe";
            recipediv.appendChild(button);

            //Adding event listener to recipe button
            button.addEventListener('click', () => {
                openRecipePopup(meal);
            });

            recipe_container.appendChild(recipediv);

        });
    }
    else {
        recipe_container.innerHTML = "<h2>No recipes found.</h2>";
    }
}


const fetchIngredients = (meal) => {
    let ingredientlist = "";
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient) {
            const measure = meal[`strMeasure${i}`];
            ingredientlist += `<li>${measure} ${ingredient}</li>`
        }
        else {
            break;
        }
    }
    return ingredientlist;

}

recipe_close.addEventListener('click', () => {
    recipe_details.parentElement.style.display = "none";
    document.querySelector('.overlay').style.display = "none";
});
const openRecipePopup = (meal) => {
    recipe_details.innerHTML = `
    <h2 class="recipename">${meal.strMeal}</h2>
    <h3>Ingredients:</h3>
    <ul class="ingredientlist">${fetchIngredients(meal)}</ul>
    <div>
        <h3>Instruction:</h3>
        <p class="instruction">${meal.strInstructions}</p>
    `
    recipe_details.parentElement.style.display = "block"; // Show the popup
    document.querySelector('.overlay').style.display = "block";

}

searchbtn.addEventListener('click', (e) => {
    e.preventDefault();//saves from automatic reloading;
    const searcInput = searchbox.value.trim();//remove starting spaces
    fetchRecipes(searcInput);
})