const toCreateKeyboard = (langKeySet, parentSelector, toCreateBtn) => {
    
	langKeySet.forEach((item) => {
		const parent = document.querySelector(parentSelector);
		let keyRow = document.createElement('div');
		keyRow.classList.add('keyboard__row');
		item.forEach((elem) => {
			let btn = toCreateBtn(elem);
			if (elem.width) btn.style.cssText = `width: ${elem.width};`;
			if (elem.bgc) btn.classList.add('keyboard__btn_yellow');
			keyRow.append(btn);
		});
		parent.append(keyRow);
	});
};

export default toCreateKeyboard;
