import {
  openProjectModal,
  closeProjectModal,
  openTaskModal,
  closeTaskModal,
  openNoteModal
} from './ui.js'
import {
  getProjectsFromLocalStorage,
  getTasksFromLocalStorage
} from '../data/storage.js'
/* this module gets elements (mostly querySelectors) */
const addTaskBtn = document.querySelector('#button-task')
addTaskBtn.addEventListener('click', openTaskModal)

const addProjectBtn = document.querySelector('#button-project')
addProjectBtn.addEventListener('click', openProjectModal)

const addNoteBtn = document.querySelectorAll('.task__note')
addNoteBtn.forEach(element => {
  element.addEventListener('click', openNoteModal)
})
