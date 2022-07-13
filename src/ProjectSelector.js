function addTagger(){
    const buttons = document.querySelectorAll('.buttons')
    buttons.forEach(buttons => buttons.addEventListener('click',(e) =>{
      if (e.target.classList.contains("active")) return;
      tagAsSelected(buttons)
      }))
    }



function tagAsSelected(btn){
    const buttons = document.querySelectorAll('.buttons')
    buttons.forEach((btn) => {
        if (btn !== this) {
          btn.classList.remove("selectedButton");
        }
      });
      btn.classList.add("selectedButton");
}

function selectButtons(){
    const inbox = document.querySelector('.inbox-js')
    tagAsSelected(inbox)
    const inboxName = inbox.textContent
    inbox.addEventListener('click',(e) =>{
            if (e.target.classList.contains("active")) return;
            tagAsSelected(inbox)
            showInbox(inboxName)})
             

  
    // const today = document.querySelector('.today-js')
    // const upcoming = document.querySelector('.upcoming-js')

    addTagger()
}

function showInbox(projectName){
  const container = document.querySelector('.projectName-js')
  container.textContent = projectName
  let task = document.querySelectorAll('[data-task]')
  task.forEach(task => task.setAttribute('style','display: block;'))
}

function showProject(projectName){
  const container = document.querySelector('.projectName-js')
  container.textContent = projectName
  let taskToHide = document.querySelectorAll('[data-task]')
  taskToHide.forEach(task => task.setAttribute('style','display: none;'))
  let taskToShow = document.querySelectorAll(`[data-belongto='${projectName}']`)
  console.log(projectName)
  taskToShow.forEach(taskToShow => taskToShow.setAttribute('style','display: block;'))
}

export default  selectButtons
export {showProject, addTagger}
