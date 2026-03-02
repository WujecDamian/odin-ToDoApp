//put inside src/index.js
import './style.css'
import { createTask } from './scripts/data/task.js'
import { loadProject } from './scripts/data/project.js'
import './scripts/ui/dom.js'
import { createProject } from './scripts/data/project.js'
import {
  getProjectsFromLocalStorage,
  getTasksFromLocalStorage,
  saveProjectLocalStorage,
  saveTaskLocalStorage
} from './scripts/data/storage.js'
