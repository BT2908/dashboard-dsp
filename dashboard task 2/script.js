document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input');
    const taskStatus = document.getElementById('task-status');
    const taskOfficer = document.getElementById('task-officer');
    const taskText = taskInput.value.trim();
    const status = taskStatus.value;
    const officer = taskOfficer.value.trim();

    if (taskText !== '') {
        addTask(taskText, status, officer || "Tidak ada petugas");
        taskInput.value = '';
        taskOfficer.value = ''; // Reset input petugas
    }
});

function addTask(taskText, status, officer) {
    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');

    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const taskStatusSpan = document.createElement('span');
    taskStatusSpan.classList.add('task-status', status.replace(' ', '-'));
    taskStatusSpan.textContent = status;

    const taskOfficerSpan = document.createElement('span');
    taskOfficerSpan.classList.add('task-officer');
    taskOfficerSpan.textContent = `Petugas: ${officer}`;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Selesai';
    completeBtn.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
        if (taskItem.classList.contains('completed')) {
            taskStatusSpan.textContent = 'Done';
            taskStatusSpan.className = 'task-status Done';
        } else {
            taskStatusSpan.textContent = status;
            taskStatusSpan.className = 'task-status ' + status.replace(' ', '-');
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Hapus';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    taskInfo.appendChild(taskSpan);
    taskInfo.appendChild(taskStatusSpan);
    taskInfo.appendChild(taskOfficerSpan); // Tambahkan keterangan petugas
    taskItem.appendChild(taskInfo);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);

    taskList.appendChild(taskItem);
}