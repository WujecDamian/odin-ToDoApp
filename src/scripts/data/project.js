/* everything related to project [CRUD] */
import {
  saveProjectLocalStorage,
  getProjectsFromLocalStorage
} from './storage.js'
export function loadProject () {
  /* create project object factory  */
  let projects = getProjectsFromLocalStorage() || []
  console.log(projects)
  if (projects.length === 0) {
    const project = {
      id: crypto.randomUUID(),
      projectName: 'General'
    }
    saveProjectLocalStorage(project) // ← tu zapisujesz
  }
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
