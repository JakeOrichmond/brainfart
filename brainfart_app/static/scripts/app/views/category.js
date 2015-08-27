    function drawCategories() {
        var categoriesElement = document.getElementById('categories');
        categoriesElement.innerHTML = '';

        for (var i = 0; i < categories.length; i++) {
            var cat = categories[i];
            console.log(cat);

            var optionElement = document.createElement('option');
            optionElement.setAttribute('value', cat.id);
            optionElement.innerHTML = cat.name;
            categoriesElement.appendChild(optionElement);
        }
    }