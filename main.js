var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// add item function
function addItem(e){
    e.preventDefault();

    // get form input
    var newItem = document.getElementById('item').value;
    
    // create new li

    const newLi = document.createElement('li');
    newLi.className = 'list-group-item';

    // create new text node

    const newLiTextNode = document.createTextNode(newItem);
    newLi.appendChild(newLiTextNode);

    itemList.appendChild(newLi);

    // create delete button 
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    newLi.appendChild(deleteBtn);
}
