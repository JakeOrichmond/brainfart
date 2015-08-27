    function drawItems() {
        var itemsElement = document.getElementById('items');
        itemsElement.innerHTML = '';

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            console.log(item);

            var optionElement = document.createElement('option');
            optionElement.setAttribute('value', item.id);
            optionElement.innerHTML = item.name + " - " + item.quantity;
            itemsElement.appendChild(optionElement);
        }
    }