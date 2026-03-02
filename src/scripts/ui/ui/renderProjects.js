import { getProjectsFromLocalStorage } from '../../data/storage.js'
export function renderProjects () {
  const projectsList = document.querySelector('.projects__list')
  let projects = getProjectsFromLocalStorage()

  projects.forEach(element => {
    const projectEl = document.createElement('p')
    projectEl.className = 'project__element'
    projectEl.innerText = element.projectName
    projectsList.appendChild(projectEl)
  })
}
