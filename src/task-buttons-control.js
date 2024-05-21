const addEventToTaskButtons = () => {
    const markAsDoneBtns = document.querySelectorAll(".mark-done");
    const viewTask = document.querySelectorAll(".view-task");

    markAsDoneBtns.forEach((button) => {
        button.addEventListener("click", markTaskDone)
    })

    viewTask.forEach((button) => {
        button.addEventListener("click", openViewTaskModal)
    })

}

const markTaskDone = (e) => {
    const projectTitle = document.querySelector("main > h1").textContent
    const parent = e.target.parentElement;
    const taskTitle = parent.querySelector("h3").textContent.toLowerCase();
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

export { addEventToTaskButtons }