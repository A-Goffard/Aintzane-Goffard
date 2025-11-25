// JS opcional muy ligero: alternar tema (puedes eliminarlo)
(function(){
  const btn = document.getElementById('themeToggle');
  if(!btn) return;
  const key = 'pref-theme';
  const set = t => { document.documentElement.dataset.theme = t; localStorage.setItem(key,t); };
  btn.addEventListener('click', ()=> set(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
  const saved = localStorage.getItem(key) || (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark':'light');
  set(saved);
})();
