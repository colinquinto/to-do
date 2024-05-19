import deleteSvg from './del.svg';
import editSvg from './edit.svg';
import viewSvg from './view.svg';
import { getNewTask } from './add-task';

class taskComponents {
    main = document.querySelector("main");

    constructor(project, task){
        this.project = project;
        this.task = task;
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

    renderTasks = () => {
        if (this.task[0] === ""){
            return
        }
        else {
        for (let tasks of this.task) {
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
            this.main.append(taskContainer)
        }} 
    }
}

export { taskComponents }
