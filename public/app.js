var tasks = document.getElementById("tasks");

function add(){
    
    var input = document.getElementById("input");
    var inputValue = input.value;
    if(inputValue.length > 3){
        var li = document.createElement("li");
        var liText = document.createTextNode(inputValue);
        li.appendChild(liText);
        var tasks = document.getElementsByClassName("tasks");
        tasks[0].appendChild(li);
        var editIcon  =  document.createElement("i");
        editIcon.className = "fal fa-edit";
        li.appendChild(editIcon);
        editIcon.setAttribute("onclick", "edit(this)");
        var delIcon  =  document.createElement("i");
        delIcon.className = "fal fa-minus-octagon";
        li.appendChild(delIcon);
        delIcon.setAttribute("onclick", "del(this)");
        li.style.backgroundColor = "#2F4F4F"
        editIcon.style.marginLeft = "10px";
        delIcon.style.marginLeft = "10px";
        editIcon.style.backgroundColor  = "transparent";
        delIcon.style.backgroundColor  = "transparent";
        li.style.marginTop = "4px";
        li.style.marginBottom = "4px";
        li.style.listStyleType = "decimal";
        editIcon.style.color = "yellow";
        delIcon.style.color = "aqua";
        li.style.border = "2px solid black";
        li.style.padding = "8px";
        li.classList.add("animate__animated", "animate__backInUp");
        input.value = "";
        li.style.color = "white";
        
        
                            
    }
    else{
        alert("Please enter correct task"); 
    }
    
   
    

}


function del(e){
    e.parentNode.remove();
    
}
function edit(e){
     var editValue = prompt("Enter edit value", e.parentNode.firstChild.nodeValue);
     e.parentNode.firstChild.nodeValue = editValue;
    
     
}
function delAll(){
    tasks.innerHTML = "";
}