# **Recipe Book**

A simple yet powerful Recipe Management application that allows users to search for recipes using the MealDB API, as well as manage their own custom recipes. Recipes are stored in local storage for persistence, ensuring that your culinary creations are always at your fingertips!

## **Table of Contents**
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Code Overview](#code-overview)
- [Future Enhancements](#future-enhancements)

## **Features**
1. **Search Recipes:**  
   Use the intuitive search box to find recipes from the MealDB API quickly and easily.

2. **View Recipe Details:**  
   Click on any recipe to see detailed information, including ingredients, measurements, and cooking instructions.

3. **CRUD Operations:**  
   Create, Read, Update, and Delete your own custom recipes, which are saved in the browser's local storage for easy access.

4. **User-Friendly Interface:**  
   Enjoy a clean and simple user interface that makes managing recipes a breeze.

5. **Responsive Design:**  
   The application is designed to work on both desktop and mobile devices, ensuring that you can access your recipes anywhere.

6. **Ingredient List Generation:**  
   Automatically generates a list of ingredients and their measurements for each recipe, making cooking straightforward.

7. **Recipe Categorization:**  
   Organize your recipes by category, such as appetizers, main courses, desserts, etc.

## **Technologies Used**
- **HTML**  
- **CSS**  
- **JavaScript**  
- **MealDB API:** [https://www.themealdb.com/api/json/v1/1/search.php?s=${query}](https://www.themealdb.com/api/json/v1/1/search.php?s=%24%7Bquery%7D)

## **Getting Started**

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox)
- Basic understanding of HTML, CSS, and JavaScript

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/karandeepkalra/Recipe_book.git
2. Navigate to cd Recipe_book and open index.html

## **Usage**

### Searching for Recipes:
- Enter a dish name in the search box and click the search button.
- Recipes will be fetched from the MealDB API and displayed dynamically.

### Viewing Recipe Details:
- Click on "View Recipe" for any displayed recipe to see its detailed information.

### Managing Custom Recipes:
- Click the "Add Recipe" button to create a new recipe.
- Fill out the form and click submit to save it.
- Existing recipes can be edited or deleted using the respective buttons next to each recipe.

### Storing Recipes:
- Your custom recipes are saved in the browser’s local storage, ensuring they persist even after refreshing the page.

## **Code Overview**

### Main Functions
- **fetchRecipes(query):** Fetches recipes from the MealDB API based on the search query.
- **fetchIngredients(meal):** Extracts ingredients from the meal object.
- **openRecipePopup(meal):** Displays a popup with detailed information about the selected recipe.
- **renderRecipes():** Renders the custom recipes stored in local storage.
- **saveRecipes():** Saves the current recipes array to local storage.

### Event Listeners
Event listeners for searching recipes, adding/editing custom recipes, and closing modals are implemented for a seamless user experience.

## **Future Enhancements**
- **User Authentication:** Implement user accounts for saving recipes across devices.
- **Recipe Sharing:** Allow users to share their custom recipes with others.
- **Ingredient Substitution Suggestions:** Provide alternatives for ingredients based on user preferences or dietary restrictions.
- **Advanced Search Filters:** Add filters for dietary preferences (vegan, gluten-free, etc.) and cooking time.
