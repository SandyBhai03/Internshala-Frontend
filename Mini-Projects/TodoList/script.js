const inputBox = document.getElementById("input-box");
const addBtn = document.getElementById("add-task-btn");
const taskContainer = document.getElementById("task-list");

let addTask = () => {
    let msg = inputBox.value;
    let newtask = document.createElement("li");
    newtask.setAttribute('id', 'item');
    newtask.textContent =msg;
    taskContainer.appendChild(newtask);
    

}

addBtn.addEventListener('click', addTask);


// ------------------------------------





