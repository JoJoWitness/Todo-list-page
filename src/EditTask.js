function crossOutCheckbox(){
    const checkTask= document.querySelector('.checkmark');
    checkTask.addEventListener('click', crossOutTask)
 
}

function crossOutTask(){ 
    const taskText = document.querySelector('.aboutTask')
    const date = document.querySelector('.date')
    let checkTask= document.querySelector('#task').checked;
    if(checkTask === false){
        taskText.setAttribute('style', 'text-decoration: line-through; color: var(--textOn-color);')
        date.setAttribute('style', 'color: var(--textOn-color);')
        console.log('1')
    }
    else if(checkTask === true){
        taskText.removeAttribute('style', 'text-decoration: line-through; color: var(--textOn-color);')
        date.removeAttribute('style', 'color: var(--textOn-color);')
        console.log('2')
    }
}
    

export default crossOutCheckbox