// Function to open the modal
function openModal() {
    document.getElementById('entryModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('entryModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    const modal = document.getElementById('entryModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Navigate to the next step
function nextStep(step) {
    document.querySelectorAll('.form-step').forEach(step => step.style.display = 'none');
    document.getElementById(`step${step}`).style.display = 'block';
}

// Navigate to the previous step
function previousStep(step) {
    document.querySelectorAll('.form-step').forEach(step => step.style.display = 'none');
    document.getElementById(`step${step}`).style.display = 'block';
}

// Form submission handling
document.getElementById('giveawayForm').onsubmit = function (event) {
    event.preventDefault();

    // Collect form data
    const email = document.getElementById('email').value;
    const instagram = document.getElementById('instagram').value;
    const model = document.querySelector('input[name="model"]:checked').value;
    const color = document.querySelector('input[name="color"]:checked').value;
    const storage = document.querySelector('input[name="storage"]:checked').value;

    // Redirect to confirmation page with parameters
    const url = `entry-confirmation.html?email=${encodeURIComponent(email)}&instagram=${encodeURIComponent(instagram)}&model=${encodeURIComponent(model)}&color=${encodeURIComponent(color)}&storage=${encodeURIComponent(storage)}`;
    window.location.href = url;
};


// Set the date we're counting down to
const countDownDate = new Date('2024-09-30T00:00:00');

// Update the count down every 1 second
const countdownFunction = setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');

    // If the count down is over, stop the interval
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
    }
}, 500);

// Count Down
const TARGET_ISO_UTC = "2025-09-21T15:00:00Z";

const targetDate = new Date(TARGET_ISO_UTC);

function updateCountdown() {
    const now = Date.now();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
        ["days", "hours", "minutes", "seconds"].forEach(id =>
            document.getElementById(id).innerText = "00"
        );
        clearInterval(timer);
        return;
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = String(d).padStart(2, "0");
    document.getElementById("hours").innerText = String(h).padStart(2, "0");
    document.getElementById("minutes").innerText = String(m).padStart(2, "0");
    document.getElementById("seconds").innerText = String(s).padStart(2, "0");
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();