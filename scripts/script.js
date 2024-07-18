document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.classList.remove('hidden');
});

document.getElementById('close-confirmation').addEventListener('click', function() {
  const confirmationMessage = document.getElementById('confirmation-message');
  confirmationMessage.classList.add('hidden');
});
