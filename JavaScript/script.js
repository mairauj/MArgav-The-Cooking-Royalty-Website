function recipelist(recipe) {
    // Get all recipe lists
    let allLists = document.querySelectorAll('.recipe-list'); // Assuming your recipe lists have this class
    
    // Close all other lists
    allLists.forEach((list) => {
        if (list !== recipe.nextElementSibling) {
            list.style.display = 'none';
            let dropdown = list.previousElementSibling.querySelector(".dropdown"); // Adjust if the dropdown isn't a direct sibling
            dropdown.style.transform = 'rotate(0deg)';
        }
    });

    // Toggle the clicked recipe list
    let list = recipe.nextElementSibling;
    let isVisible = list.style.display === 'block';
    list.style.display = isVisible ? 'none' : 'block';
    let dropdown = recipe.querySelector(".dropdown");
    dropdown.style.transform = isVisible ? 'rotate(0deg)' : 'rotate(-180deg)';
}
