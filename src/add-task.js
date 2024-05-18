const getNewTask = () => {
    const newTaskButton = document.querySelector(".new-task-button");
    const taskDialog = document.querySelector(".task-modal");
    const closeTaskDialog = document.querySelector(".task-modal-buttons > #close")

    newTaskButton.addEventListener("click", () => {
        const getTitle = document.querySelector("main > h1");
        const getData = JSON.parse(localStorage.getItem(getTitle.textContent))
        taskDialog.showModal();
    })

    closeTaskDialog.addEventListener("click", () => {
        taskDialog.close();
    })
}

export { getNewTask };