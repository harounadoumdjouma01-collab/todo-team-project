const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskLabel = document.createElement('span');
  taskLabel.textContent = taskText;
  taskLabel.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.textContent = 'Supprimer';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskLabel);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  taskInput.value = '';
  taskInput.focus();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    addTask();
  }
});
