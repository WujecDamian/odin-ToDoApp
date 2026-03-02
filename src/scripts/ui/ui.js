/* this module puts dom elements on screen */
import { projectModal, projectFormReset } from './ui/projectModal.js'
import { renderProjects } from './ui/renderProjects.js'
import { renderTasks } from './ui/renderTasks.js'
import { taskModal, taskFormReset } from './ui/taskModal.js'
import { noteModal } from './ui/noteModal.js'
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
renderTasks()
/* function to delete projects [GOOD]*/

/* function to delete tasks [GOOD]*/
/* function to check that task is completed [GOOD]*/
/* function to add note to task (it opens box and you can modify there or just read (so no need to add read note function)*/
export function openNoteModal () {
  noteModal.showModal()
}
export function closeNoteModal () {
  noteModal.close()
}
