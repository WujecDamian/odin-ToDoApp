import {
  getTasksFromLocalStorage,
  saveTaskLocalStorage
} from '../../data/storage.js'

export const noteModal = document.createElement('dialog')

const noteForm = document.createElement('form')
noteForm.className = 'note__form'
noteForm.method = 'dialog'
const noteText = document.createElement('textarea')
noteText.cols = 50
noteText.rows = 10
noteText.textContent = 'Elo kurwa'
/* appends */
noteForm.append(noteText)
noteModal.append(noteForm)
document.body.appendChild(noteModal)
