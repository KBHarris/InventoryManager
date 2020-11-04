
// Inv-item class: Represents an Inventory item
class Invitem {
    constructor(name,quantity) {
        this.name = name
        this.quantity = quantity
    }
}

// UI class:

class UI {
    static displayItems() {
        const storedItems = [
            {
                name: "Desktop",
                quantity: "20"
            },
            {
                name: "Laptop",
                quantity: "10"
            }
        ]

        const items = storedItems

        items.forEach((item)=> UI.addItemToList(item))
    }

    static addItemToList(item) {
        const list = document.querySelector('#table-body')

        const row = document.createElement('tr')

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
        `
        list.appendChild(row)
    }
}

// Storage Class:
class Store {

}

// Event: Display Inventory items

document.addEventListener('DOMContentLoaded', UI.displayItems)

// Event: Check In an Item (If Item exists, update count. If not add item with count. Do not allow negative amount values)

document.querySelector('#checkin-btn').addEventListener('click', (e) => {
    //Get form values
    const name = document.querySelector('#item-name').value
    const quantity = document.querySelector('#item-quantity').value

    //form validation
    if(name === '' || quantity === '') {
        alert("Completly fill out the form")
    }

    const item = new Invitem(name, quantity)
    
    //Add item to list
    if (item.quantity < '1'){
        alert('Cannot have zero or negative value')
    } else {
        UI.addItemToList(item)
        document.getElementById("input-form").reset()
    }
    
    
    
    
})

// Event: Check Out an Item (if item exists subtract amount from current count. If not display error. Do not allow negative count values)





