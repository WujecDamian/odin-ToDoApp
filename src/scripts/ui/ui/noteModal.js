import {
  getTasksFromLocalStorage,
  saveTaskLocalStorage
} from '../../data/storage.js'
import { closeNoteModal } from '../ui.js'
import { renderTasks } from './renderTasks.js'

export const noteModal = document.createElement('dialog')
const tasks = getTasksFromLocalStorage() || []
const noteForm = document.createElement('form')
noteForm.className = 'note__form'
noteForm.method = 'dialog'
const noteText = document.createElement('textarea')
noteText.className = 'note__text'
noteText.cols = 50
noteText.rows = 10
const note = document.createElement('p')
note.className = 'note'
const noteClose = document.createElement('input')
noteClose.type = 'button'
noteClose.className = 'note__close'
noteClose.value = 'x'

export function addNote (e) {
  let Tasks = getTasksFromLocalStorage()
  let TasksList = document.querySelectorAll('.task__element')

  let text = ''
  let noteTextArea = document.querySelector('.note__text')

  const noteButtons = document.querySelectorAll('.task__note')
  TasksList = Array.from(TasksList)
  let indexOfTask = TasksList.indexOf(
    e.target.parentElement.parentElement.parentElement
  )
  noteTextArea.addEventListener('input', () => {
    text = noteTextArea.value
  })

  text = 'I am sigma boy'
  noteClose.addEventListener('click', () => {
    Tasks[indexOfTask].notes = text
    saveTaskLocalStorage(Tasks)
    renderTasks()
    closeNoteModal()
  })
}

/* appends */
noteForm.append(noteText, noteClose, note)
noteModal.append(noteForm)
document.body.appendChild(noteModal)
