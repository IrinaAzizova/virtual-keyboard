const checkBtn = (value, textarea) => {
    if (value == 'Backspace') {
        textarea.innerHTML = textarea.innerHTML.slice(0, -1);
    }
    if (value == 'Enter') {
        textarea.innerHTML += '<br>';
    }
    if (value == 'Tab') {
        textarea.innerHTML += '&nbsp;';
    }
}

export default checkBtn;