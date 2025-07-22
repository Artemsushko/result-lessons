import './index.css';

const removedFlag = 'cookieConsentRemovedRemoved';
const consentBtn = document.querySelector('.cookie-consent__button');
const cookieConsent = document.querySelector('.cookie-consent');

if (localStorage.getItem(removedFlag) && cookieConsent) {
  cookieConsent.remove();
}

consentBtn.addEventListener('click', removeCookieConsent);
function removeCookieConsent() {
  localStorage.setItem(removedFlag, 'true');
  cookieConsent.remove();
}
