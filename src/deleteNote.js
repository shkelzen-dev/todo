import { notes, showNotes } from "./show.js";

export const deleteNotes = function(idOfNote){
  notes.splice(idOfNote, 1);
  showNotes();
};

export const deleteNote = document.getElementById('deleteNote');