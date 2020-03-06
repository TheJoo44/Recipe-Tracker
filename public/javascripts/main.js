if (document.querySelector(".edit-btn")) {const updateBtn = document.querySelector(".edit-btn");
console.log('UPDATE BUTTON', updateBtn)
updateBtn.addEventListener("click", showEdit)
};

function showEdit(evt) {
    evt.preventDefault()
    console.log('SHOW HIDE')
    const updateEl = document.getElementById("update");
    const currentEl = document.getElementById("current");
    console.log(updateEl, currentEl);
    currentEl.style.display = "none"
    updateEl.style.display = "block"
}