import {showProjects, showNotes, projects, noteID, addProjectButton, showProjectForm,
addNoteButton, showNotesForm, closeForm, closeFormButton, onProjectClick, projectNotes,
 noteClick, showNoteDetails, closeProjectForm, closeProjectFormButton, closeNoteDetailsForm, closeNoteDetailsFormButton} from './show.js';
import {addProjectFunction, addNotes, submitProject, addProjectToArray, addNotesForm, pushNote, 
    editButton, makeEditable, clearNoteForm, saveEdit, saveEdited, readOnly} from './add.js';
import {deleteNotes} from './deleteNote.js';

window.onload = showProjects();

showNotes();

addProjectButton.addEventListener('click', showProjectForm);
addNoteButton.addEventListener('click', showNotesForm);
closeFormButton.addEventListener('click', closeForm);
onProjectClick.addEventListener('click',projectNotes);
title.addEventListener('click', showNotes);
noteClick.addEventListener('click', showNoteDetails);
closeProjectFormButton.addEventListener('click', closeProjectForm);
closeNoteDetailsFormButton.addEventListener('click',closeNoteDetailsForm);

deleteNote.addEventListener('click',(event) => {
    event.preventDefault();
    deleteNotes(noteID);
  });

submitProject.addEventListener('click', (event) => {
    event.preventDefault();
    addProjectToArray();
  });

addNotesForm.addEventListener('submit', (event) => {
    event.preventDefault();
    pushNote();
    showNotes();
    clearNoteForm();
  });

editButton.addEventListener('click', (event)=>{
    event.preventDefault();
    makeEditable();
  });

saveEdit.addEventListener('click', (event)=>{
    event.preventDefault();
    saveEdited();
    readOnly();
    showNotes();
  });