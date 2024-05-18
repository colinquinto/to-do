import deleteSvg from './del.svg';
import editSvg from './edit.svg';
import viewSvg from './view.svg';

const renderTasks = (taskPara) => {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const projectTitle = document.createElement("h1");
    const taskInitial = document.createElement("h2");
    const newTaskDiv = document.createElement("div");
    const createNewTask = document.createElement("button");

    projectTitle.textContent = taskPara.title;
    taskInitial.textContent = "Tasks";

    newTaskDiv.setAttribute("class", "new-task")
    createNewTask.textContent = "Add Task";

    newTaskDiv.append(createNewTask);

    main.append(
        projectTitle,
        taskInitial,
        newTaskDiv
    );
    if (taskPara.tasks[0].title === ""){
        return
    }
    else {
        for (let tasks of taskPara.tasks) {
      const taskContainer = document.createElement("div");
      const taskTitle = document.createElement("h3");
      const taskDescription = document.createElement("p");
      const taskDue = document.createElement("p");
      const taskPriority = document.createElement("p");
      const taskDoneBtn = document.createElement("button");
      const taskViewBtn = document.createElement("button");
      const taskEditBtn = document.createElement("button");
      const taskDeleteBtn = document.createElement("button");
      const viewIcon = new Image();
      const editIcon = new Image();
      const deleteIcon = new Image();

        taskTitle.textContent = tasks.title;
        taskDescription.textContent = "Description: " + tasks.desc;
        taskDue.textContent = "Due Date: " + tasks.due;
        taskPriority.textContent = "Priority: " + tasks.prio;
        taskViewBtn.textContent = "View";
        taskEditBtn.textContent = "Edit";
        taskDeleteBtn.textContent = "Delete"
        
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
    }} 
}

export { renderTasks }
