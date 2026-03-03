import {
  getTasksFromLocalStorage,
  getProjectsFromLocalStorage
} from '../../data/storage.js'
import { deleteTask } from './deleteTask.js'
import { isTaskCompleted } from './isTaskCompleted.js'
import { addNote } from './noteModal.js'
export function renderTasks (activeProject) {
  const tasksList = document.querySelector('.tasks__list')
  let tasks = getTasksFromLocalStorage() || []
  let projects = getProjectsFromLocalStorage() || []
  let projectArr = Array.from(projects)

  if (activeProject === undefined) {
    activeProject = projectArr[0].projectName
  }

  tasksList.replaceChildren()
  /* if i don't want items to get removed i have to add display none (they will still be in dom) */
  tasks.forEach(element => {
    const taskEl = document.createElement('div')
    taskEl.className = 'task__element hidden'
    tasksList.appendChild(taskEl)
    /* text wrapper */
    const taskTextWrapper = document.createElement('div')
    taskTextWrapper.className = 'task__text-wrapper'
    const taskProjectName = document.createElement('span')
    taskProjectName.className = 'task__ProjectName hidden'
    taskProjectName.innerText = element.projectName
    const taskTitle = document.createElement('h2')
    taskTitle.className = 'task__title'
    taskTitle.innerText = element.title
    const taskDescription = document.createElement('h4')
    taskDescription.className = 'task__description'
    taskDescription.innerText = element.description
    const taskCreationDate = document.createElement('span')
    taskCreationDate.className = 'task__creationdate'
    taskCreationDate.innerText = element.creationDate
    const taskDueDate = document.createElement('span')
    taskDueDate.className = 'task__duedate'
    taskDueDate.innerText = element.dueDate
    /* button wrapper */
    const taskButtonsWrapper = document.createElement('div')
    taskButtonsWrapper.className = 'task__buttons-wrapper'
    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox'
    taskCheckbox.className = 'task__checkbox'
    taskCheckbox.addEventListener('click', isTaskCompleted)
    if (element.isCompleted === true) {
      taskCheckbox.checked = true
      taskEl.classList.add = 'completed'
    } else if (element.isCompleted === false) {
      taskCheckbox.checked = false
      taskEl.classList.remove = 'completed'
    }
    const actionButtonWrapper = document.createElement('div')
    actionButtonWrapper.className = 'task__actionbuttons-wrapper'
    const taskNote = document.createElement('input')
    taskNote.type = 'button'
    taskNote.className = 'task__note'
    taskNote.value = 'note'
    taskNote.addEventListener('click', addNote)
    const taskDelete = document.createElement('input')
    taskDelete.type = 'button'
    taskDelete.className = 'task__delete'
    taskDelete.value = 'Delete'
    taskDelete.addEventListener('click', deleteTask)
    /* appends */
    taskTextWrapper.append(
      taskProjectName,
      taskTitle,
      taskDescription,
      taskCreationDate,
      taskDueDate
    )
    actionButtonWrapper.append(taskNote, taskDelete)
    taskButtonsWrapper.append(taskCheckbox, actionButtonWrapper)
    taskEl.append(taskTextWrapper, taskButtonsWrapper)
    tasksList.appendChild(taskEl)
  })

  let filteredTasks = tasks.filter(task => task.projectName === activeProject)
  console.log(filteredTasks.length)
  const elements = document.querySelectorAll('.task__element')
  let projectNameSpan = document.querySelectorAll('.task__ProjectName')
  console.log(projectNameSpan)

  projectNameSpan.forEach(span => {
    if (span.innerText === activeProject) {
      span.parentElement.parentElement.className = 'task__element'
    }
  })
}

/* TODO: use map.filter() to filter only tasks from getActiveProject() activeproject parameter - this function does not exist. create one.*/
