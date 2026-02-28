/* everything related to task [CRUD] */

/* create task object factory  */
export let tasks = []

export function createTask (projectName, title, description, dueDate) {
  return {
    projectName: projectName,
    title: title,
    description: description,
    dueDate: dueDate,
    creationDate: '/* function from date.js */',
    notes: '' //User will be able to add notes (for now empty)
  }
}
