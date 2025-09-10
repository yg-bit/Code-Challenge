
let speed = prompt("Enter the speed of the car:");
speed = Number(speed);

if (speed <= 70) {
  console.log("Ok");
} else {
  let points = Math.floor((speed - 70) / 5); 
  if (points > 12) {
    console.log("License suspended");
  } else {
    console.log("Points: " + points);
  }
}
