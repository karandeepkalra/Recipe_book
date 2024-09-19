document.addEventListener('DOMContentLoaded', function() {
    const recipeContainer = document.querySelector('.recipe-container');
    const modal = document.getElementById('recipeModal');
    const modalTitle = document.getElementById('recipeTitle');
    const modalDescription = document.getElementById('recipeDescription');
    const closeBtn = document.querySelector('.close');

    // Sample recipe descriptions (you can replace these with actual descriptions)
    const recipeDescriptions = {
        'Burger': 'A juicy beef patty sandwiched between soft buns, topped with fresh lettuce, tomato, and cheese.',
        'Noodles': 'Perfectly cooked noodles tossed in a savory sauce with assorted vegetables and protein.',
        'Sandwich': 'Layers of fresh ingredients between slices of artisan bread, creating a perfect balance of flavors.',
        'Samosa': 'Crispy pastry filled with spiced potatoes and peas, deep-fried to golden perfection.',
        'Pizza': 'A thin crust topped with tangy tomato sauce, melted mozzarella, and a variety of delicious toppings.',
        'Pasta': 'Al dente pasta coated in a rich, flavorful sauce, garnished with herbs and cheese.'
    };

    recipeContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('button')) {  // Changed from 'button1' to 'button'
            const card = event.target.closest('.ca-card');
            const title = card.querySelector('h3').textContent;
            
            modalTitle.textContent = title;
            
            modalDescription.textContent = recipeDescriptions[title] || 'Recipe description not available.';
            modal.style.display = 'block';
        }
    });

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});