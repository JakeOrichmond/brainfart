var categories = [
    {id: 1, name: 'Fruit'},
    {id: 2, name: 'Vegetables'},
    {id: 3, name: 'Meats'},
    {id: 4, name: 'Snacks'},
    {id: 5, name: 'Pasta'},
    {id: 6, name: 'Sauces'}
];

var items = [];

var all_items = [
    {id: 1, name: 'Apple', quantity: '1'},
    {id: 2, name: 'Broccoli', quantity: '2'},
    {id: 5, name: 'Spaghetti', quantity: '1'},
    {id: 4, name: 'Gold Fish', quantity: '3'},
    {id: 6, name: 'Marinara', quantity: '4'},
    {id: 3, name: 'Steak', quantity: '13'},
    {id: 7, name: 'Orange', quantity: '12'},
    {id: 8, name: 'Peach', quantity: '2'},
    {id: 9, name: 'Spinach', quantity: '3'},
    {id: 10, name: 'Chicken', quantity: '4'},
    {id: 11, name: 'Potato chips', quantity: '1'},
    {id: 12, name: 'Alfredo', quantity: '2'},
    {id: 13, name: 'Fettuccine', quantity: '24'}
];


var category_item_map = [
    {category_id: 1, items_id: 1},
    {category_id: 2, items_id: 2},
    {category_id: 3, items_id: 3},
    {category_id: 4, items_id: 4},
    {category_id: 5, items_id: 5},
    {category_id: 6, items_id: 6},
    {category_id: 1, items_id: 7},
    {category_id: 1, items_id: 8},
    {category_id: 2, items_id: 9},
    {category_id: 3, items_id: 10},
    {category_id: 4, items_id: 11},
    {category_id: 6, items_id: 12},
    {category_id: 5, items_id: 13}
];

function categoryKeypress(e) {
    if (e.keyCode == 13) {
        addCategory();
    }
    console.log(e.key);
}

function itemKeypress(e) {
    if (e.keyCode == 13) {
        addItem();
    }
    console.log(e.key);
}

function categorySelected(e) {
    id = e.target.selectedOptions[0].getAttribute('value');
    window.selectedCategory = getCategoryById(id);
    items = getItemListForCategory(id);
    drawItems();
}

function nameChanged(e) {
    window.selectedItem.name = e.target.value;
    drawItems();
}

function quantityChanged(e) {
    window.selectedItem.quantity = e.target.value;
    drawItems();
}

function init() {
    ajaxLoadCategories();
    ajaxLoadItems();
    document.getElementById('categories').addEventListener('change', categorySelected);
    document.getElementById('add_category').addEventListener('click', addCategory);
    document.getElementById('category').addEventListener('keypress', categoryKeypress);
    document.getElementById('add_item').addEventListener('click', addItem);
    document.getElementById('item').addEventListener('keypress', itemKeypress);
    document.getElementById('items').addEventListener('change', itemSelected);
    document.getElementById('save').addEventListener('click', itemSave);
    document.getElementById('name').addEventListener('change', nameChanged);
    document.getElementById('quantity').addEventListener('change', quantityChanged);
    document.getElementById('delete').addEventListener('click', itemDelete);
}

document.addEventListener('DOMContentLoaded', init);