document.getElementById('add-task').addEventListener('click', function() {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value.trim();

    if (taskText !== "") {
        let taskList = document.getElementById('task-list');

        let newTask = document.createElement('li');
        newTask.textContent = taskText;

        let completeBtn = document.createElement('button');
        completeBtn.textContent = 'Feito';
        completeBtn.classList.add('complete');
        completeBtn.addEventListener('click', function() {
            newTask.style.textDecoration = 'line-through';
        });

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Excluir';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', function() {
            taskList.removeChild(newTask);
        });

        newTask.appendChild(completeBtn);
        newTask.appendChild(deleteBtn);
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
});
