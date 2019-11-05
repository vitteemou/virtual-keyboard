(function() {
  let textArea;
  let russianKeysList = [
    [
      {name: 'ё', width: 'small', isFunctional: false, code: 192},
      {name: '1', width: 'small', isFunctional: false, code: 49},
      {name: '2', width: 'small', isFunctional: false, code: 50},
      {name: '3', width: 'small', isFunctional: false, code: 51},
      {name: '4', width: 'small', isFunctional: false, code: 52},
      {name: '5', width: 'small', isFunctional: false, code: 53},
      {name: '6', width: 'small', isFunctional: false, code: 54},
      {name: '7', width: 'small', isFunctional: false, code: 55},
      {name: '8', width: 'small', isFunctional: false, code: 56},
      {name: '9', width: 'small', isFunctional: false, code: 57},
      {name: '0', width: 'small', isFunctional: false, code: 48},
      {name: '-', width: 'small', isFunctional: false, code: 189},
      {name: '=', width: 'small', isFunctional: false, code: 187},
      {name: 'Backspace', width: 'medium', isFunctional: true, code: 8},
    ],
    [
      {name: 'Tab', width: 'medium', isFunctional: true, code: 9},
      {name: 'й', width: 'small', isFunctional: false, code: 81},
      {name: 'ц', width: 'small', isFunctional: false, code: 87},
      {name: 'у', width: 'small', isFunctional: false, code: 69},
      {name: 'к', width: 'small', isFunctional: false, code: 82},
      {name: 'е', width: 'small', isFunctional: false, code: 84},
      {name: 'н', width: 'small', isFunctional: false, code: 89},
      {name: 'г', width: 'small', isFunctional: false, code: 85},
      {name: 'ш', width: 'small', isFunctional: false, code: 73},
      {name: 'щ', width: 'small', isFunctional: false, code: 79},
      {name: 'з', width: 'small', isFunctional: false, code: 80},
      {name: 'х', width: 'small', isFunctional: false, code: 219},
      {name: 'ъ', width: 'small', isFunctional: false, code: 221},
    ],
    [
      {name: 'Caps Lock', width: 'medium', isFunctional: true, code: 20},
      {name: 'ф', width: 'small', isFunctional: false, code: 65},
      {name: 'ы', width: 'small', isFunctional: false, code: 83},
      {name: 'в', width: 'small', isFunctional: false, code: 68},
      {name: 'а', width: 'small', isFunctional: false, code: 70},
      {name: 'п', width: 'small', isFunctional: false, code: 71},
      {name: 'р', width: 'small', isFunctional: false, code: 72},
      {name: 'о', width: 'small', isFunctional: false, code: 74},
      {name: 'л', width: 'small', isFunctional: false, code: 75},
      {name: 'д', width: 'small', isFunctional: false, code: 76},
      {name: 'ж', width: 'small', isFunctional: false, code: 186},
      {name: 'э', width: 'small', isFunctional: false, code: 222},
      {name: '\\', width: 'small', isFunctional: false, code: 220},
      {name: 'Enter', width: 'small', isFunctional: true, code: 13},
    ],
    [
      {name: 'Shift', width: 'medium', isFunctional: true, code: 16},
      {name: ']', width: 'small', isFunctional: false, code: 221},
      {name: 'я', width: 'small', isFunctional: false, code: 90},
      {name: 'ч', width: 'small', isFunctional: false, code: 88},
      {name: 'с', width: 'small', isFunctional: false, code: 67},
      {name: 'м', width: 'small', isFunctional: false, code: 86},
      {name: 'и', width: 'small', isFunctional: false, code: 66},
      {name: 'т', width: 'small', isFunctional: false, code: 78},
      {name: 'ь', width: 'small', isFunctional: false, code: 77},
      {name: 'б', width: 'small', isFunctional: false, code: 188},
      {name: 'ю', width: 'small', isFunctional: false, code: 190},
      {name: '.', width: 'small', isFunctional: false, code: 190},
      {name: '&uarr;', width: 'small', isFunctional: true, code: 38},
      {name: 'Shift', width: 'small', isFunctional: true, code: 16},
    ],
    [
      {name: 'Ctrl', width: 'medium', isFunctional: true, code: 17},
      {name: 'Alt', width: 'small', isFunctional: true, code: 18},
      {name: 'Cmd', width: 'small', isFunctional: true, code: 91},
      {name: ' ', width: 'xxxlarge', isFunctional: false, code: 32},
      {name: 'Cmd', width: 'small', isFunctional: true, code: 93},
      {name: 'Alt', width: 'small', isFunctional: true, code: 18},
      {name: '&larr;', width: 'small', isFunctional: true, code: 37},
      {name: '&darr;', width: 'small', isFunctional: true, code: 40},
      {name: '&rarr;', width: 'small', isFunctional: true, code: 39},
    ],
  ];

  initKeyboard();

  function initKeyboard() {
    let main = document.createElement('main');
    main.classList.add('main');
    document.body.appendChild(main);

    let inputSection = document.createElement('section');
    inputSection.classList.add('input--container');
    main.appendChild(inputSection);

    let keyboardSection = document.createElement('section');
    keyboardSection.classList.add('keyboard--container');
    main.appendChild(keyboardSection);

    textArea = document.createElement('textarea');
    textArea.classList.add('input');
    textArea.setAttribute('cols', 10);
    inputSection.appendChild(textArea);

    russianKeysList.forEach(keysList => {
      let keyboardRow = createKeyboardRow(keysList);
      keyboardSection.appendChild(keyboardRow);
    });

    window.addEventListener('keyup', handleKeyUp);
    keyboardSection.addEventListener('click', handleKeyClick);
  }

  function createKeyboardRow(keysList) {
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard--row');

    keysList.forEach(key => {
      let keyboardItem = createKeyboardItem(key);
      keyboardRow.appendChild(keyboardItem);
    });

    return keyboardRow;
  }

  function createKeyboardItem(key) {
    let keyboardItem = document.createElement('div');
    keyboardItem.innerHTML = key.name;
    keyboardItem.dataset.keycode = key.code;
  
    keyboardItem.classList.add('keyboard--item');
    keyboardItem.classList.add(`keyboard--item-${key.width}`);
    if(key.isFunctional) {
      keyboardItem.classList.add('keyboard--item-functional');
    }
    return keyboardItem;
  }

  function handleKeyClick(event) {
    let keyName = event.target.innerText;
    let isFunctional = event.target.classList.contains('keyboard--item-functional');

    if(!isFunctional) {
      printLetter(keyName);
    }

    let activeKeys = document.querySelectorAll('.keyboard--item-active');
    activeKeys.forEach(key => key.classList.remove('keyboard--item-active'));
    event.target.classList.add('keyboard--item-active');
  }

  function handleKeyUp(event) {
    //console.log(event.keyCode);
    let activeKeys = document.querySelectorAll('.keyboard--item-active');
    activeKeys.forEach(key => key.classList.remove('keyboard--item-active'));

    let currentKey = document.querySelector(`.keyboard--item[data-keycode="${event.keyCode}"]`);
    if(currentKey) {
      currentKey.classList.add('keyboard--item-active');
    }

    let keyName = currentKey.innerText;
    let isFunctional = currentKey.classList.contains('keyboard--item-functional');

    if(!isFunctional) {
      printLetter(keyName);
    }
  }

  function printLetter(letter) {
    let currentText = textArea.innerHTML + letter;
    textArea.innerHTML = currentText;
  }

})();