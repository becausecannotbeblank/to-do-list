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

// W3schools + altered by ChatGPT: Make the DIV element draggable:
// Make #container draggable

const elmnt = document.getElementById("container");

const rect = elmnt.getBoundingClientRect();

// Initially center the container
elmnt.style.position = "fixed";
elmnt.style.left = `${window.innerWidth / 2}px`;
elmnt.style.top = `${rect.top}px`;
elmnt.style.transform = "translateX(-50%)";

dragElement(elmnt);

function dragElement(elmnt) {

    let startMouseX;
    let startMouseY;
    let startLeft;
    let startTop;

    elmnt.addEventListener("mousedown", dragMouseDown);

    function dragMouseDown(e) {

        // Ignore right-click
        if (e.button !== 0) return;

        const rect = elmnt.getBoundingClientRect();

        startMouseX = e.clientX;
        startMouseY = e.clientY;

        startLeft = rect.left;
        startTop = rect.top;

        // Convert from centered positioning to normal positioning
        elmnt.style.transform = "none";
        elmnt.style.left = `${startLeft}px`;
        elmnt.style.top = `${startTop}px`;

        document.addEventListener("mousemove", elementDrag);
        document.addEventListener("mouseup", closeDragElement);
    }

    function elementDrag(e) {

        e.preventDefault();

        const deltaX = e.clientX - startMouseX;
        const deltaY = e.clientY - startMouseY;

        elmnt.style.left = `${startLeft + deltaX}px`;
        elmnt.style.top = `${startTop + deltaY}px`;
    }

    function closeDragElement() {

        document.removeEventListener("mousemove", elementDrag);
        document.removeEventListener("mouseup", closeDragElement);
    }
}

