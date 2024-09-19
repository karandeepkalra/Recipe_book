// document.addEventListener('DOMContentLoaded', function() {
//     const recipeContainer = document.querySelector('.recipe-container');
//     const modal = document.getElementById('recipeModal');
//     const modalTitle = document.getElementById('recipeTitle');
//     const modalDescription = document.getElementById('recipeDescription');
//     const closeBtn = document.querySelector('.close');

//     // Sample recipe descriptions (you can replace these with actual descriptions)
//     const recipeDescriptions = {
//         'Burger': 'Veggie burgers have become a popular healthy alternative to meat based burgers. These days, grocery stores and restaurants are offering many options, that try to mimic a meat texture, to custom made black bean and veggie patties and more A veggie burger recipe can be made with beans, chickpeas, lentils, tofu, tempeh, quinoa and a mix of different vegetables.I have been making a Vegetable Cutlet for years, so when I began getting requests for a vegetarian burger recipe, I was happy to take that recipe and adapt it into this perfect veggie burger where the patties are made with various mix veggies.So you won’t get a chewiness or a meat like texture in my burger recipe. Instead you will be surprised to find crispy flavorful moist patties sandwiched between soft toasted buns with vibrant freshness from sliced cucumbers, tomatoes, lettuce, onion and a bright mayo dressing – making for the perfect veggie burger experience. This all-veggie patty can compete with any Indian restaurant veggie burger and is by far better than the store-bought patties.Veggie burgers are an all time favorite in my home. Anytime we are craving street food like burgers with french fries, I reach for this burger recipe',
//         'Noodles': 'Perfectly cooked noodles tossed in a savory sauce with assorted vegetables and protein.',
//         'Sandwich': 'Layers of fresh ingredients between slices of artisan bread, creating a perfect balance of flavors.',
//         'Samosa': 'Crispy pastry filled with spiced potatoes and peas, deep-fried to golden perfection.',
//         'Pizza': 'A thin crust topped with tangy tomato sauce, melted mozzarella, and a variety of delicious toppings.',
//         'Pasta': 'Al dente pasta coated in a rich, flavorful sauce, garnished with herbs and cheese.'
//     };

//     recipeContainer.addEventListener('click', function(event) {
//         if (event.target.classList.contains('button')) {  // Changed from 'button1' to 'button'
//             const card = event.target.closest('.ca-card');
//             const title = card.querySelector('h3').textContent;
            
//             modalTitle.textContent = title;
            
//             modalDescription.textContent = recipeDescriptions[title] || 'Recipe description not available.';
//             modal.style.display = 'block';
//         }
//     });

//     closeBtn.onclick = function() {
//         modal.style.display = 'none';
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }
// });



document.addEventListener('DOMContentLoaded', function() {
    const recipeContainer = document.querySelector('.recipe-container');
    const modal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('recipeTitle');
    const modalDescription = document.getElementById('recipeDescription');
    const closeBtn = document.querySelector('.close');

    recipeContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('button')) {
            const card = event.target.closest('.ca-card');
            const title = card.querySelector('h3').textContent;
            const description = card.querySelector('.recipe-description').textContent;
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modal.style.display = 'block';
            document.querySelector('.overlay').style.display = "block"; 
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
        document.querySelector('.overlay').style.display = "none"; 
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});