const form = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
let task = document.querySelectorAll('.task')

const taskList = document.getElementById('task-list')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    console.log(taskInput.value)

    newTask = document.createElement('li')
    newTask.classList.add('task')

    newTask.textContent = taskInput.value
    taskList.appendChild(newTask)

    taskInput.value = ''
    
    console.log(newTask)
} )

