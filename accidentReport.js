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

document.addEventListener('DOMContentLoaded', function() {
    const inputForm = document.getElementById('inputForm');
    
    inputForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get user input
        const completeName = document.getElementById('complete-name').value;
        const residence = document.getElementById('residence').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const blotter = document.getElementById('blotter').value;
        const narrative = document.getElementById('narrative').value;
        const incidentDate = document.getElementById('incident-date').value;
        const incidentPicture = document.getElementById('incident-picture').value;

        // Create an object with user data
        const userData = { completeName, residence, email, phone, blotter, narrative, incidentDate, incidentPicture };

        // Get existing data from localStorage
        const storedData = JSON.parse(localStorage.getItem('userData')) || [];

        // Add new data to the array
        storedData.push(userData);

        // Save the updated data back to localStorage
        localStorage.setItem('userData', JSON.stringify(storedData));

        // Redirect to index.html after submission
        window.location.href = 'userPage.html';
    });
});