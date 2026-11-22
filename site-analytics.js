(() => {
  'use strict';
  if (location.hostname !== 'victortsolis.github.io') return;

  const measurementId = 'G-G1Q8K9J9FE';
  const preferenceKey = 'victor-analytics-choice';
  const spanish = document.documentElement.lang.startsWith('es');
  const words = spanish ? {
    title: 'Estadísticas del sitio',
    detail: '¿Permites que Google Analytics use cookies para medir las visitas y los clics en los enlaces de contacto y reseñas?',
    more: 'Cómo usa Google los datos', yes: 'Permitir', no: 'Rechazar', settings: 'Preferencias de estadísticas'
  } : {
    title: 'Site analytics',
    detail: 'May Google Analytics use cookies to measure visits and clicks on the contact and review links?',
    more: 'How Google uses data', yes: 'Allow', no: 'Decline', settings: 'Analytics preferences'
  };
  const settings = document.getElementById('analytics-settings');
  if (!settings) return;
  const panel = document.createElement('aside');
  panel.className = 'analytics-choice';
  panel.setAttribute('aria-label', words.title);
  const message = document.createElement('p');
  message.textContent = words.detail + ' ';
  const info = document.createElement('a');
  info.href = 'https://policies.google.com/technologies/partner-sites?hl=' + (spanish ? 'es' : 'en');
  info.textContent = words.more;
  message.append(info);
  panel.append(message);
  const formatting = document.createElement('style');
  formatting.textContent = '.analytics-choice{position:fixed;z-index:20;inset:auto 12px 12px auto;max-width:26rem;width:calc(100% - 24px);box-sizing:border-box;background:#faf8f2;color:#192d3e;border:1px solid #60716a;padding:14px 16px;box-shadow:0 3px 18px #192d3e26;font:normal 15px/1.45 system-ui,sans-serif}.analytics-choice[hidden],#analytics-settings[hidden]{display:none}.analytics-choice p{margin:0 0 10px}.analytics-choice a{color:inherit;text-decoration:underline}.analytics-choice button{background:#fff;color:#192d3e;border:1px solid #53665e;border-radius:3px;margin-right:8px;padding:7px 13px;font:inherit;cursor:pointer}#analytics-settings{background:transparent;color:inherit;border:0;font:inherit;text-decoration:underline;cursor:pointer}';
  document.head.append(formatting);
  document.body.append(panel);
  settings.textContent = words.settings;
  settings.hidden = false;
  let allowed = false;
  let started = false;
  function gtag() { window.dataLayer.push(arguments); }
  function apply(choice) {
    allowed = choice === 'allow';
    window['ga-disable-' + measurementId] = !allowed;
    panel.hidden = choice === 'allow' || choice === 'deny';
    if (!allowed) {
      if (started) gtag('consent', 'update', {analytics_storage: 'denied'});
      if (choice === 'deny') {
        for (const key of document.cookie.split(';').map(pair => pair.trim().split('=')[0])) {
          if (key === '_ga' || key.startsWith('_ga_')) {
            document.cookie = key + '=; Max-Age=0; Path=/';
            document.cookie = key + '=; Max-Age=0; Path=/; Domain=' + location.hostname;
          }
        }
      }
      return;
    }
    if (started) { gtag('consent', 'update', {analytics_storage: 'granted'}); return; }
    started = true;
    window.dataLayer = window.dataLayer || [];
    gtag('consent', 'default', {analytics_storage: 'granted', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied'});
    gtag('js', new Date());
    // Keep the README campaign, and leave unrelated query values out of Analytics.
    const pageLocation = new URL(location.pathname, location.origin);
    const incoming = new URLSearchParams(location.search);
    const readmeLanguage = incoming.get('utm_content');
    if (incoming.get('utm_source') === 'github' && incoming.get('utm_medium') === 'referral' &&
        incoming.get('utm_campaign') === 'readme' && ['en', 'es'].includes(readmeLanguage)) {
      pageLocation.search = new URLSearchParams({
        utm_source: 'github', utm_medium: 'referral', utm_campaign: 'readme', utm_content: readmeLanguage
      }).toString();
    }
    gtag('config', measurementId, {
      allow_google_signals: false, allow_ad_personalization_signals: false,
      page_location: pageLocation.href,
      page_referrer: document.referrer ? new URL(document.referrer).origin : ''
    });
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
    document.head.append(script);
  }
  for (const [value, label] of [['allow', words.yes], ['deny', words.no]]) {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = label;
    button.addEventListener('click', () => {
      try { localStorage.setItem(preferenceKey, value); } catch {}
      apply(value);
      if (openedFromFooter) settings.focus();
    });
    panel.append(button);
  }
  let openedFromFooter = false;
  settings.addEventListener('click', () => {
    openedFromFooter = true;
    panel.hidden = false;
    panel.querySelector('button').focus();
  });
  window.addEventListener('storage', event => { if (event.key === preferenceKey || event.key === null) apply(event.newValue); });
  document.addEventListener('click', event => {
    if (!allowed || !(event.target instanceof Element)) return;
    const link = event.target.closest('a[href]');
    if (!link) return;
    if (link.protocol === 'mailto:') gtag('event', 'contact_click', {contact_method: 'email'});
    else if (link.hostname === 'preply.com') {
      if (link.classList.contains('review-link')) gtag('event', 'review_click');
      else if (link.classList.contains('button')) gtag('event', 'contact_click', {contact_method: 'preply'});
    }
  });
  let choice = null;
  try { choice = localStorage.getItem(preferenceKey); } catch {}
  apply(choice);
})();
