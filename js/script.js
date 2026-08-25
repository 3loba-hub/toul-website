(function () {
  const html = document.documentElement;
  const toggle = document.getElementById('lang-toggle');

  // Both languages are present in the HTML; CSS shows the active one based
  // on html[lang], so switching languages is just an attribute change.
  function applyLang(lang) {
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('toul-lang', lang);
  }

  toggle.addEventListener('click', () => {
    applyLang(html.lang === 'ar' ? 'en' : 'ar');
  });

  const saved = localStorage.getItem('toul-lang');
  if (saved === 'ar') applyLang('ar');
})();
