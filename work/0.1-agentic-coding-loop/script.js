/* Agentic Loop Demo - Script */

(function () {
  const btn = document.getElementById('demoBtn');
  const message = document.getElementById('message');

  if (!btn || !message) {
    return;
  }

  btn.addEventListener('click', function () {
    const isHidden = message.classList.contains('hidden');

    if (isHidden) {
      message.classList.remove('hidden');
      btn.textContent = 'Hide Message';
    } else {
      message.classList.add('hidden');
      btn.textContent = 'Show Message';
    }
  });
})();
