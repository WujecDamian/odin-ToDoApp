import {
  getTasksFromLocalStorage,
  saveTaskLocalStorage
} from '../../data/storage.js'
import { renderTasks } from './renderTasks.js'

export function isTaskCompleted (e) {
  let Tasks = getTasksFromLocalStorage()

  let TasksList = document.querySelectorAll('.task__element')
  TasksList = Array.from(TasksList)

  let indexOfTask = TasksList.indexOf(e.target.parentElement.parentElement)
  if (e.target.checked === true) {
    console.log(`task ${indexOfTask} is completed`)
    Tasks[indexOfTask].isCompleted = true
    saveTaskLocalStorage(Tasks)
    e.target.checked = true
    e.target.parentElement.parentElement.className = 'task__element completed'
    return true
  } else {
    console.log(`task ${indexOfTask} isn't completed`)
    Tasks[indexOfTask].isCompleted = false
    saveTaskLocalStorage(Tasks)
    e.target.checked = false
    e.target.parentElement.parentElement.className = 'task__element'
    return false
  }
}
