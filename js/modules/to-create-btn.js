const toCreateBtn = ({key, span}) => {
    const btn = document.createElement('button');
    btn.classList.add('keyboard__btn');
    const keySpan = document.createElement("span");
    btn.innerHTML = key;
    if (span) {
        keySpan.textContent = span;
        btn.append(keySpan);
    }
    return btn;
}

export default toCreateBtn;