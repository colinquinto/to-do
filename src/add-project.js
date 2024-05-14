const NewProjectFunction = () => {
    const addProjectDialog = document.querySelector(".add-project-dialog");
    const newProjectBtn = document.querySelector(".add-project");
    const cancel = document.querySelector(".cancel-project");
    const inputTitle = document.querySelector(".proj-title-input");

    newProjectBtn.addEventListener("click", () => addProjectDialog.show())

    cancel.addEventListener("click", (e) => {
        addProjectDialog.close();
        inputTitle.value = "";
    })

}

export { NewProjectFunction }