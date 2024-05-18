import './reset.css';
import './common.css';
import './sidebar.css';
import './main-content.css';

import { sidebarModalFunction, sidebarProjectsEvent } from './sidebar-control';
import { NewProjectFunction } from './add-project';
import { landingProject } from './landing';
import { renderProjectsToSidebar } from './display-projects';

sidebarModalFunction();
NewProjectFunction();
renderProjectsToSidebar();
sidebarProjectsEvent();
landingProject;

// localStorage.clear()