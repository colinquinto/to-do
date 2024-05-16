import deleteSvg from './del.svg';
import editSvg from './edit.svg';
import viewSvg from './view.svg';

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
                desc: "Task description two Task description two Task description two Task description two",
                due: "01-01-2111",
                prio: "High"
            }
        ]
    }

    const main = document.querySelector("main"),
          projectTitle = document.createElement("h1"),
          projectDescription = document.createElement("h2");

    projectTitle.textContent = sampleProject.title;
    projectDescription.textContent = sampleProject.desc;

    main.append(
        projectTitle,
        projectDescription,
    );

    for (let tasks of sampleProject.tasks) {
      const taskContainer = document.createElement("div"),
            taskTitle = document.createElement("h3"),
            taskDescription = document.createElement("p"),
            taskDue = document.createElement("p"),
            taskPriority = document.createElement("p"),
            taskDoneBtn = document.createElement("button"),
            taskViewBtn = document.createElement("button"),
            taskEditBtn = document.createElement("button"),
            taskDeleteBtn = document.createElement("button"),
            viewIcon = new Image(),
            editIcon = new Image(),
            deleteIcon = new Image();

        taskTitle.textContent = tasks.title;
        taskDescription.textContent = "Description: " + tasks.desc;
        taskDue.textContent = "Due Date: " + tasks.due;
        taskPriority.textContent = "Priority: " + tasks.prio;
        
        taskDoneBtn.setAttribute("class", "mark-done");
        taskDoneBtn.textContent = "Mark as Done";

        taskViewBtn.setAttribute("class", "view-task");
        viewIcon.src = viewSvg;
        taskEditBtn.setAttribute("class", "edit-task");
        editIcon.src = editSvg;
        taskDeleteBtn.setAttribute("class", "delete-task");
        deleteIcon.src = deleteSvg;

        taskViewBtn.append(viewIcon);
        taskEditBtn.append(editIcon);
        taskDeleteBtn.append(deleteIcon);

        taskContainer.append(
            taskTitle,
            taskDescription,
            taskDue,
            taskPriority,
            taskDoneBtn,
            taskViewBtn,
            taskEditBtn,
            taskDeleteBtn
        );

        main.append(taskContainer)
    }

})();

export { landingProject };