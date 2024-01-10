export let projects = [];

export const showProjects = function(){
  let pr1 = JSON.parse(localStorage.getItem('projects'));
  if(pr1 == null){
    projects = [];
  }else{
    projects = pr1;
  }
  document.getElementById('projects').innerText = '';
   
    for(let i=0; i<projects.length; i++){
      const newDiv = document.createElement('button');
      newDiv.setAttribute('class','projectDiv');
      newDiv.setAttribute('id', i);
      newDiv.innerText = projects[i].name;
      const sideBar = document.getElementById('projects');
      sideBar.appendChild(newDiv);
    }
   }


export let notes = [];

export const showNotes = function(){
  document.getElementById('projectContent').innerText = '';
  document.getElementById('noteDetails').style.display = 'none';
  document.getElementById('addNotesForm').style.display = 'none';
  document.getElementById('noteDetails').style.display = 'none';
  let notes1 = JSON.parse(localStorage.getItem('notes'));
  if(notes1 == null ){
    notes = [];
  }else{
    notes = notes1;
  }
  for(let i=0; i<notes.length; i++){
    const newContainerDiv = document.createElement('button');
    newContainerDiv.setAttribute('class', 'notesDiv');
    newContainerDiv.setAttribute('id', i);
    notes[i].getNameDescription = function(){
        return this.title + '\n' + 'Deadline: ' + this.dueDate;   
    }
    newContainerDiv.innerText = notes[i].getNameDescription();
    
    document.getElementById('projectContent').appendChild(newContainerDiv);
    newContainerDiv.style.margin = '5px';
    newContainerDiv.style.borderRadius = '7px'
    if(notes[i].checklist == true){
      //newContainerDiv.classList.add('done');
      newContainerDiv.style.border = '1px solid black';
      newContainerDiv.style.color = '#B2BEB5';
      newContainerDiv.style.textDecoration = 'line-through';
    }else{
    if(notes[i].priority == 'Low'){
      newContainerDiv.style.border = '3px solid blue';
    }
    else if(notes[i].priority == 'Medium'){
      newContainerDiv.style.border = '3px solid yellow';
    }
    else{
      newContainerDiv.style.border = '3px solid red'
    }
   }
  }
};

export const onProjectClick = document.getElementById('projects');
export const projectNotes = function (e) {
  document.getElementById('projectContent').innerText = '';
  for(let i=0;i<notes.length;i++){
  if(notes[i].project.name == e.target.innerText ){
    const newContainerDiv = document.createElement('button');
    newContainerDiv.setAttribute('class', 'notesDiv');
    newContainerDiv.setAttribute('id', i);
    newContainerDiv.innerText = notes[i].getNameDescription();
    document.getElementById('projectContent').appendChild(newContainerDiv);
    newContainerDiv.style.margin = '5px';
    newContainerDiv.style.borderRadius = '7px'
    if(notes[i].checklist == true){
      //newContainerDiv.classList.add('done');
      newContainerDiv.style.border = '1px solid black';
      newContainerDiv.style.color = '#B2BEB5';
      newContainerDiv.style.textDecoration = 'line-through';
    }else{
    if(notes[i].priority == 'Low'){
      newContainerDiv.style.border = '3px solid blue';
    }
    else if(notes[i].priority == 'Medium'){
      newContainerDiv.style.border = '3px solid yellow';
    }
    else{
      newContainerDiv.style.border = '3px solid red'
    }
   }
  }
 }
};

export const addProjectButton = document.getElementById('addProject');
export const showProjectForm = function () {
  document.getElementById('addProjectsForm').style.display = 'block';
  document.getElementById('projectName').focus();
};

export const addNoteButton = document.getElementById('addNoteButton');
export const showNotesForm = function () {
  document.getElementById('addNotesForm').style.display = 'block';
  document.getElementById('noteName').focus();
  const partOfProject = document.getElementById('partOfProject');
  for(let i=partOfProject.options.length-1; i>=0; i--){
    partOfProject.remove(i);
  }
  for (let i=0; i<projects.length; i++){
    let op = document.createElement("option");
    op.text = projects[i].name;
    partOfProject.add(op);
  }
};

export const closeFormButton = document.getElementById('closeForm');
export const closeForm = function () {
  document.getElementById('addNotesForm').style.display = 'none';
};

export const title = document.getElementById('title');
export let noteID = '';

export const details = function(id){
  document.getElementById('noteTitle').setAttribute('readonly','readonly');
  document.getElementById('noteDescription').setAttribute('readonly','');
  document.getElementById('deadline').setAttribute('readonly','');
  document.getElementById('setHigh').setAttribute('disabled','');
  document.getElementById('setMedium').setAttribute('disabled','');
  document.getElementById('setLow').setAttribute('disabled','');
  document.getElementById('noteTitle').value = notes[id].title;
  document.getElementById('noteDescription').value = notes[id].description;
  document.getElementById('deadline').value = notes[id].dueDate;
  
  // document.getElementById('bProject').value = notes[id].project.name;
  const showProject = document.getElementById('showProject');
  // showProject.remove(showProject[0]);
  for(let i=showProject.options.length-1; i>=0; i--){
    showProject.remove(i);
  }
  let opt = document.createElement("option");
  opt.text = notes[id].project.name;
  showProject.add(opt);

  //document.getElementById('priority').value = notes[id].priority;
  let ele = document.getElementsByName('showPriority');
  for(let i = 0; i<ele.length; i++){
    if(notes[id].priority == ele[i].value){
      ele[i].checked = true;
    }
  }
  if(notes[id].checklist){
    document.getElementById('checked').checked = true;
  }else{
    document.getElementById('checked').checked = false;
  }
};

export const noteClick = document.getElementById('projectContent');
export const showNoteDetails = function (e) {
  document.getElementById('noteDetails').style.display = 'block';
  details(e.target.id);
  noteID = e.target.id;
};

export const closeProjectFormButton = document.getElementById('closeProjectForm');
export const closeProjectForm = function(e){
  e.preventDefault();
  document.getElementById('addProjectsForm').style.display = 'none';
}

export const closeNoteDetailsFormButton = document.getElementById('closeNoteDetailsForm');
export const closeNoteDetailsForm = function(e){
  e.preventDefault();
  document.getElementById('noteDetails').style.display = 'none';
}