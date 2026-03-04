import {
  getTasksFromLocalStorage,
  saveTaskLocalStorage
} from '../../data/storage.js'
import { renderTasks } from './renderTasks.js'
import { tasks } from '../../data/task.js'
export function deleteTask (e) {
  let Tasks = getTasksFromLocalStorage()
  let TasksList = document.querySelectorAll('.task__element')
  const deleteButtons = document.querySelectorAll('.task__delete')
  TasksList = Array.from(TasksList)
  let indexOfTask = TasksList.indexOf(
    e.target.parentElement.parentElement.parentElement.parentElement
  )

  Tasks.splice(indexOfTask, 1)
  saveTaskLocalStorage(Tasks)
  // Very important – sync the global variable too
  tasks.length = 0 // clear
  tasks.push(...Tasks) // copy new content
  renderTasks()
}
