import {
  getProjectsFromLocalStorage,
  saveProjectLocalStorage
} from '../../data/storage.js'
import { deleteProject } from './deleteProject.js'
import { setActiveProject } from './setActiveProject.js'
import { createProject } from '../../data/project.js'
export function renderProjects () {
  const projectsList = document.querySelector('.projects__list')
  let projects = getProjectsFromLocalStorage() || []
  projectsList.replaceChildren()
  console.log(projects.length)
  if (projects.length === 0) {
    createProject('General')
    projects = getProjectsFromLocalStorage()
  }
  projects.forEach(element => {
    const projectEl = document.createElement('div')
    projectEl.className = 'project__element'
    const projectText = document.createElement('span')
    projectText.innerText = element.projectName
    projectText.className = 'project__text'
    const projectDelete = document.createElement('input')
    projectDelete.type = 'button'
    projectDelete.className = 'project__delete'
    projectDelete.value = 'Delete'
    projectDelete.addEventListener('click', deleteProject)
    projectEl.append(projectText)
    projectEl.append(projectDelete)
    projectsList.appendChild(projectEl)
    let activeProject = projects[0].projectName

    projectEl.addEventListener('click', setActiveProject)
  })
}
