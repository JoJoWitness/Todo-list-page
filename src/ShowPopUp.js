import {getProject, getTask} from "./ElementCreation";
import{editTask} from "./EditTask";

function showTaskCreatorPopUp(){
    const container = document.querySelector('#container');
    let TaskCreatorPopUp = document.createRange().createContextualFragment(`
    <div class="justPlaceHolder">
    <div class="formWindow">
        <form>
            <fieldset class="topForm">
                <div class="inputContainer">
                    <label for="taskName">Task:</label>
                    <input type="text" id="taskName" name="taskName" maxlength="100">
                </div>
                <div class="inputContainer">
                    <label for="taskDescription">Description:</label>
                    <input type="text" id="taskDescription" name="taskDescription" maxlength="200">
                </div>
            </fieldset>
            <fieldset class="bottomForm">
                <div class="dateContainer">
                    <label for="taskDate">Date:</label>
                    <input type="date" id="taskDate" name="taskDate">
                </div>
                    <div class="priorityButtons">
                        <div>
                            Task Priority
                        </div>
                        <div>
                            <label class="container rContainer" for="low"> Low
                                <input type="radio" name="taskP" id="low" value="low">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container rContainer" for="medium"> Medium
                                <input type="radio" name="taskP" id="medium" value="medium">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container rContainer" for="high"> High
                                <input type="radio" name="taskP" id="high" value="high">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
            </fieldset>
            <div class="formButtons">
                <button type="button" class="bottomButtons" id="cancel" >Cancel</button>
                <button type="button" class="bottomButtons" id="submit" >Add</button>
            </div>
        </form>
    </div>
    </div>`)

    container.appendChild(TaskCreatorPopUp)

    const cancel = document.querySelector('#cancel'); 
    cancel.addEventListener('click', deleteChild)
    const submit = document.querySelector('#submit'); 
    submit.addEventListener('click', getTask);
}

function showProjectPopUp(){
    const container = document.querySelector('#container');
    let ProjectPopUp = document.createRange().createContextualFragment(`
            <div class="justPlaceHolder">
                <div class="projectWindow">
                   <form>
                       <fieldset>
                            <div class="inputContainer projectForm">
                                <label for="projectName">Project:</label>
                                <input type="text" id="projectName" name="projectName" maxlength="50">
                            </div>
                        </fieldset>
                        <div class="formButtons projectButtons">
                            <button type="button" class="bottomButtons" id="cancel" >Cancel</button>
                            <button type="button" class="bottomButtons" id="submitP" >Add</button>
                        </div>
                   </form> 
                </div>
            </div>
    `)

    container.appendChild(ProjectPopUp);

    const cancel = document.querySelector('#cancel'); 
    cancel.addEventListener('click', deleteChild);
    const submit = document.querySelector('#submitP'); 
    submit.addEventListener('click', getProject);

}

function deleteChild(){
    let justPlaceHolder = document.querySelector('.justPlaceHolder')
    justPlaceHolder.remove()
}


function initializePopUp() {
    const addTask = document.querySelector('.addTask')
    addTask.addEventListener('click', showTaskCreatorPopUp)
    const addProject = document.querySelector('#addProject')
    addProject.addEventListener('click', showProjectPopUp)
}



function showTaskEditorPopUp(currentName, currentDescription, currentDate, currentId){
    const container = document.querySelector('#container');
    let TaskCreatorPopUp = document.createRange().createContextualFragment(`
    <div class="justPlaceHolder">
    <div class="formWindow">
        <form>
            <fieldset class="topForm">
                <div class="inputContainer">
                    <label for="taskName">Task:</label>
                    <input type="text" id="taskName" name="taskName" maxlength="100">
                </div>
                <div class="inputContainer">
                    <label for="taskDescription">Description:</label>
                    <input type="text" id="taskDescription" name="taskDescription" maxlength="200">
                </div>
            </fieldset>
            <fieldset class="bottomForm">
                <div class="dateContainer">
                    <label for="taskDate">Date:</label>
                    <input type="date" id="taskDate" name="taskDate">
                </div>
                    <div class="priorityButtons">
                        <div>
                            Task Priority
                        </div>
                        <div>
                            <label class="container rContainer" for="low"> Low
                                <input type="radio" name="taskP" id="low" value="low">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container rContainer" for="medium"> Medium
                                <input type="radio" name="taskP" id="medium" value="medium">
                                <span class="checkmark"></span>
                            </label>
                            <label class="container rContainer" for="high"> High
                                <input type="radio" name="taskP" id="high" value="high">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </div>
            </fieldset>
            <div class="formButtonsEdit">
                <button type="button" id="cancel" >Cancel</button>
                <button type="button" id="edit">Edit </button>
            </div>
        </form>
    </div>
    </div>`)

    container.appendChild(TaskCreatorPopUp)

    let name = document.querySelector('#taskName')
    let description = document.querySelector('#taskDescription')
    let date = document.querySelector('#taskDate')

    name.value = `${currentName}`
    description.value = `${currentDescription}`
    date.value = `${currentDate}`


    const cancel = document.querySelector('#cancel'); 
    cancel.addEventListener('click', deleteChild)
    const submit = document.querySelector('#edit'); 
    submit.classList.add(currentId)
    submit.addEventListener('click', editTask);
}


export {initializePopUp, deleteChild, showTaskEditorPopUp}