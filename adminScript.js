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

document.addEventListener('DOMContentLoaded', function () {
  // Load data from localStorage and display on the admin page
  const adminTableBody = document.getElementById('adminTableBody');
  const storedData = JSON.parse(localStorage.getItem('userData')) || [];

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
          <td>
              <select onchange="updateStatus(this.value, '${data.caseNo}')">
                  <option value="Pending" ${data.status === 'Pending' ? 'selected' : ''}>Pending</option>
                  <option value="For Verification" ${data.status === 'For Verification' ? 'selected' : ''}>For Verification</option>
                  <option value="Under Investigation" ${data.status === 'Under Investigation' ? 'selected' : ''}>Under Investigation</option>
                  <option value="For Mediation" ${data.status === 'For Mediation' ? 'selected' : ''}>For Mediation</option>
                  <option value="Resolved" ${data.status === 'Resolved' ? 'selected' : ''}>Resolved</option>
              </select>
          </td>
      `;
      adminTableBody.appendChild(row);
  });

  function updateStatus(newStatus, caseNo) {
      // Retrieve the user data from localStorage
      const userData = JSON.parse(localStorage.getItem(caseNo));

      // Update the status
      userData.status = newStatus;

      // Save the updated data back to localStorage
      localStorage.setItem(caseNo, JSON.stringify(userData));

      // Update userPage.html table
      updateUserTable();
  }

  function updateUserTable() {
      // Load data from localStorage and display on the user page
      const userTableBody = document.getElementById('userTableBody');
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
});

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}
