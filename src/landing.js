const landingProject = (() => {
    const sampleProject = {
        title: "Project Sample",
        desc: "This is a sample project",
        tasks: [
            {
                title: "Task sample",
                desc: "Task description",
                due: "01-01-2111",
                prio: "High"
            },
            {
                title: "Task sample two",
                desc: "Task description two",
                due: "01-01-2111",
                prio: "High"
            }
        ]
    }

    const main = document.querySelector("main");

    const projectTitle = document.createElement("h1");
    const projectDescription = document.createElement("h2");

    projectTitle.textContent = sampleProject.title;
    projectDescription.textContent = sampleProject.desc;

    main.append(
        projectTitle,
        projectDescription,
    );

    for (let tasks of sampleProject.tasks) {
        const taskContainer = document.createElement("div");
        const taskTitle = document.createElement("h3");
        const taskDescription = document.createElement("p");
        const taskDue = document.createElement("p");
        const taskPriority = document.createElement("p");

        taskTitle.textContent = tasks.title;
        taskDescription.textContent = "Description: " + tasks.desc;
        taskDue.textContent = "Due Date: " + tasks.due;
        taskPriority.textContent = "Priority: " + tasks.prio;

        taskContainer.append(
            taskTitle,
            taskDescription,
            taskDue,
            taskPriority
        );

        main.append(taskContainer)
    }

})();

export { landingProject };