// Sample tournament data
const tournaments = [
    { name: "BGMI Grand Tournament", date: "January 2025" },
    { name: "BGMI Winter Cup", date: "February 2025" },
    { name: "BGMI Summer Showdown", date: "March 2025" }
];

// Function to populate tournament list
function loadTournaments() {
    const tournamentList = document.getElementById("tournamentList");
    tournamentList.innerHTML = ""; // Clear the list first
    tournaments.forEach(tournament => {
        const listItem = document.createElement("li");
        listItem.textContent = `${tournament.name} - ${tournament.date}`;
        tournamentList.appendChild(listItem);
    });
}

// Open registration form
function openRegistrationForm() {
    document.getElementById("registrationForm").style.display = "flex";
}

// Close registration form
function closeRegistrationForm() {
    document.getElementById("registrationForm").style.display = "none";
}

// Register for a tournament
function registerTournament(event) {
    event.preventDefault(); // Prevent form submission
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    
    // Display confirmation (for now, just log it to the console)
    console.log(`Registered: ${name}, ${email}`);
    
    // Close the registration form
    closeRegistrationForm();
    
    // Optionally, you can add this data to a backend system (e.g., using an API)
}

// Initial load of tournaments when the page loads
window.onload = loadTournaments;
