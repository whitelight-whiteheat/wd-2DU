// Task Management
function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
}

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Modal Management
function createTaskModal() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-container">
            <div class="modal-header">
                <h2>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Add New Task
                </h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-content">
                <form id="taskForm" class="task-form">
                    <div class="form-group">
                        <label for="taskTitle">Task Title</label>
                        <input type="text" id="taskTitle" class="form-control" placeholder="Enter task title" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="taskDescription">Description (Optional)</label>
                        <textarea id="taskDescription" class="form-control" rows="3" placeholder="Enter task description"></textarea>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-col">
                            <div class="form-group">
                                <label for="taskPriority">Priority</label>
                                <select id="taskPriority" class="form-control">
                                    <option value="low">Low</option>
                                    <option value="medium" selected>Medium</option>
                                    <option value="high">High</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-col">
                            <div class="form-group">
                                <label for="taskDueDate">Due Date</label>
                                <input type="date" id="taskDueDate" class="form-control">
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label>Tags</label>
                        <div class="tag-options">
                            <div class="tag-option" data-tag="work">
                                <svg class="tag-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Work
                            </div>
                            <div class="tag-option" data-tag="personal">
                                <svg class="tag-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Personal
                            </div>
                            <div class="tag-option" data-tag="shopping">
                                <svg class="tag-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Shopping
                            </div>
                            <div class="tag-option" data-tag="health">
                                <svg class="tag-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Health
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" onclick="closeTaskModal()">
                    <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Cancel
                </button>
                <button type="submit" form="taskForm" class="btn btn-primary">
                    <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Add Task
                </button>
            </div>
        </div>
    `;
    return modal;
}

function openTaskModal() {
    const modal = createTaskModal();
    document.body.appendChild(modal);
    
    // Set today as minimum date
    const dueDateInput = modal.querySelector('#taskDueDate');
    if (dueDateInput) {
        dueDateInput.min = new Date().toISOString().split('T')[0];
    }
    
    // Add event listeners after a small delay to ensure DOM is ready
    setTimeout(() => {
        const closeButton = modal.querySelector('.modal-close');
        const modalOverlay = modal.querySelector('.modal-overlay');
        const form = modal.querySelector('#taskForm');
        const titleInput = modal.querySelector('#taskTitle');
        
        if (closeButton) {
            closeButton.addEventListener('click', closeTaskModal);
        }
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === e.currentTarget) {
                    closeTaskModal();
                }
            });
        }
        
        if (form) {
            form.addEventListener('submit', handleTaskSubmit);
        }
        
        if (titleInput) {
            titleInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleTaskSubmit(e);
                }
            });
        }
        
        // Make tag buttons clickable
        modal.querySelectorAll('.tag-option').forEach(tag => {
            tag.addEventListener('click', function() {
                this.classList.toggle('selected');
            });
        });
        
        // Show modal with animation
        modal.classList.add('active');
    }, 10);
}

function closeTaskModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

function handleTaskSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    if (!form) return;
    
    // Get form elements with null checks
    const titleInput = form.querySelector('#taskTitle');
    const descriptionInput = form.querySelector('#taskDescription');
    const prioritySelect = form.querySelector('#taskPriority');
    const dueDateInput = form.querySelector('#taskDueDate');
    
    // Validate required fields
    if (!titleInput || !titleInput.value.trim()) {
        alert('Please enter a task title');
        return;
    }
    
    // Get form values with fallbacks
    const title = titleInput.value.trim();
    const description = descriptionInput ? descriptionInput.value.trim() : '';
    const priority = prioritySelect ? prioritySelect.value : 'medium';
    const dueDate = dueDateInput ? dueDateInput.value : '';
    
    // Get selected tags
    const selectedTags = Array.from(form.querySelectorAll('.tag-option.selected'))
        .map(tag => tag.getAttribute('data-tag'))
        .filter(tag => tag); // Filter out any null/undefined tags
    
    // Create new task
    const newTask = {
        title,
        description,
        priority,
        dueDate,
        tags: selectedTags,
        completed: false,
        createdAt: new Date().toISOString()
    };
    
    // Save task
    const tasks = getTasks();
    tasks.push(newTask);
    saveTasks(tasks);
    
    // Close modal
    closeTaskModal();
    
    // Update UI
    if (typeof renderTasks === 'function') {
        renderTasks();
    }
    
    // Update task counts
    if (typeof updateTaskCounts === 'function') {
        updateTaskCounts();
    }
}

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Replace all "Add Task" buttons with modal trigger
    document.querySelectorAll('[onclick*="window.open(\'taskModal.html\'"] ').forEach(button => {
        button.onclick = openTaskModal;
    });
    
    // Prevent default navigation for any task-related links
    document.querySelectorAll('a[href*="taskModal.html"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openTaskModal();
        });
    });
});

// Search Modal Management
window.createSearchModal = function() {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay search-modal-overlay';
    modal.innerHTML = `
        <div class="modal-container">
            <div class="modal-header">
                <h2>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Search Tasks
                </h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-content">
                <div class="form-group">
                    <label for="searchInput">Search Term</label>
                    <input type="text" id="searchInput" class="form-control" placeholder="Enter keywords...">
                </div>
                <div id="searchResults" class="search-results-container">
                    <!-- Search results will be displayed here -->
                </div>
            </div>
            <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" onclick="closeSearchModal()">
                    <svg class="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    Close
                </button>
            </div>
        </div>
    `;
    return modal;
};

window.openSearchModal = function() {
    // Close any existing task modal first
    closeTaskModal(); 

    const modal = createSearchModal();
    document.body.appendChild(modal);
    
    // Add event listeners after a small delay
    setTimeout(() => {
        const closeButton = modal.querySelector('.modal-close');
        const modalOverlay = modal.querySelector('.search-modal-overlay');
        const searchInput = modal.querySelector('#searchInput');
        const searchResultsContainer = modal.querySelector('#searchResults');
        
        if (closeButton) {
            closeButton.addEventListener('click', closeSearchModal);
        }
        
        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === e.currentTarget) {
                    closeSearchModal();
                }
            });
        }
        
        if (searchInput) {
            searchInput.addEventListener('input', handleSearchInput);
            searchInput.focus();
        }

        displaySearchResults('', searchResultsContainer);
        
        modal.classList.add('active');
    }, 10);
};

window.closeSearchModal = function() {
    const modal = document.querySelector('.search-modal-overlay');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
};

window.handleSearchInput = function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const resultsContainer = document.getElementById('searchResults');
    displaySearchResults(searchTerm, resultsContainer);
};

window.displaySearchResults = function(searchTerm, container) {
    if (!container) return;

    const tasks = getTasks();
    
    const filteredTasks = tasks.filter(task => {
        const titleMatch = task.title.toLowerCase().includes(searchTerm);
        const descriptionMatch = task.description && task.description.toLowerCase().includes(searchTerm);
        const tagMatch = task.tags && Array.isArray(task.tags) && task.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return titleMatch || descriptionMatch || tagMatch;
    });

    container.innerHTML = '';

    if (filteredTasks.length === 0) {
        container.innerHTML = `<p class="empty-state-message">No tasks match your search.</p>`;
        return;
    }

    if (typeof renderTask === 'function') {
         filteredTasks.forEach((task, index) => {
             const originalIndex = tasks.findIndex(t => t.createdAt === task.createdAt);
             const taskElement = renderTask(task, originalIndex);
             const checkbox = taskElement.querySelector('.task-checkbox');
             if (checkbox) {
                 checkbox.addEventListener('change', function() {
                     const idx = parseInt(this.getAttribute('data-index'));
                     const allTasks = getTasks();
                     if (allTasks[idx]) {
                         allTasks[idx].completed = this.checked;
                         saveTasks(allTasks);
                         displaySearchResults(searchTerm, container);
                         if (typeof renderTasks === 'function') renderTasks();
                         if (typeof updateTaskCounts === 'function') updateTaskCounts();
                     }
                 });
             }
             container.appendChild(taskElement);
         });
    } else {
        const list = document.createElement('ul');
        filteredTasks.forEach(task => {
            const item = document.createElement('li');
            item.textContent = task.title;
            list.appendChild(item);
        });
        container.appendChild(list);
    }
};