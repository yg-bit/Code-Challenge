// Function to get grade from a score
function gradeFromScore() {
    
    // Ask user for marks
    let score = prompt('Please input marks (0 - 100):');

    // Change input to number
    score = Number(score);

    // Check if input is valid
    if (isNaN(score) || score < 0 || score > 100) {
        return "Invalid Score"; 
    }

    // Decide grade based on ranges
    if (score >= 80) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Show result
alert(gradeFromScore());
