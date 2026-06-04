// DOM Elements
const modalForm = document.getElementById("modalForm");
const studentForm = document.getElementById("studentForm");
const btnAddStudent = document.getElementById("btnAddStudent");
const btnCloseModal = document.getElementById("btnCloseModal");
const btnCancel = document.getElementById("btnCancel");
const studentTableBody = document.getElementById("studentTableBody");
const alertBox = document.getElementById("alertBox");
const totalStudentsEl = document.getElementById("totalStudents");
const avgGradeEl = document.getElementById("avgGrade");
const modalTitle = document.getElementById("modalTitle");
const btnSave = document.getElementById("btnSave");

// State
let students = [];
let editingIndex = -1;
const STORAGE_KEY = "students_data";

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadStudents();
  renderStudents();
  updateStatistics();
  attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
  btnAddStudent.addEventListener("click", openAddForm);
  btnCloseModal.addEventListener("click", closeModal);
  btnCancel.addEventListener("click", closeModal);
  studentForm.addEventListener("submit", handleFormSubmit);

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
  modalTitle.textContent = "Thêm sinh viên";
  btnSave.textContent = "Thêm";
  modalForm.classList.add("show");
}

// Open Edit Form
function openEditForm(index) {
  editingIndex = index;
  const student = students[index];

  document.getElementById("studentId").value = student.id;
  document.getElementById("studentName").value = student.name;
  document.getElementById("studentBirthday").value = student.birthday;
  document.getElementById("studentClass").value = student.class;
  document.getElementById("studentGrade").value = student.grade;
  document.getElementById("studentEmail").value = student.email;

  modalTitle.textContent = "Sửa thông tin sinh viên";
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
  studentForm.reset();
  editingIndex = -1;
  document.getElementById("studentId").focus();
}

// Handle Form Submit
function handleFormSubmit(e) {
  e.preventDefault();

  const studentData = {
    id: document.getElementById("studentId").value.trim(),
    name: document.getElementById("studentName").value.trim(),
    birthday: document.getElementById("studentBirthday").value,
    class: document.getElementById("studentClass").value,
    grade: parseFloat(document.getElementById("studentGrade").value),
    email: document.getElementById("studentEmail").value.trim(),
  };

  if (editingIndex === -1) {
    // Check if student ID already exists
    if (students.some((s) => s.id === studentData.id)) {
      showAlert("Mã sinh viên này đã tồn tại!", "danger");
      return;
    }
    students.push(studentData);
    showAlert("Thêm sinh viên thành công!", "success");
  } else {
    students[editingIndex] = studentData;
    showAlert("Cập nhật sinh viên thành công!", "success");
  }

  saveStudents();
  renderStudents();
  updateStatistics();
  closeModal();
}

// Delete Student
function deleteStudent(index) {
  const student = students[index];
  if (confirm(`Bạn có chắc chắn muốn xóa sinh viên ${student.name}?`)) {
    students.splice(index, 1);
    saveStudents();
    renderStudents();
    updateStatistics();
    showAlert("Xóa sinh viên thành công!", "success");
  }
}

// Render Students Table
function renderStudents() {
  studentTableBody.innerHTML = "";

  if (students.length === 0) {
    studentTableBody.innerHTML =
      '<tr class="empty-row"><td colspan="8">Chưa có sinh viên nào</td></tr>';
    return;
  }

  students.forEach((student, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${formatDate(student.birthday)}</td>
            <td>${student.class}</td>
            <td>${student.grade.toFixed(2)}</td>
            <td>${student.email}</td>
            <td>
                <div class="action-cell">
                    <button class="btn btn-warning" onclick="openEditForm(${index})">Sửa</button>
                    <button class="btn btn-danger" onclick="deleteStudent(${index})">Xóa</button>
                </div>
            </td>
        `;
    studentTableBody.appendChild(row);
  });
}

// Update Statistics
function updateStatistics() {
  totalStudentsEl.textContent = students.length;

  if (students.length === 0) {
    avgGradeEl.textContent = "0.00";
    return;
  }

  const totalGrade = students.reduce((sum, s) => sum + s.grade, 0);
  const avgGrade = totalGrade / students.length;
  avgGradeEl.textContent = avgGrade.toFixed(2);
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
function saveStudents() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
}

// Load from LocalStorage
function loadStudents() {
  const data = localStorage.getItem(STORAGE_KEY);
  students = data ? JSON.parse(data) : getDefaultStudents();
}

// Default Data
function getDefaultStudents() {
  return [
    {
      id: "SV001",
      name: "Nguyễn Văn A",
      birthday: "2003-05-15",
      class: "CNTT-K66",
      grade: 8.5,
      email: "nguyenvana@example.com",
    },
    {
      id: "SV002",
      name: "Trần Thị B",
      birthday: "2003-08-20",
      class: "CNTT-K66",
      grade: 7.8,
      email: "tranthib@example.com",
    },
  ];
}

// Format Date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("vi-VN");
}
