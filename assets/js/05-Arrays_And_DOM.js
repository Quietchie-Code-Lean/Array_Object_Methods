/* ------ GUEST LIST ------ */

const inputGuest = document.querySelector(`#new_guest_input`);
const btnAddGuest = document.querySelector(`#add_guest_btn`);
const guestList = document.querySelector(`#guest_list`);

const guests = [];

function renderGuest(){
     let HTMLcontent = "";

    guests.forEach((guest) =>{
        HTMLcontent += `<li> ID guest: ${guest.id} Name: ${guest.name}<button onclick="DeleteGuest(${guest.id})" class="btnDelete">Delete</button></li>`;
    });

    guestList.innerHTML = HTMLcontent;
};

btnAddGuest.addEventListener(`click`, ()=>{
    const newGuest = inputGuest.value;
    guests.push({id: Date.now(), name: newGuest});
    inputGuest.value = "";

    renderGuest();

});

function DeleteGuest(id){
    const index = guests.findIndex((element) => element.id == id)
    guests.splice(index, 1)

    renderGuest();
};


/* ------ TODO LIST ------ */


const inputTask = document.querySelector(`#input_task`);
const newTaskAdd = document.querySelector(`#add_task_btn`);
const taskList = document.querySelector(`#task_list`);
const countTasks = document.getElementById(`count_tasks`);

const tasks = [];

function renderTasks(){

        HTMLcontent= "";
        
        for(let task of tasks){
            HTMLcontent +=
            `<li>${task.name} <button onclick="Delete(${task.id})" class="btnDelete">Delete</button> </li>`;
        };
    };

newTaskAdd.addEventListener(`click`, () =>{
    const addedTask = inputTask.value;
    tasks.push({id: Date.now(), name: addedTask});
    inputTask.value = "";

    renderTasks();

    countTasks.innerHTML = tasks.length;
    taskList.innerHTML = HTMLcontent;
});


function Delete(id){
    const index = tasks.findIndex((element) => element.id == id)
    tasks.splice(index, 1)

   renderTasks();

    countTasks.innerHTML = tasks.length;
    taskList.innerHTML = HTMLcontent;
};

 /*  Applying function to render in every step, first adding the elements to a list, and second removing from de list through function Delete() */

 /* 
 
 function renderGuest(){
    let HTMLcontent = "";

    for(let task of tasks){
         HTMLcontent +=
        `<li>${task.name} <button onclick="Delete(${task.id})" class="btnDelete">Delete</button> </li>`;
    };
 }
 

 function renderTasks(){
    let HTMLcontent = "";

    for(let task of tasks){
         HTMLcontent +=
        `<li>${task.name} <button onclick="Delete(${task.id})" class="btnDelete">Delete</button> </li>`;
    };
 }


 */

 /* This kind of functions, the ones that modify the DOM, they're call renders. To avoid the repeat them, is a good practice to make this kind of renders. Even so, in every iteration with the DOM we don't have to repeat so many code lines */