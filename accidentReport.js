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
  const inputForm = document.getElementById('inputForm');

  inputForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get user input
      const completeName = document.getElementById('completeName').value;
      const residence = document.getElementById('residence').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const narrative = document.getElementById('narrative').value;
      const blotter = document.getElementById('blotter').value;
      const incidentDate = document.getElementById('incidentDate').value;
      const incidentPicture = document.getElementById('incidentPicture');

      // Check if a file is selected
      if (incidentPicture.files.length > 0) {
          const photo = URL.createObjectURL(incidentPicture.files[0]);

          // Generate Case No.
          const caseNo = generateCaseNo();

          // Create an object with user data
          const userDataObject = { caseNo, completeName, residence, email, phone, blotter, narrative, incidentDate, photo, status: 'Pending' };

          // Save data to localStorage
          userData(userDataObject);

          // Redirect to user.html
          window.location.href = "userPage.html";
      } else {
          alert("Please upload a photo before submitting.");
      }
  });

  function generateCaseNo() {
      // Retrieve the current case number from localStorage
      let currentCaseNo = parseInt(localStorage.getItem("currentCaseNo")) || 0;

      // Increment the case number for the new entry
      currentCaseNo += 1;

      // Save the updated case number to localStorage
      localStorage.setItem("currentCaseNo", currentCaseNo);

      // Return the generated case number
      return "Case No. " + currentCaseNo;
  }

  // Define the userData function
  function userData(data) {
      // Get existing data from localStorage
      const storedData = JSON.parse(localStorage.getItem('userData')) || [];

      // Add new data to the array
      storedData.push(data);

      // Save the updated data back to localStorage
      localStorage.setItem('userData', JSON.stringify(storedData));
  }
});

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
