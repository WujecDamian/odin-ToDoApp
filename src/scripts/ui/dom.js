import { openProjectModal, closeProjectModal } from './ui.js'
/* this module gets elements (mostly querySelectors) */
const addTaskBtn = document.querySelector('#button-task')

const addProjectBtn = document.querySelector('#button-project')
addProjectBtn.addEventListener('click', openProjectModal)
