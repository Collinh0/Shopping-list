const input = document.getElementById("text")

const add = document.getElementById("add")
const mark = document.getElementById("mark")
const clear = document.getElementById("clear")

add.addEventListener("click", (event) => {
    console.log("Clicked")
});
mark.addEventListener("click", (event) => {
    console.log("Marked")
});
clear.addEventListener("click", (event) => {
    console.log("Cleared")});
const itemArray = []
add.addEventListener('click',(event) => {
    event.preventDefault()
    itemArray.push(input.value)
    console.log(itemArray)
    //input.textContent = ""
})