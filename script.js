function toggleStrike(strike, team) {
    strike.classList.toggle("red");

    let redStrikes = document.querySelectorAll(`#${team}-strikes .red`);
    
    // Show loss message if 3 strikes are red, otherwise hide it
    if (redStrikes.length === 3) {
        document.getElementById(`${team}-lost`).style.display = "block";
    } else {
        document.getElementById(`${team}-lost`).style.display = "none";
    }
}