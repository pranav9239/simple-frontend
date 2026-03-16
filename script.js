(function () {
  const el = document.getElementById('status');
  if (!el) return;
  el.textContent = 'App is running. You are viewing the frontend from Minikube.';
})();
