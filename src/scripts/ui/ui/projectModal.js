/* modal for project */
export const projectModal = document.createElement('dialog')
projectModal.className = 'project__modal'
const projectForm = document.createElement('form')
projectForm.className = 'project__form'
projectForm.method = 'dialog'
const inputName = document.createElement('input')
inputName.type = 'text'
inputName.className = 'project__name'
const addButton = document.createElement('input')
addButton.type = 'submit'
addButton.value = 'Add'
addButton.className = 'project__button'
/* appends */
projectForm.appendChild(inputName)
projectModal.appendChild(projectForm)
