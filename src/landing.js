import { renderTasks } from "./display-tasks";

const landingProject = (() => {
    const sampleProject = {
        title: "Project Sample",
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
    localStorage.setItem("Project Sample", JSON.stringify(sampleProject));
    const getProject = JSON.parse(localStorage.getItem("Project Sample"));
    renderTasks(getProject);
})();

export { landingProject };