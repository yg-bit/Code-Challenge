function gradeFromScore() {
    
    let score = prompt('Please input marks (0 - 100):');

    score = Number(score);

    if (isNaN(score) || score < 0 || score > 100) {
        return "Invalid Score"; 
    }

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

alert(gradeFromScore());
