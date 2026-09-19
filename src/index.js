import "./styles.css";

function setTheme(){
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
}

document.getElementById("switchTheme").addEventListener("click", setTheme);
