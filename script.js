const form = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
let task = document.querySelectorAll('.task')

const taskList = document.getElementById('task-list')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    // Création de la tâche
    let newTask = document.createElement('li')
    newTask.classList.add('task')
    newTask.textContent = taskInput.value

    // Création du bouton supprimer (local pour chaque tâche)
    let taskDeleteButton = document.createElement('button')
    taskDeleteButton.classList.add('task-delete')
    taskDeleteButton.textContent = 'Supprimer'
    taskDeleteButton.type = 'button'

    // Ajout du bouton DANS la tâche
    newTask.appendChild(taskDeleteButton)

    // Ajout de la tâche à la liste
    taskList.appendChild(newTask)

    // Listener pour barrer la tâche
    newTask.addEventListener ('click', () => {
            newTask.classList.toggle('completed')
    })
    
    // Listener pour supprimer la tâche
    taskDeleteButton.addEventListener ('click', (evt) => {
       evt.stopPropagation()
       newTask.remove()
    })
    
    // Réinitialisation de l'input
    taskInput.value = ''

} )

