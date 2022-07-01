function setTheme() {
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
  }
  
document.querySelector('#themeButton').addEventListener('click', setTheme)

function setLightTheme(){
    const root = document.documentElement;
    root.className = 'light';
}

  export default setTheme
  export {setLightTheme}