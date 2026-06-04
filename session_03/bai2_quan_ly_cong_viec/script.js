// DOM Elements
const modalForm = document.getElementById("modalForm");
const taskForm = document.getElementById("taskForm");
const btnAddTask = document.getElementById("btnAddTask");
const btnCloseModal = document.getElementById("btnCloseModal");
const btnCancel = document.getElementById("btnCancel");
const tasksList = document.getElementById("tasksList");
const alertBox = document.getElementById("alertBox");
const totalTasksEl = document.getElementById("totalTasks");
const completedTasksEl = document.getElementById("completedTasks");
const pendingTasksEl = document.getElementById("pendingTasks");
const modalTitle = document.getElementById("modalTitle");
const btnSave = document.getElementById("btnSave");

// State
let tasks = [];
let editingIndex = -1;
const STORAGE_KEY = "tasks_data";

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  renderTasks();
  updateStatistics();
  attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
  btnAddTask.addEventListener("click", openAddForm);
  btnCloseModal.addEventListener("click", closeModal);
  btnCancel.addEventListener("click", closeModal);
  taskForm.addEventListener("submit", handleFormSubmit);

  // Đóng modal khi click bên ngoài
  modalForm.addEventListener("click", (e) => {
    if (e.target === modalForm) {
      closeModal();
    }
  });
}

// Open Add Form
function openAddForm() {
  editingIndex = -1;
  resetForm();
  modalTitle.textContent = "Thêm công việc";
  btnSave.textContent = "Thêm";
  modalForm.classList.add("show");
}

// Open Edit Form
function openEditForm(index) {
  editingIndex = index;
  const task = tasks[index];

  document.getElementById("taskTitle").value = task.title;
  document.getElementById("taskDescription").value = task.description;
  document.getElementById("taskDeadline").value = task.deadline;
  document.getElementById("taskPriority").value = task.priority;

  modalTitle.textContent = "Sửa công việc";
  btnSave.textContent = "Cập nhật";
  modalForm.classList.add("show");
}

// Close Modal
function closeModal() {
  modalForm.classList.remove("show");
  resetForm();
}

// Reset Form
function resetForm() {
  taskForm.reset();
  editingIndex = -1;
  document.getElementById("taskTitle").focus();
}

// Handle Form Submit
function handleFormSubmit(e) {
  e.preventDefault();

  const taskData = {
    title: document.getElementById("taskTitle").value.trim(),
    description: document.getElementById("taskDescription").value.trim(),
    deadline: document.getElementById("taskDeadline").value,
    priority: document.getElementById("taskPriority").value,
    completed: editingIndex !== -1 ? tasks[editingIndex].completed : false,
    createdAt:
      editingIndex !== -1
        ? tasks[editingIndex].createdAt
        : new Date().toISOString(),
  };

  if (editingIndex === -1) {
    tasks.push(taskData);
    showAlert("Thêm công việc thành công!", "success");
  } else {
    tasks[editingIndex] = taskData;
    showAlert("Cập nhật công việc thành công!", "success");
  }

  saveTasks();
  renderTasks();
  updateStatistics();
  closeModal();
}

// Delete Task
function deleteTask(index) {
  const task = tasks[index];
  if (confirm(`Bạn có chắc chắn muốn xóa công việc "${task.title}"?`)) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
    updateStatistics();
    showAlert("Xóa công việc thành công!", "success");
  }
}

// Toggle Task Completion
function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
  renderTasks();
  updateStatistics();
  showAlert(
    tasks[index].completed
      ? "Công việc đã hoàn thành!"
      : "Công việc chưa hoàn thành!",
    "success",
  );
}

// Render Tasks List
function renderTasks() {
  tasksList.innerHTML = "";

  if (tasks.length === 0) {
    tasksList.innerHTML =
      '<div class="empty-state"><p>📭 Chưa có công việc nào. Hãy thêm một công việc!</p></div>';
    return;
  }

  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = `task-card ${task.completed ? "completed" : ""}`;

    const priorityMap = {
      Thấp: "Thấp",
      "Trung bình": "Trung",
      Cao: "Cao",
    };

    card.innerHTML = `
            <div class="checkbox-wrapper">
                <input type="checkbox" ${task.completed ? "checked" : ""} 
                       onchange="toggleTaskCompletion(${index})">
                <div style="flex: 1;">
                    <div class="task-header">
                        <span class="task-title">${escapeHtml(task.title)}</span>
                        <span class="task-priority priority-${priorityMap[task.priority]}">${task.priority}</span>
                    </div>
                    ${task.description ? `<p class="task-description">${escapeHtml(task.description)}</p>` : ""}
                    <div class="task-meta">
                        <span class="task-deadline">📅 ${formatDate(task.deadline)}</span>
                        <span>Tạo: ${formatDateTime(task.createdAt)}</span>
                    </div>
                    <div class="task-actions">
                        <button class="btn btn-warning" onclick="openEditForm(${index})">Sửa</button>
                        <button class="btn btn-danger" onclick="deleteTask(${index})">Xóa</button>
                    </div>
                </div>
            </div>
        `;

    tasksList.appendChild(card);
  });
}

// Update Statistics
function updateStatistics() {
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const pending = total - completed;

  totalTasksEl.textContent = total;
  completedTasksEl.textContent = completed;
  pendingTasksEl.textContent = pending;
}

// Show Alert
function showAlert(message, type = "info") {
  alertBox.textContent = message;
  alertBox.className = `alert-box show ${type}`;
  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
}

// Save to LocalStorage
function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Load from LocalStorage
function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  tasks = data ? JSON.parse(data) : getDefaultTasks();
}

// Default Data
function getDefaultTasks() {
  return [
    {
      title: "Hoàn thành bài tập HTML/CSS",
      description: "Xây dựng trang web theo thiết kế cho trước",
      deadline: getNextDate(3),
      priority: "Cao",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      title: "Học JavaScript DOM",
      description: "Nắm vững cách thao tác DOM và xử lý sự kiện",
      deadline: getNextDate(5),
      priority: "Trung bình",
      completed: false,
      createdAt: new Date().toISOString(),
    },
    {
      title: "Review project cũ",
      description: "Kiểm tra lại các project đã làm trước đó",
      deadline: getNextDate(7),
      priority: "Thấp",
      completed: true,
      createdAt: new Date().toISOString(),
    },
  ];
}

// Format Date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN");
}

// Format DateTime
function formatDateTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// Get Next Date
function getNextDate(days) {
  const date = new Date();
  date.setDate(date.getDate() + days);
  return date.toISOString().split("T")[0];
}

// Escape HTML
function escapeHtml(text) {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
