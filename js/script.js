/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable import/extensions */

import createWrapper from './modules/create-wrapper.js';
import KeySetRuNew from './modules/key-set-ru-new.js';
import KeySetEnNew from './modules/key-set-en-new.js';
import createBtn from './modules/create-btn.js';
import createKb from './create-kb.js';

document.addEventListener('DOMContentLoaded', () => {

  const KEY_SET_RU = KeySetRuNew();
  const KEY_SET_EN = KeySetEnNew();

  const lang = 'en';

  document.body.innerHTML = createWrapper(lang);
  createKb(KEY_SET_RU, '.keyboard__wrapper', createBtn);
  
});
