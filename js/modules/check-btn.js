/* eslint-disable linebreak-style */
/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
const checkBtn = (value, textarea, carriage) => {
  const arr = textarea.innerHTML.split(carriage);

  if (value === 'Tab') {
    arr[0] += '&emsp;';
  }

  if (value == 'Backspace') {
    if (arr[0].slice(-4) === '<br>') {
      arr[0] = arr[0].slice(0, -4);
    } else if (arr[0].slice(-5) === '&amp;') {
      arr[0] = arr[0].slice(0, -5);
    } else {
      arr[0] = arr[0].slice(0, -1);
    }
  }

  if (value === 'del') {
    if (arr[1].slice(0, 4) === '<br>') {
      arr[1] = arr[1].slice(4);
    } else if (arr[1].slice(0, 5) === '&amp;') {
      arr[1] = arr[1].slice(5);
    } else {
      arr[1] = arr[1].slice(1);
    }
  }

  if (value === '▲' || value === '◀') {
    if (arr[0].length > 0) {
      if (arr[0].slice(-4) === '<br>') {
        arr[0] = arr[0].slice(0, -4);
        arr[1] = `<br>${arr[1]}`;
      } else if (arr[0].slice(-5) === '&amp;') {
        arr[0] = arr[0].slice(0, -5);
        arr[1] = `&amp;${arr[1]}`;
      } else {
        arr[1] = arr[0].slice(-1) + arr[1];
        arr[0] = arr[0].slice(0, -1);
      }
    }
  }
  if (value === '▼' || value === '▶') {
    if (arr[1].length > 0) {
      if (arr[1].slice(0, 4) === '<br>') {
        arr[0] = `${arr[0]}<br>`;
        arr[1] = arr[1].slice(4);
      } else if (arr[1].slice(0, 5) === '&amp;') {
        arr[0] = `${arr[0]}&amp;`;
        arr[1] = arr[1].slice(5);
      } else {
        arr[0] += arr[1][0];
        arr[1] = arr[1].slice(1);
      }
    }
  }

  const result = arr[0] + carriage + arr[1];
  textarea.innerHTML = result;
};

export default checkBtn;
