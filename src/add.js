import {projects, showProjects, notes, noteID} from './show.js';

export const project = function(name){
    return{
        name
    }
}

export const addProjectFunction = function(pName){
    projects.push(project(pName));
    console.log(projects);
    localStorage.setItem('projects',JSON.stringify(projects));
    showProjects();
};
  
export  const addProjectToArray = function(){
    const projectInputName = document.getElementById('projectName').value;
    addProjectFunction(projectInputName);
    document.getElementById('projectName').value = '';
    document.getElementById('addProjectsForm').style.display = 'none';
};

export const submitProject = document.getElementById('submitProject');

const note = function(title,description,dueDate,priority,checklist,project){
    return{
        title, description, dueDate, priority, checklist, project,    
    }
};

export const addNotes = function(title, description, dueDate, priority, checklist, project){
    notes.push(note(title, description, dueDate, priority, checklist, project));
    localStorage.setItem('notes',JSON.stringify(notes));
}

document.getElementById('title').innerText = 'Projects';

export const clearNoteForm = function(){
  document.getElementById('noteName').value = '';
  document.getElementById('noteDesc').value = '';
  document.getElementById('dueDate').value = '';
  let ele = document.getElementsByName('priority');
  for(let i=0; i < ele.length; i++){
       ele[i].checked = false;
  };
}

export const pushNote = function(){
  let title = document.getElementById('noteName').value;
  let desc = document.getElementById('noteDesc').value;
  let date = document.getElementById('dueDate').value;
  let priority = 'high';
  let ele = document.getElementsByName('priority');
  for(let i=0; i < ele.length; i++){
    if(ele[i].checked){
       priority = ele[i].value;
    }
  };
  let check = false;
  let pr  = document.getElementById('partOfProject').value;      //merr emrin e projektit
  let project = projects.find((element) => element.name == pr); //gjen objektin project qe ka ate emer
  console.log(pr);
  console.log(project);
  addNotes(title,desc,date,priority,check,project);            //krijon objektin note me vlerat e dhena
}

export const addNotesForm = document.getElementById('addNotesForm');
export const editButton = document.getElementById('edit');
export const saveEdit = document.getElementById('saveEdit');

export const makeEditable = function (){
  document.getElementById('noteTitle').removeAttribute('readonly');
  document.getElementById('noteDescription').removeAttribute('readonly');
  document.getElementById('deadline').removeAttribute('readonly');
  //document.getElementsByName('showPriority').disabled = false;
  document.getElementById('setHigh').removeAttribute('disabled');
  document.getElementById('setMedium').removeAttribute('disabled');
  document.getElementById('setLow').removeAttribute('disabled');
  const showProject1 = document.getElementById('showProject');
  for (let i=0; i<projects.length; i++){
    if(projects[i].name != showProject1.options[0].text){
      let option = document.createElement("option");
      option.text = projects[i].name;
      showProject1.add(option); 
    }  
}
};

export const readOnly = function () {
  document.getElementById('noteTitle').setAttribute('readonly','readonly');
  document.getElementById('noteDescription').setAttribute('readonly','');
  document.getElementById('deadline').setAttribute('readonly','');
  document.getElementById('setHigh').setAttribute('disabled','');
  document.getElementById('setMedium').setAttribute('disabled','');
  document.getElementById('setLow').setAttribute('disabled','');
};

export const saveEdited = function () {
  let newTitle = document.getElementById('noteTitle').value;
  let newDescription = document.getElementById('noteDescription').value;
  let newDeadline = document.getElementById('deadline').value;
  let p = document.getElementById('showProject').value;
  let newProject = projects.find((element) => element.name == p);
  let check = document.getElementById('checked');
  let newPriority = 'high';
  let ele = document.getElementsByName('showPriority');
  for(let i=0; i < ele.length; i++){
    if(ele[i].checked){
       newPriority = ele[i].value;
    }
  };
  if(check.checked == true){
    check = true;
  }else{
    check = false;
  }
  notes[noteID] = note(newTitle, newDescription, newDeadline, newPriority, check, newProject);
  localStorage.setItem('notes',JSON.stringify(notes));
};