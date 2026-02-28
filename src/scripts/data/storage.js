/* this module contains localstorage */

/* function to save projects to localstorage */
export function saveProjectLocalStorage (projects) {
  localStorage.setItem('projects', JSON.stringify(projects))
}
/* get projects */
export function getProjectsFromLocalStorage () {
  return JSON.parse(localStorage.getItem('projects'))
}

/* _________________________________________________________________ */

/* function to save tasks to localstorage */
export function saveTaskLocalStorage (tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
/* get tasks */
export function getTasksFromLocalStorage () {
  return JSON.parse(localStorage.getItem('tasks'))
}
