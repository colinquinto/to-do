class renderProjectTitle {
  main = document.querySelector("main");

  constructor(project){
      this.project = project;
  }

  renderTitle = () => {
    const projectTitle = document.createElement("h1");
    const taskInitial = document.createElement("h2");

    projectTitle.textContent = this.project;
    taskInitial.textContent = "Tasks";

    this.main.append(
        projectTitle,
        taskInitial,
    );
  }
}

export { renderProjectTitle }