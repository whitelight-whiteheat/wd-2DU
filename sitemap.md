# Task Manager Sitemap

```
project.html (Home Page)
├── Navigation
│   ├── Project (active on project.html)
│   ├── Calendar
│   ├── Tags
│   ├── Search Tasks
│   └── Add Task
├── Today's Tasks
│   ├── Task Statistics
│   │   ├── Total Tasks
│   │   └── Completed Tasks
│   ├── Task List
│   └── Empty State (when no tasks)
└── Footer

calendar.html
├── Navigation (same as project.html)
├── Calendar View
│   ├── Month Navigation
│   ├── Calendar Grid
│   │   ├── Day Headers
│   │   └── Day Cells
│   └── Today Highlight
├── Upcoming Events
│   └── Empty State (when no events)
└── Footer

tags.html
├── Navigation (same as project.html)
├── Filter Section
│   └── Filter Buttons (All, Active, Completed)
├── Tags Container
│   ├── Work Tag
│   ├── Personal Tag
│   ├── Shopping Tag
│   └── Health Tag
├── Empty State (when no tasks with selected filters)
└── Footer

taskDisplay.html
├── Success Message
├── Task Title
├── Confirmation Message
└── Redirect Message

searchModal.html (Popup)
├── Search Input
├── Filter Options
│   ├── Priority Filter
│   └── Date Filter
├── Search Results
└── Close Button

taskModal.html (Popup)
├── Task Form
│   ├── Task Title Input
│   ├── Due Date Input
│   ├── Priority Selection
│   ├── Tag Selection
│   └── Description Input
├── Submit Button
└── Close Button
```

## Page Descriptions

1. **project.html**: The home page displaying today's tasks with statistics and a list of tasks.

2. **calendar.html**: A calendar view showing tasks organized by date, with month navigation and upcoming events.

3. **tags.html**: A view for organizing tasks by tags, with filtering options and tag statistics.

4. **taskDisplay.html**: A confirmation page shown after adding a task, displaying a success message and redirecting back to the project page.

5. **searchModal.html**: A popup window for searching tasks with various filter options.

6. **taskModal.html**: A popup window with a form for adding new tasks with various fields.

## Navigation Flow

- Users can navigate between main pages (Project, Calendar, Tags) using the sidebar navigation.
- The "Search Tasks" button opens the searchModal.html in a popup window.
- The "Add Task" button opens the taskModal.html in a popup window.
- After adding a task, users are redirected to taskDisplay.html and then back to project.html with the new task.
