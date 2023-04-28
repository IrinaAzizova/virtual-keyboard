/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */

// eslint-disable-next-line no-unused-vars
const createBtn = ({
  key, character, code, span,
}) => {
  const btn = document.createElement('button');
  btn.classList.add('keyboard__btn');
  btn.dataset.character = character || key;
  btn.dataset.code = code || false;
  btn.textContent = key;
  if (span) {
    const keySpan = document.createElement('span');
    keySpan.textContent = span;
    btn.dataset.span = span;
    btn.append(keySpan);
  }
  return btn;
};

export default createBtn;
