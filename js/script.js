/* eslint-disable linebreak-style */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable padded-blocks */
/* eslint-disable no-multiple-empty-lines */
import KeySetEng from './modules/key-set-en.js';
import KeySetRu from './modules/key-set-ru.js';
import toCreateBtn from './modules/to-create-btn.js';
import addActiveClassToBtn from './modules/add-active-class-to-btn.js';
import toCreateKeyboardWrapper from './modules/to-create-kb-wrapper.js';
import toCreateKeyboard from './modules/to-create-kb.js';
import checkBtn from './modules/check-btn.js';

window.addEventListener('DOMContentLoaded', () => {


  /* page layout */

  const KEY_SET_EN = KeySetEng();
  const KEY_SET_RU = KeySetRu();
  let lang; let
    keySet;

  let text = '';
  const carriage = '<span class="blink">|</span>';

  let shiftLeftStatus = false;
  let shiftRightStatus = false;
  let capsStatus = false;

  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    keySet = lang === 'en' ? KEY_SET_EN : KEY_SET_RU;
  } else {
    lang = 'en';
    keySet = KEY_SET_EN;
    localStorage.setItem('lang', lang);
  }



  /* initial create */

  toCreateKeyboardWrapper(lang, text, carriage);
  toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
  addActiveClassToBtn('.keyboard__btn');
  
  console.log();


  /* click */

  const toClickKey = () => {
    const btns = document.querySelectorAll('.keyboard__btn');
    const textarea = document.querySelector('#keyboard-text');
    const capsBtn = document.querySelector('[data-character="Caps Lock"');
    const shiftLeftBtn = document.querySelector('[data-character="shiftLeft"');
    const shiftRightBtn = document.querySelector('[data-character="shiftRight"');
    const noTap = new Set(['Backspace', 'Tab', 'del', 'Caps Lock', 'Enter', 'shiftLeft', 'shiftRight', 'Ctrl', 'Alt', 'Meta']);

    btns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        if (!noTap.has(event.currentTarget.dataset.character)) {
          const carrInd = textarea.innerHTML.indexOf('<span class="blink">|</span>');
          if (event.currentTarget.dataset.span && (shiftLeftStatus || shiftRightStatus)) {
            textarea.innerHTML = `${textarea.innerHTML.slice(0, carrInd) + event.currentTarget.dataset.span}<span class="blink">|</span>`;
          } else if (capsStatus || shiftLeftStatus || shiftRightStatus) {
            textarea.innerHTML = `${textarea.innerHTML.slice(0, carrInd) + event.currentTarget.dataset.character.toUpperCase()}<span class="blink">|</span>`;
          } else {
            textarea.innerHTML = `${textarea.innerHTML.slice(0, carrInd) + event.currentTarget.dataset.character.toLowerCase()}<span class="blink">|</span>`;
          }
        }

        checkBtn(event.target.dataset.character, textarea, carriage);

        // eslint-disable-next-line no-shadow
        const toChangeCapsShiftStatus = (character, charStatus, btn) => {
          if (event.target.dataset.character === character) {
            charStatus = !charStatus;

            if (character === 'shiftLeft' && charStatus) {
              shiftRightStatus = false;
              shiftRightBtn.classList.remove('keyboard__btn_active');
            } else if (character === 'shiftRight' && charStatus) {
              shiftLeftStatus = false;
              shiftLeftBtn.classList.remove('keyboard__btn_active');
            }

            if (!charStatus) {
              btn.classList.remove('keyboard__btn_active');
            }
          }

          if (charStatus) {
            btn.classList.add('keyboard__btn_active');
          }

          return charStatus;
        };

        capsStatus = toChangeCapsShiftStatus('Caps Lock', capsStatus, capsBtn);
        shiftLeftStatus = toChangeCapsShiftStatus('shiftLeft', shiftLeftStatus, shiftLeftBtn);
        shiftRightStatus = toChangeCapsShiftStatus('shiftRight', shiftRightStatus, shiftRightBtn);
      });
    });
  };
  toClickKey();




  /* tap btns */

  const keyCapture = () => {
    document.addEventListener('keydown', (event) => {
      console.log(event.code);
      const btns = document.querySelectorAll('.keyboard__btn');
      btns.forEach((element) => {
        if (event.code === element.dataset.code) {
          btns.forEach((item) => {
            item.classList.remove('keyboard__btn_active');
          });
          element.classList.add('keyboard__btn_active');
          setTimeout(() => {
            element.classList.remove('keyboard__btn_active');
          }, 300);
          element.click();
          console.log(element.dataset.code);
        }
      });

    });
  };

  keyCapture();


  /* tap btns together */

  function runOnKeys() {
    const pressed = new Set();

    document.addEventListener('keydown', (event) => {
      pressed.add(event.code);
      text = document.querySelector('#keyboard-text').innerHTML;
      text = text.slice(0, text.indexOf(carriage));
      /* change language */
      if (
        (pressed.has('AltLeft') && pressed.has('ShiftLeft')) || (pressed.has('AltRight') && pressed.has('ShiftRight'))
      ) {
        if (lang === 'en') {
          lang = 'ru';
          keySet = KEY_SET_RU;
        } else {
          lang = 'en';
          keySet = KEY_SET_EN;
        }
        localStorage.setItem('lang', lang);

        toCreateKeyboardWrapper(lang, text, carriage);
        toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
        addActiveClassToBtn('.keyboard__btn');
        toClickKey();
        shiftLeftStatus = false;
        shiftRightStatus = false;
      }
    });

    document.addEventListener('keyup', (event) => {
      pressed.delete(event.code);
    });
  }

  runOnKeys();
});
