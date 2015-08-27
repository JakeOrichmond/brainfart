// all my functions that have to do with categories go in this file.

function getCategoryById(id) {
    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        console.log(category);
        if (category.id == id) {
            return category
        }
    }
    return undefined
}

function getItemListForCategory(category_id) {
    var list = [];
    for (i = 0; i < category_item_map.length; i++) {
        var mapItem = category_item_map[i];
        if (category_id == mapItem.category_id) {
            var item = getItemById(mapItem.items_id);
            list.push(item)
        }

    }
    return list
}

function categoriesLoaded(e) {
    categories = JSON.parse(e.target.responseText).Categories;
    drawCategories();
}

function ajaxLoadCategories() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "/api/v1/model/");
    xhr.onload = categoriesLoaded;
    xhr.send();
}

function categoryReceived(e) {
    console.log(e.target.responseText);
    var category = JSON.parse(e.target.responseText);
    var updated = window.selectedCategory;
    if (updated == undefined) {
        updated = category;
        all_items.push(updated)
    }
    updated.name = category.name;
    updated.id = category.id;
    drawCategories();
}

function addCategory() {
    var categoryElement = document.getElementById('category');
    if (categoryElement.value.length > 0) {
        var category = {name: categoryElement.value, id: 0};
        window.selectedCategory = category;
        categories.push(category);
        categoryElement.value = '';
        drawCategories();
    }
    var xhr = new XMLHttpRequest();
    xhr.open("post", "/api/v1/model/");
    xhr.onload = categoryReceived;
    var fd = new FormData();
    fd.append("name", category.name);
    fd.append("id", category.id);
    xhr.send(fd);
}

function categorySelected(e) {
    id = e.target.selectedOptions[0].getAttribute('value');
    window.selectedCategory = getCategoryById(id);
    items = getItemListForCategory(id);
    drawItems();
}