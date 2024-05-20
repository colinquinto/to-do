class renderProjectTitle {
  main = document.querySelector("main");

  constructor(project){
      this.project = project;
  }

  renderTitle = () => {
    const projectTitle = document.createElement("h1");
    const taskInitial = document.createElement("h2");
    const newTaskDiv = document.createElement("div");
    const createNewTask = document.createElement("button");

    projectTitle.textContent = this.project;
    taskInitial.textContent = "Tasks";

    newTaskDiv.setAttribute("class", "new-task");
    createNewTask.setAttribute("class", "new-task-button");
    createNewTask.textContent = "Add Task";

    newTaskDiv.append(createNewTask);

    this.main.append(
        projectTitle,
        taskInitial,
        newTaskDiv
    );
  }
}

export { renderProjectTitle }