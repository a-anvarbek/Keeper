// Start

var todoInput = document.getElementById('input');

var todoTextarea = document.getElementById('textarea');

var addButton = document.getElementById('btn');

var todoArray = [];

// clicked button should
addButton.addEventListener('click', function(){
    var title = todoInput.value;
    var text = todoTextarea.value;

    // for some reason
    if(title === "" && text === ""){
        alert("Please fill in both title and text");
        return;
    }
    
    // logical check
    addNewTeg(title, text);

    // remove
    todoInput.value = "";
    todoTextarea.value = "";
})

// function for adding new elements
function addNewTeg(textH1, textP){
    var noteDiv = document.createElement('div');
    noteDiv.setAttribute('id', 'note');
    
    // add new h1 teg
    var noteH1 = document.createElement('h1');
    noteH1.textContent = textH1;
    noteDiv.appendChild(noteH1); // h1 teg in child div teg
    
    var noteP = document.createElement('p');
    noteP.textContent = textP;
    noteDiv.appendChild(noteP); // p teg in child div teg
    
    var noteButton = document.createElement('button');
    noteDiv.appendChild(noteButton); // button teg in child div teg

    // for icon in the button 
    var buttonIcon = document.createElement('i');
    buttonIcon.className = 'fa-solid fa-trash';

    noteButton.appendChild(buttonIcon); // i teg in child button teg
    
    // add event listener to delete button
    noteButton.addEventListener("click", function(){
        noteDiv.remove();
    });
    
    // add new div to the notes section
    document.getElementById('notes').appendChild(noteDiv);    
}

