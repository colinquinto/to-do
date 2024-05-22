import { renderProjectTitle } from "./display-projects";
import { renderProjectTasks } from "./display-tasks";
import { format } from "date-fns";

const taskModalFunc = () => {
    const taskModal = document.querySelector(".task-modal");
    const newTaskBtn = document.querySelector(".new-task-button");
    const form = document.querySelector(".task-modal > form");
    const date = document.querySelector(".task-modal > form > input[type=date]");
    const cancelNewTask = document.querySelector("#close");
    const submitTask = document.querySelector("#submit");

    if (newTaskBtn){newTaskBtn.addEventListener("click", () => {
        taskModal.showModal();
        const formatToday = format(new Date(), "yyyy-MM-dd")
        date.setAttribute("min", formatToday)
        date.valueAsDate = new Date();
    })}

    cancelNewTask.addEventListener("click", cancelEvent);
    submitTask.addEventListener("click", submitEvent);

    return {
        taskModal,
        form,
        date
    }
    
};

const submitEvent = (evt) => {
    if (taskModalFunc().form.checkValidity()) {
        evt.preventDefault();
        const projectName = document.querySelector("main > h1");

        const taskArr = [];

        for (let i = 0; i < 3; i++) {
            taskArr.push(taskModalFunc().form.elements[i].value)
        }

        taskArr.push(taskModalFunc().form.querySelector("input[type='radio']:checked").value)
        taskModalFunc().form.reset();
        taskModalFunc().taskModal.close();

        submitToStorage(projectName.textContent, taskArr[0], taskArr[1], taskArr[2], taskArr[3])

    }
}

const submitToStorage = (proj, getTitle, getDesc, getDue, getPrio) => {
    const projObj = {
        title: getTitle.toLowerCase(),
        desc: getDesc,
        due: getDue,
        prio: getPrio.toLowerCase()
    }

    const getProj = JSON.parse(localStorage.getItem(proj))
    getProj.tasks.push(projObj)

    localStorage.setItem(proj, JSON.stringify(getProj))
    const main = document.querySelector("main");
    main.innerHTML="";
    const getProject = JSON.parse(localStorage.getItem(proj));

    const projectTitle = new renderProjectTitle(getProject.title);
    const addTask = new renderProjectTasks(getProject.tasks);

    projectTitle.renderTitle();
    addTask.renderNewTaskButton();
    addTask.renderTasks();
    taskModalFunc();
}

const cancelEvent = (e) => {
    e.preventDefault();
    taskModalFunc().form.reset();
    taskModalFunc().taskModal.close();
}

export { taskModalFunc, submitToStorage };