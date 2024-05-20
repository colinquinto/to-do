import deleteSvg from './del.svg';
import editSvg from './edit.svg';
import viewSvg from './view.svg';
import { compareDesc } from "date-fns";

class renderProjectTasks {
    taskContainer = document.querySelector(".tasks");
    taskArr = [];

    constructor(task){
        this.task = task;
    }

    sortTaskArray = (a, b) => {
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
        this.taskArr[0].sort( this.sortTaskArray );
    }

    renderTasks = () => {

        if (this.task[0] === ""){
            return
        }

        this.storeTasks();
        this.taskContainer.innerHTML = "";

        for (let i = 0; i < this.taskArr[0].length; i++) {
            console.log(this.taskArr[0][i])
        }

            for (let tasks of this.taskArr[0]) {
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
                this.taskContainer.append(taskContainer)
        }
    }
}

export { renderProjectTasks }
