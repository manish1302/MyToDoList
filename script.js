let addBtn = document.getElementById("add_btn");

addBtn.addEventListener('click', addTask);

function addTask(e) {
    // as we know that input and button are side by side so they must be siblings, so if we have accses to the button 
    // we will have the access to the sibling also
    let currentbtn = e.currentTarget; // with this when we click on the button e has info about it, so we can acces it by using currentTarget propperty
    let currentinput = currentbtn.previousElementSibling; // we are using previousElementSibling instead of previosSibling becuase it only selects elements even though there is text in between

    let newLi = document.createElement('li');
    // newLi.classList.add("list-group-item");
    newLi.className = "list-group-item d-flex justify-content-between";

    let ourList = document.getElementById('ourList');
    ourList.appendChild(newLi);

    newLi.innerHTML = `
                    <h5 class="flex-grow-1">${currentinput.value}</h5>
                    <button class="btn btn-danger mx-3" onclick="removeTask(this)"> Delete </button>
                    <button class="btn btn-success" onclick = "Done(this)">Done</button>`

    currentinput.value = '';

    newLi.appendChild(deleteButton);
}

function removeTask(currElement) {
    currElement.parentElement.remove();
}

function Done(currElement) {
    if (currElement.textContent == "Undo") {
        currElement.textContent = "done";
        let task = currElement.previousElementSibling.previousElementSibling;
        task.className = "flex-grow-1";
    }
    else {
        let task = currElement.previousElementSibling.previousElementSibling;
        task.classList.add("strike");
        currElement.textContent = "Undo";
    }

}