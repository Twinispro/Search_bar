import { getAllProducts } from "./product.mjs";
document.addEventListener('DOMContentLoaded', function () {
    const search = document.getElementById('search');
    const searchResults = document.getElementById('searchResults')
    const cardTemplate = document.getElementById('card-template').innerHTML;

    // Intial display of all products
    const allProducts = getAllProducts();
    displayResults(allProducts);
    
    //Event listener when text is place in the search bar
    search.addEventListener('input', function(){
    const searchTerm = search.value.toLowerCase();
    const filteredResults = getFilteredResults(searchTerm);
    displayResults(filteredResults);
    });

    function getFilteredResults(term){
        //test data
        const allResults = getAllProducts();
        return allResults.filter(result => result.name.toLowerCase().includes(term));
    }
    
    function displayResults(results){
        searchResults.innerHTML = '';

        results.forEach(result => {
         const cardHTML = cardTemplate
         .replace('${name}', result.name)
         .replace('${price}', result.price)
         .replace('{{image}}', result.image);

         const card = document.createRange().createContextualFragment(cardHTML).querySelector('.card')

            searchResults.appendChild(card);

            card.addEventListener('click', function(){
                alert(`You clicked on ${result.name}`)
            });
        });

    }
});
