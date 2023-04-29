/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
const checkBtn = (value, textarea, carriage) => {
  const carrInd = textarea.innerHTML.indexOf(carriage);
  if (value == 'Backspace') {
    if (textarea.innerHTML !== carriage) {
      if (textarea.innerHTML.slice(carrInd - 4, carrInd) == '<br>'
                    || textarea.innerHTML.slice(carrInd - 4, carrInd) == '&gt;'
                    || textarea.innerHTML.slice(carrInd - 4, carrInd) == '&lt;') {
        textarea.innerHTML = textarea.innerHTML.slice(0, carrInd - 4) + carriage;
      } else if (textarea.innerHTML.slice(carrInd - 5, carrInd) == '&amp;') {
        textarea.innerHTML = textarea.innerHTML.slice(0, carrInd - 5) + carriage;
      } else {
        textarea.innerHTML = textarea.innerHTML.slice(0, carrInd - 1) + carriage;
      }
    }
  }
  if (value === 'Enter') {
    textarea.innerHTML = `${textarea.innerHTML.slice(0, carrInd)}<br>${carriage}`;
  }/* 
  if (value === 'Tab') {
    textarea.innerHTML = `${textarea.innerHTML.slice(0, carrInd)}&emsp;${carriage}`;
  } */
  if (value === '▲' || value === '◀') {
    let arr = textarea.innerHTML.split(carriage);
    if (arr[0].length > 0) {
      let result = arr[0].split('');
      result.push(result[result.length - 1]);
      result[result.length - 2] = carriage;
      result.push(arr[1]);
      textarea.innerHTML = result.join('');
    }
  }
  if (value === '▼' || value === '▶') {
    let arr = textarea.innerHTML.split(carriage);
    if (arr[1].length > 0) {
      let result = arr[1].split('');
      arr[0] += result[0];
      result[0] = carriage;
      textarea.innerHTML = arr[0] + result.join('');
    }
  }
};

export default checkBtn;
