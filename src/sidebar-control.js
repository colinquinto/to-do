const sidebarModalFunction = () => {
    const getSidebarBtn = document.querySelector(".trigger-sidebar");
    const getDialog = document.querySelector("dialog");

    window.innerWidth < 800 ? getDialog.close() : getDialog.show();

    window.onresize = () => {
        window.innerWidth < 800 ? getDialog.close() : getDialog.show();
    }
    
    getSidebarBtn.addEventListener("click", () => {
        getDialog.open ? getDialog.close() : getDialog.show();
    })
};

export { sidebarModalFunction }