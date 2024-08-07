import editSvg from './edit.svg';
import viewSvg from './view.svg';
import delSvg from './del.svg';
import { format, formatDistanceToNow } from "date-fns";
import { addEventToTaskButtons } from './task-buttons-control';

class renderProjectTasks {
    taskContainer = document.querySelector(".tasks");
    taskArr = [];

    constructor(task){
        this.task = task;
    }

    sortTaskArrayByDate = (a, b) => {
        if ( a.due < b.due ){
            return -1;
          }
          if ( a.due > b.due ){
            return 1;
          }
          return 0;
    }

    storeTasks = () => {
        this.taskArr.push(this.task)

        // Sort by priority
        // High > Low
        this.taskArr[0].sort( (a, b) => a.prio.localeCompare(b.prio) )
        // Then sort by date
        this.taskArr[0].sort( this.sortTaskArrayByDate );
        
    }

    renderNewTaskButton = () => {
        const main = document.querySelector("main")
        const newTaskDiv = document.createElement("div");
        const createNewTask = document.createElement("button");

        newTaskDiv.setAttribute("class", "new-task");
        createNewTask.setAttribute("class", "new-task-button");
        createNewTask.textContent = "Add Task";

        newTaskDiv.append(createNewTask);
        main.append(newTaskDiv);
    }

    renderTasks = () => {

        if (this.task[0] === ""){
            return
        }

        this.storeTasks();
        this.taskContainer.innerHTML = "";

            for (let tasks of this.taskArr[0]) {

                const taskContainer = document.createElement("div");
                taskContainer.setAttribute("class", tasks.prio.toLowerCase())

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
    
                taskTitle.textContent = tasks.title.toUpperCase();

                taskDescription.textContent = "Description: " + tasks.desc.charAt(0).toUpperCase() + tasks.desc.slice(1);

                taskDue.textContent = "Due Date: " + format(tasks.due, "MMMM dd, yyyy")

                taskPriority.textContent = "Priority: " + tasks.prio.charAt(0).toUpperCase() + tasks.prio.slice(1);

                taskDoneBtn.setAttribute("class", "mark-done");
                
                if (taskContainer.classList.value === "done") {
                    taskDoneBtn.textContent = "UNDO MARK";
                } 
                else {
                    taskDoneBtn.textContent = "MARK AS DONE";
                }
                
        
                taskViewBtn.setAttribute("class", "view-task");
                viewIcon.src = viewSvg;

                taskEditBtn.setAttribute("class", "edit-task");
                editIcon.src = editSvg;

                taskDeleteBtn.setAttribute("class", "delete-task");
                deleteIcon.src = delSvg;
        
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

                this.taskContainer.append(taskContainer)
            }
            addEventToTaskButtons();
    }
}

export { renderProjectTasks }
