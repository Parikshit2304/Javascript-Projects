const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");

function addTask() {
    if(inputBox.value == ''){
        alert("you must write something");
    }

    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;  //add
        listContainer.appendChild(li);  //display 

        //create a cancel box beside list items
       let span = document.createElement("span");
       span.innerHTML = "\u00d7"
       li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();  //parentElement is LI
        saveData(); 
    }
},false);

function saveData () {    //to save the data in local storage
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){  //to display the save data
    listContainer.innerHTML = localStorage.getItem("data");
}

    showTask();


