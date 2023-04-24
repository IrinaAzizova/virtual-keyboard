"use strict";

import KeySetEng from "./modules/key-set-en.js";
import KeySetRu from "./modules/key-set-ru.js";
import toCreateBtn from "./modules/to-create-btn.js";
import toCreateKeyboardWrapper from "./modules/to-create-kb-wrapper.js";
import toCreateKeyboard from "./modules/to-create-kb.js";
import toChangeLang from "./modules/to-Change-Lang.js";

window.addEventListener("DOMContentLoaded", () => {

    /* page layout */

    const KEY_SET_EN = KeySetEng(),
          KEY_SET_RU = KeySetRu();

    let lang = "en",
        keySet = KEY_SET_EN;

    toCreateKeyboardWrapper(lang);

    toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);



    /* click */

    const btns = document.querySelectorAll('.keyboard__btn');

    btns.forEach( btn => {
        btn.addEventListener('click', () => {
            btns.forEach( item => {item.classList.remove('keyboard__btn_active')})
            console.log(btn);
            btn.classList.add('keyboard__btn_active');
        });
    })


    /* tap btns together */

    function runOnKeys(codesOfKeys) {
        let pressed = new Set();
  
        document.addEventListener('keydown', (event) => {
            pressed.add(event.code);     

            if ((pressed.has("AltLeft") && pressed.has("ShiftLeft")) || (pressed.has("AltRight") && pressed.has("ShiftRight"))) {
                if (lang == "en") {
                    lang = "ru";
                    keySet = KEY_SET_RU;
                } else {
                    lang = "en";
                    keySet = KEY_SET_EN;
                }                 
                toCreateKeyboardWrapper(lang);
                toCreateKeyboard(keySet, '.keyboard__wrapper', toCreateBtn);
            }

        });
  
        document.addEventListener('keyup', function(event) {
          pressed.delete(event.code);
        });
        
      }
      runOnKeys(["AltLeft", "ShiftLeft"]);


    /* const keyCapture = function (){
        document.addEventListener("keydown", (e)=>{
            let key = e.key;
            console.log(key);
            console.log(e);
        });
    };

    keyCapture(); */
})