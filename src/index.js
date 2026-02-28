//put inside src/index.js
import './style.css'
import { createTask } from './scripts/data/task.js'
import './scripts/ui/dom.js'
import { createProject } from './scripts/data/project.js'
import {
  getProjectsFromLocalStorage,
  getTasksFromLocalStorage
} from './scripts/data/storage.js'

addEventListener('DOMContentLoaded', event => {
  createTask('projecttest', 'titletest', 'desctst', 'dueTest')
  createTask('xx', 'dd', 'ss', 'ew')

  console.log(getTasks())
})
