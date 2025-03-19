document.addEventListener("DOMContentLoaded", function () {
    const taskSelect = document.getElementById("task-select");
    const participantSelect = document.getElementById("participant-select");
    const taskList = document.getElementById("tasks-list");
    const assignButton = document.getElementById("assign-task");
    const selectIcon = document.querySelector(".select-icon"); // Ícono de participantes
    const taskIcon = document.querySelector(".task-icon"); // Ícono de tareas

    // 🔹 Hacer que al hacer clic en la flecha de participantes, se abra la lista
    selectIcon.addEventListener("click", function () {
        participantSelect.focus();
        participantSelect.click();
    });

    // 🔹 Hacer que al hacer clic en la flecha de tareas, se abra la lista
    taskIcon.addEventListener("click", function () {
        taskSelect.focus();
        taskSelect.click();
    });

    // 🔹 Evento de asignación de tarea
    assignButton.addEventListener("click", function () {
        const selectedTask = taskSelect.value;
        const selectedParticipant = participantSelect.value;
        const selectedText = participantSelect.options[participantSelect.selectedIndex].text;

        if (!selectedTask || !selectedParticipant) {
            alert("Por favor, selecciona una tarea y un participante.");
            return;
        }

        // Verificar si el participante ya tiene una tarea asignada
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
    });

    // 🔹 Evento para eliminar tareas
    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("remove-task")) {
            e.target.parentElement.remove();
        }
    });
});