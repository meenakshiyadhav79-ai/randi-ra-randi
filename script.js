document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservationForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button');
      const originalText = button.textContent;

      button.textContent = 'Table Reserved!';
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
      }, 2000);
    });
  }
});
