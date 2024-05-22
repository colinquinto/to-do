import { renderProjectTasks } from "./display-tasks";
import { submitToStorage } from "./add-task";
import { format } from "date-fns";

const addEventToTaskButtons = () => {
    const markAsDoneBtns = document.querySelectorAll(".mark-done");
    const viewTask = document.querySelectorAll(".view-task");
    const editTask = document.querySelectorAll(".edit-task");

    markAsDoneBtns.forEach((button) => {
        button.addEventListener("click", completeTaskConfirmation)
    })

    viewTask.forEach((button) => {
        button.addEventListener("click", openViewTaskModal)
    })

    editTask.forEach((button) => {
        button.addEventListener("click", editTaskFunc)
    })
}

const completeTaskConfirmation = (e) => {
    const parent = e.target.parentElement;
    const taskTitle = parent.querySelector("h3").textContent.toLowerCase();

    const completeTaskModal = document.querySelector(".confirm-task-complete")
    const completeTaskTitle = document.querySelector(".confirm-task-complete > h1")
    completeTaskModal.showModal();
    completeTaskTitle.textContent = taskTitle.toUpperCase();

    const cancelComplete = document.querySelector("#cancel-complete");
    cancelComplete.addEventListener("click", () => completeTaskModal.close())

    const confirmComplete = document.querySelector("#confirm-complete");
    confirmComplete.addEventListener("click", taskCompleted)

}

const taskCompleted = (e) => {
    const projectTitle = document.querySelector("main > h1").textContent;
    const completeTaskModal = document.querySelector(".confirm-task-complete")
    const completedTaskTitle = e.target.parentElement.querySelector("h1").textContent.toLowerCase()

    const projectInfo = JSON.parse(localStorage.getItem(projectTitle))
        
    for (let i = 0; i < projectInfo.tasks.length; i++) {
        if (projectInfo.tasks[i].title === completedTaskTitle){
            projectInfo.tasks = projectInfo.tasks.filter(item => item !== projectInfo.tasks[i])
        }
    }
    
    localStorage.setItem(projectTitle, JSON.stringify(projectInfo))

    const updateTask = new renderProjectTasks(projectInfo.tasks)
    
    updateTask.renderTasks();

    completeTaskModal.close();
}

const openViewTaskModal = (e) => {
    const viewTaskModal = document.querySelector(".task-view-mode");
    const taskTitle = document.querySelector(".task-view-mode > h1");
    const taskDesc = document.querySelector(".task-view-mode > :nth-child(2)");
    const taskDue = document.querySelector(".task-view-mode > :nth-child(3)");
    const taskPriority = document.querySelector(".task-view-mode > :nth-child(4)");
    const closeView = document.querySelector(".task-view-mode > button");

    const target = e.currentTarget;
    const targetTitle = target.parentElement.querySelector("h3").textContent;
    const targetDesc = target.parentElement.querySelector(":nth-child(2)").textContent;
    const targetDue = target.parentElement.querySelector(":nth-child(3)").textContent;
    const taregtPrio = target.parentElement.querySelector(":nth-child(4)").textContent;

    taskTitle.textContent = targetTitle;
    taskDesc.textContent = targetDesc.slice(13);
    taskDue.textContent = "This task is due on " + targetDue.slice(10);
    taskPriority.textContent = taregtPrio;

    viewTaskModal.showModal();

    closeView.addEventListener("click", () => viewTaskModal.close())
}

const editTaskFunc = (e) => {
    const editTaskModal = document.querySelector(".edit-task-modal");
    const formatToday = format(new Date(), "yyyy-MM-dd")
    

    const parent = e.currentTarget.parentElement;

    const taskToEdit = parent.querySelector("h3").textContent.toLowerCase();
    const currentTaskDesc = parent.querySelector(":nth-child(2)").textContent.slice(13);
    const currentTaskDue = parent.querySelector(":nth-child(3)").textContent.slice(10);
    const currentTaskPrio = parent.classList.value;

    const cancelEdit = document.querySelector("#edit-close");
    const submitEdit = document.querySelector("#edit-submit");

    const editTaskForm = document.querySelector(".edit-task-modal > form")
    editTaskForm.querySelector("#due").setAttribute("min", formatToday)

    editTaskForm.querySelector("#title").value = taskToEdit.toUpperCase();
    editTaskForm.querySelector("#desc").value = currentTaskDesc;
    editTaskForm.querySelector("#due").value = format(currentTaskDue, "yyyy-MM-dd");
    editTaskForm.querySelector("#"+currentTaskPrio).checked = true;

    editTaskModal.showModal();

    cancelEdit.addEventListener("click", (e) => {
        e.preventDefault
        editTaskForm.reset();
        editTaskModal.close();
    })

    submitEdit.addEventListener("click", confirmTaskEdit)
}

const confirmTaskEdit = (e) => {
    const editTaskModal = document.querySelector(".edit-task-modal");

    e.preventDefault();
    
    editTaskModal.close();
}

export { addEventToTaskButtons }