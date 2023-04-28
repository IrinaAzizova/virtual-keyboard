/* eslint-disable linebreak-style */
const toCreateBtn = ({
  key, span, character, code,
}) => {
  const btn = document.createElement('button');
  btn.classList.add('keyboard__btn');
  btn.dataset.character = character || key;
  if (code) {
    btn.dataset.code = code;
  }
  const keySpan = document.createElement('span');
  btn.innerHTML = key;
  if (span) {
    keySpan.textContent = span;
    btn.dataset.span = span;
    btn.append(keySpan);
  }
  return btn;
};

export default toCreateBtn;
