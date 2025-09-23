// Function to check car speed
function speedDetector() {
    // Ask user for speed
    let speed = prompt('Input car speed');
    speed = Number(speed); // convert to number

    // If speed is 70 or below
    if (speed <= 70) {
        return 'Ok';

    // If speed is between 71 and 129 → give points
    } else if (speed >= 70 && speed < 129) {
        return `Points: ${((speed - 70) / 5)}`;

    // If speed is 130 or more
    } else if (speed >= 130) {
        return 'License suspended';
    }
}

// Show result
alert(speedDetector());
