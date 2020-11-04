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
        const storedItems = Store.getInvItems()

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
    static showAlert(message) {
        const div = document.createElement('div')
        div.className = `alert alert-danger container`
        div.appendChild(document.createTextNode(message))
        const header = document.querySelector('.header')
        const btns = document.querySelector('#form-buttons')
        header.insertBefore(div,btns)

        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }
}

// Storage Class:
class Store {
    static getInvItems() {
        let items
        if(localStorage.getItem('items') === null) {
            items = []
        } else {
            items = JSON.parse(localStorage.getItem('items'))
        }
        return items
    }

    static addInvItem (item) {
        const items = Store.getInvItems()
        

        items.push(item)

        localStorage.setItem('items', JSON.stringify(items))
    }

    //Find an item if it is already in the list and grab the index of the array if true. If false add item to list and storage
    static findItem (name) {
        
    }
    // increase the value of the quantity key at the specified array from findItem() and save it back to local storage
    static increaseQty(found) {
        
    }
    // decrease the value of the quantity key at the specified array from findItem() and save it back to local storage
    static decreaseQty() {

    }
}

// Event: Display Inventory items
document.addEventListener('DOMContentLoaded', UI.displayItems)

// Event: Check In an Item (If Item exists, update count. If not add item with count. Do not allow negative amount values)
document.querySelector('#checkin-btn').addEventListener('click', (e) => {
    //Get form values
    const name = document.querySelector('#item-name').value
    const quantity = document.querySelector('#item-quantity').value

    const item = new Invitem(name, quantity)
    
    //Add item to list
    if (item.quantity < '1' || item.name === ''){
       UI.showAlert('All fields must be filled in and Quantity cannot be less than 1')
    } else { 
        UI.addItemToList(item)
        Store.addInvItem(item)

        var table = document.getElementById("table-body");
        for (var i = 0, cell; cell = table.cells[i]; i++) {
            console.log(cell)
            //iterate through cells
            //cells would be accessed using the "cell" variable assigned in the for loop
        }


        document.getElementById("input-form").reset()
    }   
})
// Event: Check Out an Item (if item exists subtract amount from current count. If not display error. Do not allow negative count values)