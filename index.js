const searchbox=document.querySelector('.searchbox');
const recipe_container=document.querySelector('.recipe_container');
const searchbtn=document.querySelector('.searchbtn');
const form = document.getElementById('searchForm');

//function to get recipes
const fetchRecipes=async (query)=>{
    const data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);//await is used so that until complete data is not fetched it should not move ahead
    const response=await data.json();
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
    });
}

searchbtn.addEventListener('click',(e)=>{
    e.preventDefault();//saves from automatic reloading;
    const searcInput=searchbox.value.trim();//remove starting spaces
    fetchRecipes(searcInput);   
})