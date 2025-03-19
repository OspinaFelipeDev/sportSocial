document.addEventListener("DOMContentLoaded", function () {
    const taskSelect = document.getElementById("task-select");
    const participantSelect = document.getElementById("participant-select");
    const taskList = document.getElementById("tasks-list");
    const assignButton = document.getElementById("assign-task");
    const saveButton = document.querySelector("footer button"); // Botón de "Guardar"
    const selectIcon = document.querySelector(".select-icon"); 
    const taskIcon = document.querySelector(".task-icon");

    // 🔹 Cargar las tareas almacenadas en localStorage al iniciar la página
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem("assignedTasks")) || [];
        taskList.innerHTML = ""; // Limpiar la lista antes de cargar

        savedTasks.forEach(task => {
            const newTask = document.createElement("li");
            newTask.setAttribute("data-participant", task.participant);
            newTask.innerHTML = `${task.text}: ${task.task} 
                <button class="remove-task" data-participant="${task.participant}">❌</button>`;
            taskList.appendChild(newTask);
        });
    }

    // 🔹 Guardar las tareas en localStorage
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll("#tasks-list li").forEach(item => {
            tasks.push({
                participant: item.getAttribute("data-participant"),
                text: item.textContent.replace("❌", "").trim(),
                task: item.textContent.split(":")[1].replace("❌", "").trim()
            });
        });

        localStorage.setItem("assignedTasks", JSON.stringify(tasks));
    }

    // 🔹 Hacer que al hacer clic en la flecha de los selects, se abra la lista
    selectIcon.addEventListener("click", () => participantSelect.focus());
    taskIcon.addEventListener("click", () => taskSelect.focus());

    // 🔹 Evento de asignación de tarea
    assignButton.addEventListener("click", function () {
        const selectedTask = taskSelect.value;
        const selectedParticipant = participantSelect.value;
        const selectedText = participantSelect.options[participantSelect.selectedIndex].text;

        if (!selectedTask || !selectedParticipant) {
            alert("Por favor, selecciona una tarea y un participante.");
            return;
        }

        const existingTask = document.querySelector(`li[data-participant="${selectedParticipant}"]`);

        if (existingTask) {
            if (confirm(`El participante ${selectedText} ya tiene una tarea asignada. ¿Quieres cambiarla?`)) {
                existingTask.innerHTML = `${selectedText}: ${taskSelect.options[taskSelect.selectedIndex].text} 
                    <button class="remove-task" data-participant="${selectedParticipant}">❌</button>`;
            }
        } else {
            const newTask = document.createElement("li");
            newTask.setAttribute("data-participant", selectedParticipant);
            newTask.innerHTML = `${selectedText}: ${taskSelect.options[taskSelect.selectedIndex].text} 
                <button class="remove-task" data-participant="${selectedParticipant}">❌</button>`;
            taskList.appendChild(newTask);
        }

        taskSelect.selectedIndex = 0;
        participantSelect.selectedIndex = 0;

        saveTasks(); // Guardar cambios en localStorage
    });

    // 🔹 Evento para eliminar tareas
    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-task")) {
            e.target.parentElement.remove();
            saveTasks(); // Guardar cambios en localStorage tras eliminar
        }
    });

    // 🔹 Evento para guardar las tareas en localStorage al presionar "Guardar"
    saveButton.addEventListener("click", saveTasks);

    // 🔹 Cargar las tareas guardadas al iniciar la página
    loadTasks();
});
