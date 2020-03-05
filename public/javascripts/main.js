const updateEl = document.getElementById("update");
const currentEl = document.getElementById("current")
const updateBtn = document.querySelector("edit-recipe-btn");

updateBtn.addEventListener("click", showEdit)

function showEdit() {
  if (updateEl.style.display = 'none') {
    currentEl.style.display = "none"
    updateEl.style.display = "block"
  } else {
    updateEl.style.display = "none"
    currentEl.style.display = "block"
  }
}