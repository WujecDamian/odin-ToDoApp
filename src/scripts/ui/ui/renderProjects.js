import {
  getProjectsFromLocalStorage,
  saveProjectLocalStorage
} from '../../data/storage.js'
import deleteSvg from '../../../assets/delete.svg'
import { deleteProject } from './deleteProject.js'
import { setActiveProject } from './setActiveProject.js'
import { createProject } from '../../data/project.js'
export const currentProjectDom = document.querySelector('.current__project')

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
    const projectDelete = document.createElement('button')
    projectDelete.className = 'project__delete'
    const deleteIcon = document.createElement('img')
    deleteIcon.src = deleteSvg
    projectDelete.append(deleteIcon)
    projectDelete.addEventListener('click', deleteProject)
    projectEl.append(projectText)
    projectEl.append(projectDelete)
    projectsList.appendChild(projectEl)
    let activeProject = projects[0].projectName
    currentProjectDom.innerText = activeProject

    projectEl.addEventListener('click', setActiveProject)
  })
}
