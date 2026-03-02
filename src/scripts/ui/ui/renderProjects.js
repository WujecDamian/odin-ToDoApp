import { getProjectsFromLocalStorage } from '../../data/storage.js'
export function renderProjects () {
  const projectsList = document.querySelector('.projects__list')
  let projects = getProjectsFromLocalStorage()
  projectsList.replaceChildren()
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
    projectEl.append(projectText)
    projectEl.append(projectDelete)
    projectsList.appendChild(projectEl)
  })
}
