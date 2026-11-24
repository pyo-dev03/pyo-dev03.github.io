// 다크 모드 전환: 선택한 테마를 localStorage에 저장합니다.
(function () {
  var root = document.documentElement;
  var button = document.querySelector('.theme-toggle');
  if (!button) return;

  function currentTheme() {
    if (root.dataset.theme) return root.dataset.theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  button.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
})();

// 인쇄할 때는 접힌 문제 해결 항목을 모두 펼칩니다.
window.addEventListener('beforeprint', function () {
  document.querySelectorAll('.problems details').forEach(function (d) {
    d.dataset.wasOpen = d.open;
    d.open = true;
  });
});
window.addEventListener('afterprint', function () {
  document.querySelectorAll('.problems details').forEach(function (d) {
    d.open = d.dataset.wasOpen === 'true';
  });
});
