
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
    e.currentTarget.parentElement.parentElement.parentElement.remove()
}
    

export {crossOutTask, deleteTask}