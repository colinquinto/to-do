import './reset.css';
import './common.css';
import './sidebar.css';
import './main-content.css';

import { landingProject } from './landing';
import { sidebarModalFunction, sidebarProjectsEvent } from './sidebar-control';
import { NewProjectFunction } from './add-project';
import { renderProjectsToSidebar } from './projects-to-sidebar';
import { taskModalFunc } from './add-task';

sidebarModalFunction();
if (localStorage.length === 0 || "-Project Sample" in localStorage){
    landingProject();
}


NewProjectFunction();
renderProjectsToSidebar();
sidebarProjectsEvent();
taskModalFunc();

document.querySelector(".projects > :nth-child(1)").click();

// localStorage.clear()
