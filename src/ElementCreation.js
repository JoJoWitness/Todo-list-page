import {deleteChild} from "./ShowPopUp";
import {crossOutTask, deleteTask, getValuesToEdit} from "./EditTask"
import Book from "./images/book.svg"
import Menu from "./images/Menu.svg"
import {addTagger, showProject} from "./ProjectSelector"




function Task(name, description, date, priority, id, belongTo) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.id = id
    this.belongTo = belongTo

    this.createTask = renderTask(name, description, date, priority, id, belongTo)
    }

function renderTask(name, description, date, priority, id, belongTo) {
        const li = document.createElement('li')
        li.className = name;
        li.setAttribute('data-task',id)
        li.setAttribute('data-belongTo',belongTo)
        li.setAttribute('class',id)
     //    const checkmark = document.createRange().createContextualFragment(`
     //         <label class="container" for="task">
     //             <input type="checkbox" name="task" id="task">
     //             <span class="checkmark"></span>
     //         </label>
     //         `)
 
         const label = document.createElement('label');
         label.className= 'container'
         label.setAttribute('for', id)
         const parentDivToDelete = document.createElement('div')
         const input = document.createElement('input');
         input.setAttribute('type', 'checkbox')
         input.setAttribute('name', id)
         input.setAttribute('id', id)
         input.addEventListener('click',crossOutTask)
         const span = document.createElement('span');
         span.className ='checkmark'
 
         const div = document.createElement('div')
         div.setAttribute('class','taskText')
         const p1 = document.createElement('p')
         p1.setAttribute('class','aboutTask')
         p1.textContent = name
         const p2 = document.createElement('p')
         p2.setAttribute('class', 'date')
         p2.textContent = date
 
         const divDd = document.createElement('div');
         divDd.setAttribute('class','dropdown')
         const imgDd = document.createElement('img');
         imgDd.src = Menu;
         const divDdII = document.createElement('div');
         divDdII.setAttribute('class','dropdown-content')
         const aI = document.createElement('a');
         aI.setAttribute('href','#')
         aI.setAttribute('class',id)
         aI.textContent = 'Edit';
         aI.addEventListener('click', getValuesToEdit)
         const aII= document.createElement('a');
         aII.setAttribute('href','#')
         aII.textContent = 'Remove';
         aII.addEventListener('click', deleteTask)
         
 
     //     const dropdown = document.createRange().createContextualFragment(`
     //         <div class="dropdown">
     //             <img src="../src/Menu.svg">
     //             <div class="dropdown-content">
     //                 <a href="#">Edit</a>
     //                 <a href="#">Remove</a>
     //             </div>
     //         </div>
     //          `)
 
     li.append(parentDivToDelete);
     parentDivToDelete.append(label)
     label.append(input)
     label.append(span)
     parentDivToDelete.append(div);
     div.append(p1);
     div.append(p2);
     parentDivToDelete.append(divDd);
     divDd.append(imgDd);
     divDd.append(divDdII);
     divDdII.append(aI)
     divDdII.append(aII)
 return li
}

function getTask(){
        const ol = document.querySelector('.task')
        let name = document.querySelector('#taskName').value
        let id = loadId()
        console.log('pony', id)
        let description = document.querySelector('#taskDescription').value
        let date = document.querySelector('#taskDate').value
        let priority = document.querySelector('input[name="taskP"]:checked').value;
        let belongTo = document.querySelector('.projectName-js').textContent
        const taskElement = new Task(name, description, date, priority, id, belongTo) 

    localStorage.setItem(`${id}`,JSON.stringify(taskElement))
   
   
        ol.prepend(taskElement.createTask)
    
        deleteChild()
        return {ol, taskElement}
    }

                        // <li>
                        //     <img src="../src/book.svg">Planificar Eventos
                        // </li>
                        
function Project(title, id) {
        this.title = title;
        this.id = id
    
        this.createProject = renderProject(title, id)
    }

function renderProject(title, id){

    const li = document.createElement('li');
    li.className = title;
    li.addEventListener('click', (e) => 
    showProject(e.target.textContent))
    li.setAttribute('data-project', id);
    li.classList.add('class', 'buttons')
    const img = document.createElement('img');
    img.src = Book
    const p = document.createElement('p')
    p.textContent = title
            
    li.append(img);
    li.append(p);
  
    return li
}   

function getEditedTask(name, description, date, priority, id, belongTo){
    const ol = document.querySelector('.task')

        ol.prepend(renderTask(name, description, date, priority, id, belongTo))
        return {ol}
    }

function getProject(){
    const ul = document.querySelector('.projectList')
    let title = document.querySelector('#projectName').value
    let id = loadId()
    
    const project = new Project(title,id) 
    
    ul.append(project.createProject)
    addTagger();
    localStorage.setItem(`${id}`,JSON.stringify(project))
   
    deleteChild()
    return {ul}
        }

        
function reloadedTask(parsedObject){
    
    let name = parsedObject.name
    let id = parsedObject.id
    let description = parsedObject.description
    let date = parsedObject.date 
    let priority = parsedObject.priority
    let belongTo = parsedObject.belongTo

    getEditedTask(name, description, date, priority, id, belongTo)
}

function loadProject(parsedObject){
    let title = parsedObject.title
    let id = parsedObject.id

    const ul = document.querySelector('.projectList')
    ul.append(renderProject(title, id))
    return ul
}
       

function loadStorage(){

    for(let i = 1 ; i <= parseInt(localStorage.getItem('id'))+1; i++) {
        console.log(i)
        if(localStorage.getItem(`${i}`) === null){
            console.log('Ryuk')
        }
        else if('name' in JSON.parse(localStorage.getItem(`${i}`))){
        const taskToCall = localStorage.getItem(`${i}`);
        let parsedObject = JSON.parse(taskToCall)
        reloadedTask(parsedObject)
        }
        else if('title' in JSON.parse(localStorage.getItem(`${i}`))){
            const projectToCall = localStorage.getItem(`${i}`);
            let parsedObject = JSON.parse(projectToCall)
            loadProject(parsedObject)       
        }
    }
}

function loadId(){
    let id =""
    if(localStorage.getItem('id') === null){
        id = 1
        localStorage.setItem('id',`${id}`)
    } 
    id = parseInt(localStorage.getItem('id'))+1
    localStorage.setItem('id',`${id}`)
    return id
  
}
      
export default loadStorage 
export {getTask, getProject, getEditedTask}

