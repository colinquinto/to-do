import { renderProjectTitle } from "./display-projects";
import { renderProjectTasks } from "./display-tasks";
import { format } from "date-fns";

const landingProject = () => {
    const sampleProject = {
        title: "-Project Sample",
        tasks: [
            {
                title: "task sample high",
                desc: "Task description",
                due: format(new Date(2025, 0, 1),"MMMM dd, yyyy"),
                prio: "high"
            },
            {
                title: "task sample low",
                desc: "Task description",
                due: format(new Date(2025, 0, 1),"MMMM dd, yyyy"),
                prio: "low"
            }
        ]
    }
    localStorage.setItem("-Project Sample", JSON.stringify(sampleProject));
    const getProject = JSON.parse(localStorage.getItem("-Project Sample"));

    const sampleTitle = new renderProjectTitle(getProject.title);
    const sampleTask = new renderProjectTasks(getProject.tasks);

    sampleTitle.renderTitle();
    sampleTask.renderNewTaskButton();
    sampleTask.renderTasks();
};

export { landingProject };