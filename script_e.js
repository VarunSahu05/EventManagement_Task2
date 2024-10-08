function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.textContent = taskText

    const removeButton = document.createElement("button");
    removeButton.style.marginLeft = '20px';
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        taskList.removeChild(newTask);
        removeEvent(taskText);
    };

    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);

    taskInput.value = ""; // Clear input


    addEvent(taskText);
}

function addEvent(taskText) {
    const lines = taskText.split("\n");
    const task = lines[0];
    const date = lines[1];

    const eventSchedule = document.querySelector(".event-schedule");
    const newEventTask = document.createElement("div");
    newEventTask.className = "event";
    newEventTask.innerHTML = `
        <h3>${task}</h3>
        <p>Date: ${date}</p>
    `;
    eventSchedule.appendChild(newEventTask);
}

function removeEvent(taskText) {
    const lines = taskText.split("\n");
    const task = lines[0];
    const date = lines[1];
    const eventSchedule = document.querySelector(".event-schedule");
    const eventTasks = eventSchedule.children;
    for (let i = 0; i < eventTasks.length; i++) {
        if (eventTasks[i].querySelector("h3").textContent === task) {
            eventSchedule.removeChild(eventTasks[i]);
            break;
        }
    }
}