const todoList = [{ name: 'make dinner', dueDate: '2023-09-19'}, 
    { name: 'wash dishes', dueDate: '2023-09-20'}];

const todoList1 = ['make dinner', 'wash dishes'];


renderTodoList();

function renderTodoList()
{
    let todoListHTML = '';
    for(let i=0; i<todoList1.length; i++)
    {
        const html = `<p>${todoList1[i]}</p>`
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo()
{
    const inputElement = document.querySelector('.js-input-name');
    const name = inputElement.value;
    todoList1.push(name);
    /*console.clear();
    for(let i=0; i<todoList.length; i++)
    {
        console.log(todoList[i]);
    }*/
    inputElement.value = '';
}

function addTodo2()
{
    const inputElement = document.querySelector('.js-input-name2');
    const name = inputElement.value;
    todoList1.push(name);
    inputElement.value = '';
    renderTodoList();
}

function addFinalTodo()
{
    const inputElement = document.querySelector('.js-input-nameF');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-input-due-dateF');
    const dueDate = dateInputElement.value
    todoList.push({ name: name, dueDate: dueDate 
        /*name, date*/ });
    inputElement.value = '';
    dateInputElement.value = '';
    renderFinalTodoList();
}

function renderFinalTodoList()
{
    let todoListHTML = '';
    for(let i=0; i<todoList.length; i++)
    {
        const todoObject = todoList[i];
        //const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
        const {name, dueDate} = todoObject;

        const html = `<div>${name}</div>
            <div> ${dueDate};</div>
            <button onclick="todoList.splice(${i}, 1);
             renderFinalTodoList();" class="delete-button">Delete</button>`
        todoListHTML += html;
    }
    console.log(todoListHTML);

    document.querySelector('.js-todo-listF').innerHTML = todoListHTML;
}