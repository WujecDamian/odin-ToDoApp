import {
  getProjectsFromLocalStorage,
  getTasksFromLocalStorage
} from '../../data/storage.js'
import { createTask } from '../../data/task.js'
import { loadProject } from '../../data/project.js'
import { renderTasks } from './renderTasks.js'
let projects = getProjectsFromLocalStorage() || []

/* modal for project */
export const taskModal = document.createElement('dialog')
taskModal.className = 'task__modal'
const taskForm = document.createElement('form')
taskForm.className = 'task__form'
taskForm.method = 'dialog'
/* select project */
const selectProject = document.createElement('select')
selectProject.className = 'task__select'
if (projects.length > 0) {
  projects.forEach(element => {
    const option = document.createElement('option')
    option.value = element.projectName
    option.innerText = element.projectName
    selectProject.appendChild(option)
  })
}
/*  */
const inputTitle = document.createElement('input')
inputTitle.type = 'text'
inputTitle.className = 'task__title'
inputTitle.required = true
const inputDescription = document.createElement('input')
inputDescription.type = 'text'
inputDescription.className = 'task__description'
inputDescription.required = true
const inputDueDate = document.createElement('input')
inputDueDate.type = 'date'
inputDueDate.className = 'task__dueDate'
inputDueDate.required = true
const addButton = document.createElement('input')
addButton.type = 'submit'
addButton.value = 'Add'
addButton.className = 'task__button'
/* appends */
taskForm.appendChild(selectProject)
taskForm.appendChild(inputTitle)
taskForm.appendChild(inputDescription)
taskForm.appendChild(inputDueDate)
taskForm.appendChild(addButton)
taskModal.appendChild(taskForm)
document.body.appendChild(taskModal)
/* addbutton call function */
addButton.addEventListener('click', () => {
  if (
    selectProject.value != '' &&
    inputTitle.value != '' &&
    inputDescription.value != '' &&
    inputDueDate.value != ''
  ) {
    createTask(
      selectProject.value,
      inputTitle.value,
      inputDescription.value,
      inputDueDate.value
    )
    renderTasks()

    console.log(getTasksFromLocalStorage())
  }
})

export function taskFormReset () {
  taskForm.reset()
}
