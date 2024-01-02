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
const sidebar = document.getElementById("sidebar");

var userName = localStorage.getItem("name");
document.getElementById("UsersName").textContent =
  capitalizeFirstLetter(userName) + "!";

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Load data from localStorage and display on the index page
  const userTableBody = document.getElementById('userTableBody');

  function updateUserTable() {
      const storedData = JSON.parse(localStorage.getItem('userData')) || [];

      // Clear the existing table rows
      userTableBody.innerHTML = '';

      storedData.forEach(data => {
          const row = document.createElement('tr');
          row.innerHTML = `
              <td>${data.caseNo}</td>
              <td>${data.completeName}</td>
              <td>${data.residence}</td>
              <td>${data.email}</td>
              <td>${data.phone}</td>
              <td>${data.blotter}</td>
              <td>${data.narrative}</td>
              <td>${data.incidentDate}</td>
              <td><img src="${data.photo}" alt="Incident Photo"></td>
              <td>${data.status}</td>`;
          userTableBody.appendChild(row);
      });
  }

  // Call updateUserTable initially
  updateUserTable();

  // Periodically update the user table (you can adjust the interval based on your needs)
  setInterval(updateUserTable, 5000); // Update every 5 seconds (for example)
});

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
