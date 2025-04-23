// Common functionality across pages
document.addEventListener('DOMContentLoaded', function() {
    // Initialize any page-specific functionality
    if (typeof initPage === 'function') {
        initPage();
    }
});

// Task Management
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Date Formatting
function formatDate(dateString) {
    const options = { month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Tag Management
function getTagIcon(tag) {
    const tagIcons = {
        'work': `<svg class="tag-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'personal': `<svg class="tag-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'shopping': `<svg class="tag-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        'health': `<svg class="tag-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
    };
    
    return tagIcons[tag] || `<svg class="tag-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
}

// Task Rendering
function renderTask(task, index) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    
    // Set the priority color
    const priorityClass = `priority-${task.priority || 'medium'}`;
    
    // Create the HTML for tags
    let tagsHTML = '';
    if (task.tags && task.tags.length > 0) {
        let tagList = Array.isArray(task.tags) ? task.tags : task.tags.split(',');
        tagsHTML = tagList.map(tag => 
            `<a href="tags.html?tag=${tag}" class="task-tag">${getTagIcon(tag)}${tag}</a>`
        ).join('');
    }
    
    // Format the due date nicely
    let dueDateHTML = '';
    if (task.dueDate) {
        dueDateHTML = `<a href="calendar.html?date=${task.dueDate}" class="task-detail">
            <svg class="task-detail-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M3 10H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ${formatDate(task.dueDate)}</a>`;
    }
    
    taskItem.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} data-index="${index}">
        <div class="task-content">
            <div class="task-title ${task.completed ? 'task-completed' : ''}">${task.title}</div>
            <div class="task-details">
                <span class="task-priority ${priorityClass}">${task.priority || 'Medium'}</span>
                ${tagsHTML}
                ${dueDateHTML}
            </div>
        </div>
    `;
    
    return taskItem;
}

// Task List Management
function renderTasks(tasks = getTasks(), container = document.getElementById('taskList')) {
    if (!container) return;
    
    container.innerHTML = '';
    
    if (tasks.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <div class="empty-state-icon">📝</div>
            <p class="empty-state-message">No tasks found. Add a new task to get started!</p>
            <a href="#" class="add-task-link" onclick="openTaskModal(); return false;">Add Task</a>
        `;
        container.appendChild(emptyState);
        return;
    }
    
    tasks.forEach((task, index) => {
        const taskItem = renderTask(task, index);
        container.appendChild(taskItem);
    });
    
    // Add event listeners to checkboxes
    container.querySelectorAll('.task-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const index = parseInt(this.getAttribute('data-index'));
            tasks[index].completed = this.checked;
            saveTasks(tasks);
            renderTasks(tasks, container);
        });
    });
}

// Task Count Management
function updateTaskCounts() {
    const tasks = getTasks();
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    
    const totalElement = document.getElementById('totalTasks');
    const completedElement = document.getElementById('completedTasks');
    
    if (totalElement) totalElement.textContent = totalTasks;
    if (completedElement) completedElement.textContent = completedTasks;
} 