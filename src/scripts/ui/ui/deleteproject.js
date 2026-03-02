import {
  getProjectsFromLocalStorage,
  saveProjectLocalStorage
} from '../../data/storage.js'
import { renderProjects } from './renderProjects.js'
export function deleteProject (e) {
  let projects = getProjectsFromLocalStorage()
  let projectsList = document.querySelectorAll('.project__element')
  const deleteButtons = document.querySelectorAll('.project__delete')
  projectsList = Array.from(projectsList)
  let indexOfProject = projectsList.indexOf(e.target.parentElement)
  if (projects.length > 1) {
    projects.splice(indexOfProject, 1)
    saveProjectLocalStorage(projects)
    renderProjects()
  }
}
