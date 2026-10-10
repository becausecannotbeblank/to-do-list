import "./styles.css";

const themeButton = () => {
    const root = document.documentElement;
    const darkModeButton =  document.getElementById("darkmode");

    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    darkModeButton.innerHTML = `${newTheme}_mode`;
}

function setTheme(){
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;
    themeButton();
}

document.getElementById("switch-theme-button").addEventListener("click", setTheme);