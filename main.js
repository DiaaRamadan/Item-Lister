var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);

// delete item event
itemList.addEventListener('click', removeItem);

// add item function
function addItem(e){
    e.preventDefault();

    // get form input
    var newItem = document.getElementById('item');
    
    // create new li

    const newLi = document.createElement('li');
    newLi.className = 'list-group-item';

    // create new text node

    const newLiTextNode = document.createTextNode(newItem.value);
    newLi.appendChild(newLiTextNode);

    itemList.appendChild(newLi);

    // create delete button 
    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));

    newLi.appendChild(deleteBtn);
    newItem.value = '';
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
