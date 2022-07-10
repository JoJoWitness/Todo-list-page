import {showTaskEditorPopUp, deleteChild} from './ShowPopUp'
import {getEditedTask} from './ElementCreation'
function crossOutTask(e){ 
    if( e.currentTarget.checked === false){
        e.currentTarget.parentElement.parentElement.removeAttribute('style', ' text-decoration: line-through; color: var(--textOn-color);')
        console.log('2')
        
    }
    else if( e.currentTarget.checked === true){
        e.currentTarget.parentElement.parentElement.setAttribute('style', ' text-decoration: line-through; color: var(--textOn-color);')
        console.log('1')
    }
}
function deleteTask(e){ 
    let objectName = e.currentTarget.parentElement.parentElement.parentElement.parentElement.className
    localStorage.removeItem(objectName)
    e.currentTarget.parentElement.parentElement.parentElement.parentElement.remove()
}
    
function getValuesToEdit(e){ 
    let objectName = e.currentTarget.parentElement.parentElement.parentElement.parentElement.className
    let objectToEdit = localStorage.getItem(objectName)
    let parsedObject = JSON.parse(objectToEdit)
    
    let currentName = parsedObject.name
    let currentId = parsedObject.id
    let currentDescription = parsedObject.description
    let currentDate = parsedObject.date 
    
    showTaskEditorPopUp(currentName, currentDescription, currentDate, currentId)

    
}

function editTask(e){ 
    let objectName = e.currentTarget.className
    let objectToEdit = localStorage.getItem(objectName)
    let parsedObject = JSON.parse(objectToEdit)

    
    parsedObject.name = document.querySelector('#taskName').value;
    parsedObject.description = document.querySelector('#taskDescription').value
    parsedObject.date = document.querySelector('#taskDate').value
    parsedObject.priority = document.querySelector('input[name="taskP"]:checked').value;

    localStorage.setItem(`${parsedObject.id}`,JSON.stringify(parsedObject))

    deleteChild()
    deleteTaskAfterEdit(parsedObject.id)
    getEditedTask(parsedObject.name, parsedObject.description, parsedObject.date, parsedObject.priority, parsedObject.id)
}

function deleteTaskAfterEdit(id){
    let editedTask = document.querySelector(`[data-id='${id}']`);
    editedTask.remove();
}

export {crossOutTask, deleteTask, getValuesToEdit, editTask}
