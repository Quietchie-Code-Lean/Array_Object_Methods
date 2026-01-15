

const inputTask = document.querySelector(`#input_task`);
const newTask = document.querySelector(`#add_task_btn`);
const inputSearch = document.querySelector(`#search_task`);
const btnSearch = document.querySelector(`#btn_search_task`);
const tableBody = document.querySelector(`#table_body`);
const selectPriority = document.querySelector(`#select_priority`)
const countTasks = document.querySelector(`#count_tasks`);

const tasks = [
    /* {id: "id-001", task: "test task 1", priority: "red"},
    {id: "id-002", task: "test task 2", priority: 'yellow'},
    {id: "id-003", task: "test task 3", priority: 'green'} */
];



function renderTable(){
    let HTMLcontent = "";

    for(let task of tasks){
       
        HTMLcontent +=
            `
            <tr>
                <td>${task.id}</td>
                <td>${task.task}</td>
                <td>
                    <span 
                    style="
                        color:${task.priority};
                        border-radius: 50%;
                        height: 5px;
                        width: 5px">
                    </span> 
                    <button onclick="DeleteTasks(${task.id})" class="btnDelete">
                    x
                    </button>
                </td>
            </tr>
            `
    };
};

newTask.addEventListener(`click`, () => {
    const addedTask = inputTask.value;
    const priorityTask = selectPriority.value;
    tasks.push({id: Date.now(), task: addedTask, priority: priorityTask});
    
    inputTask.value = "";

    renderTable(tasks);
    
    countTasks.innerHTML = tasks.length;
    tableBody.innerHTML = HTMLcontent;
});


function DeleteTasks(id){
    const index = tasks.findIndex((element) => element.id == id)
    tasks.splice(index, 1)

   renderTable(tasks);

    countTasks.innerHTML = tasks.length;
    tableBody.innerHTML = HTMLcontent;
};


btnSearch.addEventListener(`click`, () => {
    const fetchedTask = inputSearch.value;
    const filteredTask = tasks.filter(
        (task) => task.task.includes(fetchedTask)
    )
});
