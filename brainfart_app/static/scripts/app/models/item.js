// all my functions that have to do with items go in this file.


function getItemById(id) {
    for (var i = 0; i < all_items.length; i++) {
        var item = all_items[i];
        console.log(item);
        if (item.id == id) {
            return item
        }
    }
    return undefined
}

function getItemByQuantity(quantities) {
    for (var i = 0; i < all_quantity.length; i++) {
        var quantity = all_quantity[i];
        console.log(quantity);
        if (quantity.id == id) {
            return quantity
        }
    }
}

function itemsReceived(e) {
    all_items = JSON.parse(e.target.responseText).items;
    drawItems();
}

function ajaxLoadItems() {
    var xhr = new XMLHttpRequest();
    xhr.open("get", "/api/v1/model/items/");
    xhr.onload = itemsReceived;
    xhr.send();
}

function addItem() {
    var itemElement = document.getElementById('item');
    if (itemElement.value.length > 0) {
        var item = {name: itemElement.value, id: 0, category_id: window.selectedCategory.id, quantity: 0};
        items.push(item);
        window.selectedItem = item;
        itemElement.value = '';
        drawItems();
        itemSave();
    }
}

function drawDetail() {
    document.getElementById('name').value = window.selectedItem.name;
    document.getElementById('quantity').value = window.selectedItem.quantity
}

function itemSelected(e) {
    console.log(e.target);
    id = e.target.selectedOptions[0].getAttribute('value');
    window.selectedItem = getItemById(id);
    drawDetail();
}

function itemReceived(e) {
    console.log(e.target.responseText);
    var item = JSON.parse(e.target.responseText);
    var updated = getItemById(item.id);
    if (updated == undefined) {
        updated = item;
        all_items.push(updated)
    }
    updated.quantity = item.quantity;
    updated.name = item.name;
    drawItems();
}

function itemSave() {
    window.selectedItem.name = document.getElementById('name').value;
    window.selectedItem.quantity = document.getElementById('quantity').value;
    var xhr = new XMLHttpRequest();
    xhr.open("post", "/api/v1/model/items/");
    xhr.onload = itemReceived;
    var fd = new FormData();
    fd.append("name", selectedItem.name);
    fd.append("id", selectedItem.id);
    fd.append("quantity", selectedItem.quantity);
    fd.append("category_id", selectedItem.category_id);
    xhr.send(fd);
}

function itemDelete() {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "/api/v1/model/items/");
    xhr.onload = ajaxLoadItems;
    var fd = new FormData();
    fd.append("id", selectedItem.id);
    fd.append("action","delete");
    xhr.send(fd);
}