// Elements
const ackBtn = document.getElementById('ack-btn');
const invitationText = document.getElementById('invitation-text');
const guestForm = document.getElementById('guest-form');
const plusoneSelect = document.getElementById('plusone-select');
const plusoneSection = document.getElementById('plusone-section');
const reReadBtn = document.getElementById('re-read-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');
const form = document.getElementById('rsvp-form');

// Step 1: Acknowledge invitation
ackBtn.addEventListener('click', () => {
  invitationText.classList.add('hidden');
  guestForm.classList.remove('hidden');
});

// Step 2: Show/hide plus-one section
plusoneSelect.addEventListener('change', () => {
  if (plusoneSelect.value === 'yes') {
    plusoneSection.classList.remove('hidden');
  } else {
    plusoneSection.classList.add('hidden');
  }
});

// Step 3: Modal for re-reading
reReadBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});

// Step 4: Form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Optional: send data to n8n webhook here later
  window.location.href = "https://opera-obscene.github.io/Group-website/?success=true";
});
