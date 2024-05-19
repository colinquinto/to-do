import { taskComponents } from "./display-tasks";

const taskModalFunc = () => {
    const taskModal = document.querySelector(".task-modal");
    const newTaskBtn = document.querySelector(".new-task-button");
    const form = document.querySelector(".task-modal > form");
    const cancelNewTask = document.querySelector("#close");
    const submitTask = document.querySelector("#submit");

    if (newTaskBtn){newTaskBtn.addEventListener("click", () => {
        taskModal.showModal();
    })}

    cancelNewTask.addEventListener("click", cancelEvent);
    submitTask.addEventListener("click", submitEvent);

    return {
        taskModal,
        form
    }
    
};

const submitEvent = (evt) => {
    if (taskModalFunc().form.checkValidity()) {
        evt.preventDefault();
        const projectName = document.querySelector("main > h1");
        const projectData = JSON.parse(localStorage.getItem(projectName.textContent))

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
        title: getTitle,
        desc: getDesc,
        due: getDue,
        prio: getPrio
    }

    const getProj = JSON.parse(localStorage.getItem(proj))
    getProj.tasks.push(projObj)

    localStorage.setItem(proj, JSON.stringify(getProj))
    const main = document.querySelector("main");
    main.innerHTML="";
    const getProject = JSON.parse(localStorage.getItem(proj));
    const newProject = new taskComponents(getProject.title, getProject.tasks);
    newProject.renderTitle();
    newProject.renderTasks();
    taskModalFunc();
}

const cancelEvent = (e) => {
    e.preventDefault();
    console.log("Cancelled")
    taskModalFunc().form.reset();
    taskModalFunc().taskModal.close();
}

export { taskModalFunc };