/* this module puts dom elements on screen */
import { projectModal, projectFormReset } from './ui/projectModal.js'
import { renderProjects } from './ui/renderProjects.js'
import { taskModal, taskFormReset } from './ui/taskModal.js'
/* )      )      )      )      )   what I need?> */
/* modal (dialog - .showModal(), close()) to create projects */
export function openProjectModal () {
  projectModal.showModal()
  projectFormReset()
}
export function closeProjectModal () {
  projectModal.close()
}

/* modal to create tasks */
/* task modal */
export function openTaskModal () {
  taskModal.showModal()
  taskFormReset()
}
export function closeTaskModal () {
  taskModal.close()
}
/* function to render projects */
renderProjects()
/* function to render tasks */
/* function to delete projects */
/* function to delete tasks */
/* function to check that task is completed */
/* function to add note to task (it opens box and you can modify there or just read (so no need to add read note function)*/
