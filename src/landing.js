import { taskComponents } from "./display-tasks";

const landingProject = (() => {
    const sampleProject = {
        title: "-Project Sample",
        tasks: [
            {
                title: "Task sample",
                desc: "Task description",
                due: "01-01-2111",
                prio: "High"
            }
        ]
    }
    localStorage.setItem("-Project Sample", JSON.stringify(sampleProject));
    const getProject = JSON.parse(localStorage.getItem("-Project Sample"));
    const renderSample = new taskComponents(getProject.title, getProject.tasks);
    renderSample.renderTitle();
    renderSample.renderTasks();
})();

export { landingProject };