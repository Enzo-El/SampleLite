//  Student Name: Iverson Craig Gonzales Guno
//  Student Name: Roy Icaranom Manaog
//  Student Name: Lorenzo Laurel Reyes
//  Class Batch: WD92P (ZetoRo)
//  MP2 Group No.: Group 3 KonohaGakure
//  Schedule: 7:00pm to 10:00pm
//  Instructor: Ma'am Jamie Delina
//  Coordinator: Sir Ben De Leon

// SIDEBAR TOGGLE
let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Load data from localStorage and display on the index page
  const adminTableBody = document.getElementById('adminTableBody');
  const storedData = JSON.parse(localStorage.getItem('userData')) || [];

  storedData.forEach(data => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${data.completeName}</td><td>${data.residence}</td><td>${data.email}</td><td>${data.phone}</td><td>${data.blotter}</td><td>${data.narrative}</td><td>${data.incidentDate}</td><td>${data.incidentPicture}</td>`;
      adminTableBody.appendChild(row);
  });
});
