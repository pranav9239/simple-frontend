(function () {
  var TIPS = [
    'Use kubectl get pods -w to watch pods in real time.',
    'NodePort services expose a port on every node (30000–32767).',
    'minikube service <name> creates a tunnel to access NodePort from your host.',
    'Resource requests help the scheduler place pods; limits prevent noisy neighbors.',
    'Deployments manage ReplicaSets; ReplicaSets manage Pods.',
  ];

  function formatTime(d) {
    return d.toLocaleTimeString('en-US', { hour12: false });
  }

  function updateTime() {
    var el = document.getElementById('live-time');
    if (el) el.textContent = formatTime(new Date());
  }

  function setRandomTip() {
    var el = document.getElementById('random-tip');
    if (!el) return;
    el.textContent = TIPS[Math.floor(Math.random() * TIPS.length)];
  }

  function renderActivity() {
    var now = new Date();
    var items = [
      { time: 0, msg: 'Page loaded at ' + now.toLocaleTimeString() },
      { time: 1, msg: 'Dashboard rendered (client-side)' },
      { time: 2, msg: 'No backend — all dynamic content is in the browser' },
    ];
    var list = document.getElementById('activity-list');
    if (!list) return;
    list.innerHTML = items.map(function (i) { return '<li>' + i.msg + '</li>'; }).join('');
  }

  updateTime();
  setInterval(updateTime, 1000);
  setRandomTip();
  renderActivity();

  var tipBtn = document.getElementById('tip-btn');
  if (tipBtn) tipBtn.addEventListener('click', setRandomTip);
})();
