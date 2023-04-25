const checkBtn = (value, textarea, carriage) => {
    let carrInd = textarea.innerHTML.indexOf(carriage);
    if (value == 'Backspace') {        
        if (textarea.innerHTML !== carriage) {
            console.log(textarea.innerHTML.slice(carrInd-4, carrInd));
            if (textarea.innerHTML.slice(carrInd-4, carrInd) == '<br>') {
                textarea.innerHTML = textarea.innerHTML.slice(0, carrInd-4) + carriage;
            } else {
                 textarea.innerHTML = textarea.innerHTML.slice(0, carrInd - 1) + carriage;
            }           
        }        
    }
    if (value == 'Enter') {
        textarea.innerHTML = textarea.innerHTML.slice(0, carrInd) + '<br>' + carriage;
    }
    if (value == 'Tab') {
        textarea.innerHTML = textarea.innerHTML.slice(0, carrInd) + '&emsp;' + carriage;
    }
}

export default checkBtn;