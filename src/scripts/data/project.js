/* everything related to project [CRUD] */
import { saveProjectLocalStorage } from './storage.js'

/* create project object factory  */
let projects = []

export function createProject (projectName) {
  const project = {
    id: crypto.randomUUID(),
    projectName
  }
  projects = [...projects, project]
  saveProjectLocalStorage(projects)
  return project
}

export function getProjects () {
  return [...projects]
}
