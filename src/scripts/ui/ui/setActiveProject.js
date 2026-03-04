import { getProjectsFromLocalStorage } from '../../data/storage.js'
import { renderTasks } from './renderTasks.js'
import { currentProjectDom } from './renderProjects.js'
export function setActiveProject (e) {
  let projects = getProjectsFromLocalStorage()
  let activeProject = e.target.innerText
  renderTasks(activeProject)
  currentProjectDom.innerText = activeProject
}
