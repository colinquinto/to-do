const sidebarModalFunction = () => {
    const sidebar = document.querySelector(".sidebar");
    const addProjectDialog = document.querySelector(".add-project-dialog");
    const burgerMenu = document.querySelector(".trigger-sidebar");
    const closeBtn = document.querySelector(".close-sidebar");

    // If the initial screen width on page load
    // is less than 900
    // hide the sidebar
    window.innerWidth < 900 ? sidebar.close() : sidebar.show();

    // If the user is resizing the window
    // and it reaches a width of less than 900
    // close the sidebar and add project dialog
    window.onresize = () => {
        if (window.innerWidth < 900) {
            addProjectDialog.close();
            sidebar.close()
        } 
        else { 
            sidebar.show()
        };
    }
    
    burgerMenu.addEventListener("click", () => {
        if (sidebar.open) {
            addProjectDialog.close();
            sidebar.close();
        }
        else {
            sidebar.show();
        }
    })

    closeBtn.addEventListener("click", () => {
        addProjectDialog.close();
        sidebar.close()
    })

};

export { sidebarModalFunction }