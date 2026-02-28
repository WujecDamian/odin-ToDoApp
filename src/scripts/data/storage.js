/* this module contains localstorage */

/* function to save projects to localstorage */
export function saveProjectLocalStorage (projects) {
  localStorage.setItem('projects', JSON.stringify(projects))
}
/* function to save tasks to localstorage */
export function saveTaskLocalStorage (tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
