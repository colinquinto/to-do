import { renderProjectTitle } from "./display-projects";
import { renderProjectTasks } from "./display-tasks";
import { format } from "date-fns";

const landingProject = (() => {
    const sampleProject = {
        title: "-Project Sample",
        tasks: [
            {
                title: "Task sample",
                desc: "Task description",
                due: format(new Date(),"MMMM dd, yyyy"),
                prio: "High"
            }
        ]
    }
    localStorage.setItem("-Project Sample", JSON.stringify(sampleProject));
    const getProject = JSON.parse(localStorage.getItem("-Project Sample"));

    const sampleTitle = new renderProjectTitle(getProject.title);
    const sampleTask = new renderProjectTasks(getProject.tasks);

    sampleTitle.renderTitle();
    sampleTask.renderTasks();
})();

export { landingProject };