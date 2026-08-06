(function () {
  const html = document.documentElement;
  const toggle = document.getElementById('lang-toggle');
  const translatable = document.querySelectorAll('[data-en][data-ar]');

  function applyLang(lang) {
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    translatable.forEach((el) => {
      el.innerHTML = lang === 'ar' ? el.dataset.ar : el.dataset.en;
    });
    localStorage.setItem('toul-lang', lang);
  }

  toggle.addEventListener('click', () => {
    const next = html.lang === 'ar' ? 'en' : 'ar';
    applyLang(next);
  });

  const saved = localStorage.getItem('toul-lang');
  if (saved === 'ar') applyLang('ar');
})();
