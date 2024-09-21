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