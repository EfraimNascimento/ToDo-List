
var itemId = 0;

function addTask(){

    let todoInput = document.getElementById('todoText').value;

    if(todoInput != ""){
        itemId++
        let task = document.getElementById('todoListTasks').innerHTML += 
        "<li id="+ itemId +" >" + todoInput 
        +"<input type='checkbox' class='taskCheck'><button onclick='deleteTask("+ itemId +")' class='taskDelete'><i class='fas fa-trash'></i></button></li>"
        console.log(itemId)
    }
    else{
        alert('Insira uma tarefa');
    }
    
}

function deleteTask(value){
    document.getElementById(value).innerHTML = "";
}