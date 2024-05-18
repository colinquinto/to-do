import deleteSvg from './del.svg';

const renderProjectsToSidebar = () => {
    const storeLocalStorageKeys = [];

    for (let i = 0; i < localStorage.length; i++){
        storeLocalStorageKeys.push(localStorage.key(i));
        storeLocalStorageKeys.sort();
    }

    for (let j = 0; j < storeLocalStorageKeys.length; j++){
            createProjectElements(storeLocalStorageKeys[j])
        }
}

const createProjectElements = (project) => {
    const projectContainer = document.querySelector(".proj-container");
    const projectDiv = document.createElement("div");
    const projectName = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const deleteIcon = new Image();

      projectDiv.setAttribute("class", "projects")
      if (project === "Project Sample"){
        projectName.setAttribute("class", "active")
      }
      projectName.textContent = project;
      deleteIcon.src = deleteSvg;
      deleteBtn.setAttribute("class", "delete")
      deleteBtn.append(deleteIcon);

      projectDiv.append(
          projectName,
          deleteBtn
      )
      projectContainer.append(projectDiv)
}

export { renderProjectsToSidebar,createProjectElements }