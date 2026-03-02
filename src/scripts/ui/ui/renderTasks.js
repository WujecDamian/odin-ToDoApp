import { getTasksFromLocalStorage } from '../../data/storage.js'
export function renderTasks () {
  const tasksList = document.querySelector('.tasks__list')
  let tasks = getTasksFromLocalStorage() || []
  if (tasks.length > 0) {
    tasksList.replaceChildren()
    tasks.forEach(element => {
      const taskEl = document.createElement('div')
      taskEl.className = 'task__element'
      tasksList.appendChild(taskEl)
      /* text wrapper */
      const taskTextWrapper = document.createElement('div')
      taskTextWrapper.className = 'task__text-wrapper'
      const taskTitle = document.createElement('h2')
      taskTitle.className = 'task__title'
      taskTitle.innerText = element.title
      const taskDescription = document.createElement('h3')
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

      /* appends */
      taskTextWrapper.append(
        taskTitle,
        taskDescription,
        taskCreationDate,
        taskDueDate
      )
      taskEl.appendChild(taskTextWrapper)
      tasksList.appendChild(taskEl)
    })
  }
}

/* TODO: use map.filter() to filter only tasks from getActiveProject() activeproject parameter - this function does not exist. create one.*/
