/* everything related to task [CRUD] */
import { saveTaskLocalStorage } from './storage.js'
/* create task object factory  */
let tasks = []

export function createTask (
  projectName,
  title,
  description = '',
  dueDate = null
) {
  const task = {
    id: crypto.randomUUID(),
    projectName,
    title,
    description,
    dueDate,
    creationDate: '/* function from date.js */',
    notes: '', //User will be able to add notes (for now empty)
    isCompleted: false
  }
  tasks = [...tasks, task]
  /* save to localstorage here */
  saveTaskLocalStorage(tasks)
  return task
}

export function getTasks () {
  return [...tasks]
}
