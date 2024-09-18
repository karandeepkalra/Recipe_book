const searchbox=document.querySelector('.searchbox');
const recipe_container=document.querySelector('.recipe_container');
const searchbtn=document.querySelector('.searchbtn');
const form = document.getElementById('searchForm');

//function to get recipes
const fetchRecipes=async (query)=>{
    recipe_container.innerHTML="<h2>Fetchin Recipee.....</h2>";
    const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);//await is used so that until complete data is not fetched it should not move ahead
    const response=await data.json();
    recipe_container.innerHTML="";
    response.meals.forEach(meal=>{
        const recipediv=document.createElement('div');
        recipediv.classList.add('recipe');
        recipediv.innerHTML=`
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <p>${meal.strArea}</p>
        <p>${meal.strCategory}</p>
        `
        recipe_container.appendChild(recipediv);
        const button=document.createElement('button');
        button.textContent="View Recipe";
        recipediv.appendChild(button);
    });
}

searchbtn.addEventListener('click',(e)=>{
    e.preventDefault();//saves from automatic reloading;
    const searcInput=searchbox.value.trim();//remove starting spaces
    fetchRecipes(searcInput);   
})