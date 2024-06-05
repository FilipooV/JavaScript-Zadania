    // Pobranie elementu listy o id "categories"
    var categoriesList = document.getElementById('categories');


    if (categoriesList) {
        // Pobranie wszystkich elementów li wewnątrz listy
        var categoriesItems = categoriesList.querySelectorAll('li.item');

        var h2Items = categoriesList.querySelector('h2');

        // Policzenie liczby elementów
        var numberOfCategories = categoriesItems.length;


       

        // Wypisanie liczby kategorii w konsoli
        console.log('Number of categories: ' + numberOfCategories);
    } else {
        console.log('Nie znaleziono listy o id "categories"');
    }



    if(categoriesList){

        var categoriesItems2 = categoriesList.querySelector('h2')
        console.log(categoriesItems2.textContent);
    }


