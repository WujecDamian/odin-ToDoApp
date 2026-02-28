//put inside src/index.js
import './style.css'
import { createTask, getTasks } from './scripts/data/task.js'
addEventListener('DOMContentLoaded', event => {
  createTask('projecttest', 'titletest', 'desctst', 'dueTest')
  console.log(getTasks())
})
