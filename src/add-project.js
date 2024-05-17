
import { createProjectElements } from './display-projects';

const NewProjectFunction = () => {
    const addProjectDialog = document.querySelector(".add-project-dialog");
    const newProjectBtn = document.querySelector(".add-project");
    const cancel = document.querySelector(".cancel-project");
    const confirm = document.querySelector(".confirm-project");
    const inputTitle = document.querySelector(".proj-title-input");

    

    newProjectBtn.addEventListener("click", () => addProjectDialog.show())

    cancel.addEventListener("click", (e) => {
        addProjectDialog.close();
        inputTitle.value = "";
    })

    confirm.addEventListener("click", () => {
        if (inputTitle.value in localStorage) {
            alert("THIS PROJECT ALREADY EXISTS!")
        }
        else {
            localStorage.setItem(inputTitle.value, JSON.stringify({}));
            createProjectElements(inputTitle.value);
            inputTitle.value = "";
        }
    })
}

export { NewProjectFunction }