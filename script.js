// Select DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to create a new task item
function createTaskItem(taskText) {
    // Create list item
    const li = document.createElement('li');
    li.className = 'list-group-item';

    // Create span for task text
    const span = document.createElement('span');
    span.textContent = taskText;
    span.style.cursor = 'pointer';

    // Event listener to toggle completion
    span.addEventListener('click', () => {
        span.classList.toggle('task-completed');
    });

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm btn-hover';
    deleteBtn.textContent = 'Delete';

    // Event listener to delete task
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    // Append span and button to list item
    li.appendChild(span);
    li.appendChild(deleteBtn);

    return li;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        taskList.appendChild(taskItem);
        taskInput.value = '';
        taskInput.focus();
    }
}

// Event listener for Add Task button
addTaskBtn.addEventListener('click', addTask);

// Event listener for Enter key in input field
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
