let input = document.getElementById("taskInput");
let button = document.getElementById("addTaskBtn");
let ul = document.getElementById("taskList");
let error = document.getElementById("errorMsg");
let countText = document.getElementById("doneCount");

let taskList = [];

button.onclick = function() {
  let text = input.value;
  text = text.trim();

  if (text == "") {
    error.innerText = "You must write something!";
    return;
  }

  error.innerText = "";

  let task = {
    name: text,
    done: false
  };

  taskList.push(task);
  show();
  input.value = "";
}

function show() {
  ul.innerHTML = "";
  let done = 0;

  for (let i = 0; i < taskList.length; i++) {
    let t = taskList[i];
    let li = document.createElement("li");
    li.innerText = t.name;

    if (t.done == true) {
      li.className = "done";
      done = done + 1;
    }

    li.onclick = function() {
      if (t.done == false) {
        t.done = true;
      } else {
        t.done = false;
      }
      show();
    }

    ul.appendChild(li);
  }

  countText.innerText = "Completed tasks: " + done;
}
