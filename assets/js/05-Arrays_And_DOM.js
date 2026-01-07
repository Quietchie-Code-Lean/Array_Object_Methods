/* ------ GUEST LIST ------ */

const inputGuest = document.querySelector(`#new_guest_input`);
const btnAddGuest = document.querySelector(`#add_guest_btn`);
const guestList = document.querySelector(`#guest_list`);

const guests = [];

btnAddGuest.addEventListener(`click`, ()=>{
    const newGuest = inputGuest.value;
    guests.push({id: Date.now(), name: newGuest});
    inputGuest.value = "";

    let HTMLcontent = "";

    guests.forEach((guest) =>{
        HTMLcontent += `<li> ID guest: ${guest.id} Name: ${guest.name}</li>`;
    });

    guestList.innerHTML = HTMLcontent;

});


/* ------ TODO LIST ------ */


const inputTask = document.querySelector(`#input_task`);
const newTaskAdd = document.querySelector(`#add_task_btn`);
const taskList = document.querySelector(`#task_list`);
const countTasks = document.getElementById(`count_tasks`);

const tasks = [];

newTaskAdd.addEventListener(`click`, () =>{
    const addedTask = inputTask.value;
    tasks.push({id: Date.now(), name: addedTask});
    inputTask.value = "";

    HTMLcontent= "";
    
    for(let task of tasks){
        HTMLcontent +=
        `<li>${task.name} <button onclick="Delete(${task.id})" class="btnDelete">Delete</button> </li>`;
    }

    countTasks.innerHTML = tasks.length;
    taskList.innerHTML = HTMLcontent;
});


function Delete(id){
    const index = tasks.findIndex((element) => element.id == id)
    tasks.splice(index, 1)

    let HTMLcontent = "";

    for(let task of tasks){
         HTMLcontent +=
        `<li>${task.name} <button onclick="Delete(${task.id})" class="btnDelete">Delete</button> </li>`;
    };

    countTasks.innerHTML = tasks.length;
    taskList.innerHTML = HTMLcontent;
};

 