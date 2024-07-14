
const clock = document.getElementById("Clock")

function UpdateClock() {
    const now = new Date();
    let hour = now.getHours();
    let AMPM = hour > 12 ? "PM" : "AM";
    hour = hour%12 || 12;
    hour = hour.toString().padStart(2,0);
    let minutes = (now.getMinutes()).toString().padStart(2,0);
    let secound = now.getSeconds().toString().padStart(2,0);
      clock.textContent = `${hour}:${minutes}:${secound} ${AMPM}`
}



setInterval(() => {
    UpdateClock();
    
}, 1000);

