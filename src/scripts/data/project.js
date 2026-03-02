/* everything related to project [CRUD] */
import {
  saveProjectLocalStorage,
  getProjectsFromLocalStorage
} from './storage.js'

let projects = getProjectsFromLocalStorage() || []
if (projects.length === 0) {
  createProject('General')
}
export function createProject (projectName) {
  const project = {
    id: crypto.randomUUID(),
    projectName
  }
  projects = [...projects, project]
  saveProjectLocalStorage(projects)
  return project
}
