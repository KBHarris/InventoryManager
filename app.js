
//Selectors

//Event Listeners
document.addEventListener('DOMContentLoaded', loadData)



//Functions

function checkIn(item, qty) {
    /*TODO: Add item with selected quantity if quantity is greater than or equal to 1, if item 
     is already in the list then add selected quantity to that item. Save table to a JSON file */
}

function checkout(item, qty) {
    /*TODO: Subtract item with selected quantity if quantity is greater than or equal to 1, if item
     is already in the list then subrtract selected quantity from that item. DSo not allow quantitys less that zero. Save the table to a JSON file */
}

function loadData() {
    var hr = new XMLHttpRequest();
    hr.open("GET", "data.json", true);
    hr.setRequestHeader("Content-type", "application/json", true);
    hr.onreadystatechange = function() {
        if (hr.readyState == 4 && hr.status == 200) {
            var data = JSON.parse(hr.responseText);
            append_json(data);
        }
    }
    hr.send(null);

    
}

function saveData() {

    
}


//this function appends the json data to the table 'table'
function append_json(data){
    let table = document.getElementById('table-body');
    data.forEach(function(object) {
        let tr = document.createElement('tr');
        tr.innerHTML = '<td>' + object.Item + '</td>' +
            '<td>' + object.Quantity + '</td>'
        table.appendChild(tr);
    });
}

$('#checkin-btn').click( function() {
    var table = $('#table').tableToJSON();
    console.log(table)
    alert(JSON.stringify(table));  
});