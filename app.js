var itemId = 0;

function addTask(){

    let todoInput = document.getElementById('todoText').value;

    if(todoInput != ""){
        itemId++
        document.getElementById('todoText').value = "";
        let task = document.getElementById('todoListTasks').innerHTML += 
        "<li id="+ itemId +" >" + todoInput 
        +"<input type='checkbox' class='taskCheck' onclick='checkTask("+ itemId +")'><button onclick='deleteTask("+ itemId +")' class='taskDelete'><i class='fas fa-trash'></i></button></li>"
    }
    else{
        alert('Insira uma tarefa');
        checkedTask = false;
    }
    
}

function deleteTask(value){
   document.getElementById(value).remove();
}

function checkTask(value){
    let Task = document.getElementById(value).classList.toggle('checked');
}