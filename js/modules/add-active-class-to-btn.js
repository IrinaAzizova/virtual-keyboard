const addActiveClassToBtn = (btnsSelector) => {
    const btns = document.querySelectorAll(btnsSelector);
    btns.forEach( btn => {
        btn.addEventListener('click', () => {
            btns.forEach( item => {item.classList.remove('keyboard__btn_active')});
            btn.classList.add('keyboard__btn_active');
        });
    })
}

export default addActiveClassToBtn;