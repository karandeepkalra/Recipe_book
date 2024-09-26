document.addEventListener('DOMContentLoaded', () => {
    const addRecipeBtn = document.getElementById('addRecipeBtn');
    const modal = document.getElementById('recipeModal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const recipeForm = document.getElementById('recipeForm');
    const recipeList = document.getElementById('recipeList');
    const modalTitle = document.getElementById('modalTitle');

    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    let editingIndex = -1;

    function renderRecipes() {
        recipeList.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const recipeEl = document.createElement('div');
            recipeEl.classList.add('recipe-card');
            recipeEl.innerHTML = `
                <h3>
                    ${recipe.name}
                    <span>
                        <button onclick="editRecipe(${index})" class="btn">Edit</button>
                        <button onclick="deleteRecipe(${index})" class="btn">Delete</button>
                    </span>
                </h3>
                <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                <p><strong>Instructions:</strong> ${recipe.instructions}</p>
            `;
            recipeList.appendChild(recipeEl);
        });
    }

    function saveRecipes() {
        localStorage.setItem('recipes', JSON.stringify(recipes));
        renderRecipes();
    }

    addRecipeBtn.onclick = () => {
        modalTitle.textContent = 'Add New Recipe';
        editingIndex = -1;
        recipeForm.reset();
        modal.style.display = 'block';
    }

    closeBtn.onclick = () => {
        modal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    recipeForm.onsubmit = (e) => {
        e.preventDefault();
          
    const recipeName = document.getElementById('recipeName').value.trim();
    const ingredients = document.getElementById('ingredients').value.trim();
    const instructions = document.getElementById('instructions').value.trim();
    
    if (recipeName === '' || ingredients === '' || instructions === '') {
        alert('Please fill out all fields with valid content.');
        return;
    }

        const recipe = {
            name: document.getElementById('recipeName').value,
            ingredients: document.getElementById('ingredients').value,
            instructions: document.getElementById('instructions').value
        };
        if (editingIndex === -1) {
            recipes.push(recipe);
        } else {
            recipes[editingIndex] = recipe;
        }
        saveRecipes();
        modal.style.display = 'none';
    }

    window.editRecipe = (index) => {
        editingIndex = index;
        const recipe = recipes[index];
        document.getElementById('recipeName').value = recipe.name;
        document.getElementById('ingredients').value = recipe.ingredients;
        document.getElementById('instructions').value = recipe.instructions;
        modalTitle.textContent = 'Edit Recipe';
        modal.style.display = 'block';
    }

    window.deleteRecipe = (index) => {
        if (confirm('Are you sure you want to delete this recipe?')) {
            recipes.splice(index, 1);
            saveRecipes();
        }
    }

    renderRecipes();
});