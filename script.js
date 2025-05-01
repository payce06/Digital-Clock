const clock = document.getElementById('clock');
const greeting = document.getElementById('gretting');

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const secs = now.getSeconds();

    const formatted = [
        hours.toString().padStart(2, '0'),
        mins.toString().padStart(2, '0'),
        secs.toString().padStart(2, '0')
    ].join(':');