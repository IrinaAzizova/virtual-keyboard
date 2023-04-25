'use strict';

import KeySetEng from './modules/key-set-en.js';
import KeySetRu from './modules/key-set-ru.js';
import toCreateBtn from './modules/to-create-btn.js';
import addActiveClassToBtn from './modules/add-active-class-to-btn.js';
import toCreateKeyboardWrapper from './modules/to-create-kb-wrapper.js';
import toCreateKeyboard from './modules/to-create-kb.js';
import checkBtn from './modules/check-btn.js';

window.addEventListener('DOMContentLoaded', () => {

	/* page layout */

	const KEY_SET_EN = KeySetEng(),
		KEY_SET_RU = KeySetRu();
	let lang, keySet;


	if (localStorage.getItem('lang')) {
		lang = localStorage.getItem('lang');
		keySet = lang == 'en' ? KEY_SET_EN : KEY_SET_RU;
	} else {
		lang = 'en';
		keySet = KEY_SET_EN;
		localStorage.setItem('lang', lang);
	}



	/* initial create */

	toCreateKeyboardWrapper(lang);
	toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
	addActiveClassToBtn('.keyboard__btn');



    let shiftStatus = false,
        altStatus = false;

    /* click */

    const toClickKey = () => {
        const btns = document.querySelectorAll('.keyboard__btn'),
              textarea = document.querySelector('#keyboard-text'),
              noTap = new Set(['Backspace', 'Tab', 'del', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Alt', 'Meta']);

        btns.forEach( btn => {
            btn.addEventListener('click', (event) => {
                console.log(event.target.dataset.character);
                if (!noTap.has(event.target.dataset.character)) {
                   textarea.innerHTML += event.target.dataset.character;
                }
                checkBtn(event.target.dataset.character, textarea)
            });
        });
    }
    toClickKey();


	/* tap btns together */

	function runOnKeys() {
		let pressed = new Set();

		document.addEventListener('keydown', (event) => {
			pressed.add(event.code);

            /* change language */
			if (
				(pressed.has('AltLeft') && pressed.has('ShiftLeft')) ||
				(pressed.has('AltRight') && pressed.has('ShiftRight'))
			) {
				if (lang == 'en') {
					lang = 'ru';
					keySet = KEY_SET_RU;
				} else {
					lang = 'en';
					keySet = KEY_SET_EN;
				}                
                localStorage.setItem('lang', lang);

				toCreateKeyboardWrapper(lang);
				toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
				addActiveClassToBtn('.keyboard__btn');
			}
		});

		document.addEventListener('keyup', function (event) {
			pressed.delete(event.code);
		});
	}

	runOnKeys();

	const keyCapture = function (){
        document.addEventListener("keydown", (e)=>{
            let key = e.key;
            console.log(key);
        });
    };

    keyCapture();
});
