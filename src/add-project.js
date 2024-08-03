
import { createProjectElements } from './projects-to-sidebar';
import { sidebarProjectsEvent } from './sidebar-control';

const NewProjectFunction = () => {
    const addProjectDialog = document.querySelector(".add-project-dialog");
    const newProjectBtn = document.querySelector(".add-project");
    const cancel = document.querySelector(".cancel-project");
    const confirm = document.querySelector(".confirm-project");
    const inputTitle = document.querySelector(".proj-title-input");

    const projectTemplate = {
        title: "",
        tasks: [],
    }

    newProjectBtn.addEventListener("click", () => addProjectDialog.show())

    cancel.addEventListener("click", (e) => {
        addProjectDialog.close();
        inputTitle.value = "";
    })

    confirm.addEventListener("click", (e) => {
        if (inputTitle.value in localStorage) {
            alert("THIS PROJECT ALREADY EXISTS")
        }
        else if (inputTitle.checkValidity()) {
            e.preventDefault();
            projectTemplate.title = inputTitle.value;
            location.reload();
            localStorage.removeItem("-Project Sample")
            localStorage.setItem(inputTitle.value, JSON.stringify(projectTemplate));
            createProjectElements(inputTitle.value);
            inputTitle.value = "";
            sidebarProjectsEvent();
            addProjectDialog.close();
 
        }
  
    })
}

export { NewProjectFunction }