import { taskComponents } from "./display-tasks";
import { taskModalFunc } from "./add-task";

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

    if (sidebar.open) {
        window.addEventListener("click", (e) => {
            if (e.target === sidebar || e.target === burgerMenu) {
                return
            }
            else{
                sidebar.close();
            }
        })
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
    const projectBtns = document.querySelectorAll(".proj-container > div > button");
    projectBtns.forEach((project) => {
        project.addEventListener("click", (e) => {
            e.preventDefault();
            const main = document.querySelector("main")
            const deleteConfirm = document.querySelector(".confirm-delete");

            if (e.target.classList.value === "delete") {
                const parent = e.target.parentElement;
                const itemToDelete = parent.querySelector("button");
                if (itemToDelete.textContent === "-Project Sample") {
                    return
                }
                else if (deleteConfirm) {
                    const getProjectName = document.querySelector(".confirm-delete > h1")
                    getProjectName.textContent = itemToDelete.textContent;
                    deleteConfirm.showModal();

                    const cancelDelete = document.querySelector(".confirm-delete > #cancel");
                    cancelDelete.addEventListener("click", () => deleteConfirm.close())

                    const confirmDelete = document.querySelector(".confirm-delete > #confirm");
                    confirmDelete.addEventListener("click", () => {
                        parent.remove();
                        localStorage.removeItem(itemToDelete.textContent)
                        deleteConfirm.close();
                        location.reload();
                    })
                }
            }
            else {
                const getProjects = document.querySelectorAll(".projects > button");
                getProjects.forEach((active) => { 
                    active.classList.remove("active")
                    if (active.style.visibility === "visible") {
                        active.style.visibility = "hidden"
                    }
                })
                const showDeleteOnActive = e.target.parentElement.querySelector(".delete");
                e.target.setAttribute("class", "active");
                showDeleteOnActive.style.visibility = "visible";
                
                const getProject = JSON.parse(localStorage.getItem(e.target.textContent));
                main.innerHTML = "";
                const newProject = new taskComponents(getProject.title, getProject.tasks);
                newProject.renderTitle();
                newProject.renderTasks();
            }
            taskModalFunc();
        })
    })
};

export { sidebarModalFunction, sidebarProjectsEvent }