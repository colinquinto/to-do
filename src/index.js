import './reset.css';
import './common.css';
import './sidebar.css';
import './main-content.css';

import { sidebarModalFunction } from './sidebar-control';
import { NewProjectFunction } from './add-project';
import { landingProject } from './landing';
import { renderProjects } from './display-projects';


sidebarModalFunction();
NewProjectFunction();
landingProject;
renderProjects();

