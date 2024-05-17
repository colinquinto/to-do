import deleteSvg from './del.svg';

const renderProjects = () => {
    const storeLocalStorageKeys = [];

    for (let i = 0; i < localStorage.length; i++){
        storeLocalStorageKeys.push(localStorage.key(i));
        storeLocalStorageKeys.sort();
    }

    for (let j = 0; j < storeLocalStorageKeys.length; j++){
            createProjectElements(storeLocalStorageKeys[j])
        } 
}

const createProjectElements = (element) => {
    const projectContainer = document.querySelector(".proj-container");
    const projectDiv = document.createElement("div"),
    projectName = document.createElement("button"),
    deleteBtn = document.createElement("button"),
    deleteIcon = new Image();

      projectName.textContent = element;
      deleteIcon.src = deleteSvg;
      deleteBtn.setAttribute("class", "delete")
      deleteBtn.append(deleteIcon);

      projectDiv.append(
          projectName,
          deleteBtn
      )
      projectContainer.append(projectDiv)
}

export { renderProjects,createProjectElements }