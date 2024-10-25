let taskNames = [];
function addTask() {
    // alert("Button clicked")
    const tasklist = document.getElementById('taskList')
    const taskName = document.getElementById('taskName').value
    const dueDate = document.getElementById('dueDate').value
    const priority = document.getElementById('priority').value
    console.log(priority);


    if (!taskName || !dueDate) {
        alert('Please enter the Task name and due date')
        return
    }

    const task = document.createElement('li')
    task.classList.add(`${priority}-priority`)//OR we can write (priority + '-priority') it will make class name
    task.innerHTML = `
    <span id="edittext" style="border: none;outline: none;background-color: white;">${taskName}  |Due:(${dueDate})</span>
    <button class= "edit" onclick="editTask(this)">edit</button>
    <button class= "delete" onclick="deleteTask(this)">Delete</button>
    `
    tasklist.appendChild(task)

    if (!taskNames.includes(taskName)) {
        taskNames.push(taskName);
    }

    //To reset input fields
    document.getElementById('taskName').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('priority').value = 'low'; // Reset to default

}
const editTask = (button) => {
    const taskItem = button.closest('li');
    const taskContent = taskItem.querySelector('span');
    const isEditing = button.textContent === 'Save';

    if (isEditing) {
        taskContent.contentEditable = false;
        button.textContent = 'Edit';
    } else {
        taskContent.contentEditable = true;
        taskContent.focus();
        button.textContent = 'Save';
    }
}
function validateDueDate() {
    const dueDate = document.getElementById('dueDate').value;
    const today = new Date().toISOString().split('T')[0];//use for current date // Format as YYYY-MM-DD

    if (dueDate < today) {
        alert('Due date cannot be in the past');
        document.getElementById('dueDate').value = ''; // Clear the input
    }
}

const deleteTask = (delet) => {
    // const listItem = button.parentElement;
    // listItem.remove();
    let row = delet.closest('li')//new method
    row.remove()
}
