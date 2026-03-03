/* everything related to task [CRUD] */
import { saveTaskLocalStorage, getTasksFromLocalStorage } from './storage.js'
/* create task object factory  */
export let tasks = getTasksFromLocalStorage() || []

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
  saveTaskLocalStorage(tasks)
  return task
}
