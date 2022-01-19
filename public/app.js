const firebaseConfig = {
    apiKey: "AIzaSyAeiUZJZqPnlgJPFnGPfntXLVDJ6YsxWdM",
    authDomain: "todolist-7b7f7.firebaseapp.com",
    databaseURL: "https://todolist-7b7f7-default-rtdb.firebaseio.com",
    projectId: "todolist-7b7f7",
    storageBucket: "todolist-7b7f7.appspot.com",
    messagingSenderId: "65673007824",
    appId: "1:65673007824:web:26cc66765193ec166684d5"
};
const app = firebase.initializeApp(firebaseConfig);
var database = app.database();

var tasks = document.getElementById("tasks");

function add() {

    var input = document.getElementById("input");
    var inputValue = input.value;
    if (inputValue.length > 3) {
        var key = database.ref("/").push().key;
        var todoObj = {
            key: key,
            todo: inputValue
        }
        database.ref("todos").child(key).set(todoObj);

        input.value = "";

    }
    else {
        alert("Please enter correct task");
    }




}
database.ref("todos").on("child_added", (data) => {
    var li = document.createElement("li");
    var liText = document.createTextNode(data.val().todo);
    li.appendChild(liText);
    var tasks = document.getElementsByClassName("tasks");
    tasks[0].appendChild(li);
    var editIcon = document.createElement("i");
    editIcon.className = "fal fa-edit";
    li.appendChild(editIcon);
    editIcon.setAttribute("onclick", "edit(this)");
    editIcon.setAttribute("id", data.val().key)
    var delIcon = document.createElement("i");
    delIcon.className = "fal fa-minus-octagon";
    li.appendChild(delIcon);
    delIcon.setAttribute("onclick", "del(this)");
    delIcon.setAttribute("id", data.val().key)
    li.style.backgroundColor = "#2F4F4F"
    editIcon.style.marginLeft = "10px";
    delIcon.style.marginLeft = "10px";
    editIcon.style.backgroundColor = "transparent";
    delIcon.style.backgroundColor = "transparent";
    li.style.marginTop = "4px";
    li.style.marginBottom = "4px";
    li.style.listStyleType = "decimal";
    editIcon.style.color = "yellow";
    delIcon.style.color = "aqua";
    li.style.border = "2px solid black";
    li.style.padding = "8px";
    li.classList.add("animate__animated", "animate__backInUp");
    li.style.color = "white";
})

function del(e) {
    e.parentNode.remove();
    database.ref("todos").child(e.id).remove()

}
function edit(e) {
    var editValue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = editValue;
    database.ref("todos").child(e.id).update({
        todo: editValue
    })


}
function delAll() {
    tasks.innerHTML = "";
    database.ref("todos").remove();
}