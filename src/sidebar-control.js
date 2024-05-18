import { renderTasks } from "./display-tasks";

const sidebarModalFunction = () => {
    const sidebar = document.querySelector(".sidebar");
    const addProjectDialog = document.querySelector(".add-project-dialog");
    const burgerMenu = document.querySelector(".trigger-sidebar");
    const closeBtn = document.querySelector(".close-sidebar");

    // If the initial screen width on page load
    // is less than 900
    // hide the sidebar
    window.innerWidth < 900 ? sidebar.close() : sidebar.show();

    // If the user is resizing the window
    // and it reaches a width of less than 900
    // close the sidebar and add project dialog
    window.onresize = () => {
        if (window.innerWidth < 900) {
            addProjectDialog.close();
            sidebar.close()
        } 
        else { 
            sidebar.show()
        };
    }
    
    burgerMenu.addEventListener("click", () => {
        if (sidebar.open) {
            addProjectDialog.close();
            sidebar.close();
        }
        else {
            sidebar.show();
        }
    })

    closeBtn.addEventListener("click", () => {
        addProjectDialog.close();
        sidebar.close()
    })

};

const sidebarProjectsEvent = () => {
    const projectBtns = document.querySelectorAll(".proj-container>div>button");
    projectBtns.forEach((project) => {
        project.addEventListener("click", (e) => {
           
            const getProject = JSON.parse(localStorage.getItem(e.target.textContent));
            if (e.target.classList.value === "delete") {
               if (confirm("DELETING THIS PROJECT WILL ALSO REMOVE THE TASKS INSIDE IT \n\nPROCEED?")) {
                const parent = e.target.parentElement;
                const itemToDelete = parent.querySelector("button");
                parent.remove();
                localStorage.removeItem(itemToDelete.textContent);
               }
               else {

               }
            }
            else {
                const getProjects = document.querySelectorAll(".projects > button");
                getProjects.forEach((active) => { active.classList.remove("active") })
                e.target.setAttribute("class", "active");
                renderTasks(getProject);
            }
        })
    })
};

export { sidebarModalFunction, sidebarProjectsEvent }