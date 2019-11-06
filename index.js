(function() {
  let textArea;
  let isCapsLockOn;
  let isEnglish = false;
  let keysList = [
    [
      {russianName: 'ё', englishName: '§', width: 'small', isFunctional: false, code: 192},
      {russianName: '1', englishName: '1', width: 'small', isFunctional: false, code: 49},
      {russianName: '2', englishName: '2', width: 'small', isFunctional: false, code: 50},
      {russianName: '3', englishName: '3', width: 'small', isFunctional: false, code: 51},
      {russianName: '4', englishName: '4', width: 'small', isFunctional: false, code: 52},
      {russianName: '5', englishName: '5', width: 'small', isFunctional: false, code: 53},
      {russianName: '6', englishName: '6', width: 'small', isFunctional: false, code: 54},
      {russianName: '7', englishName: '7', width: 'small', isFunctional: false, code: 55},
      {russianName: '8', englishName: '8', width: 'small', isFunctional: false, code: 56},
      {russianName: '9', englishName: '9', width: 'small', isFunctional: false, code: 57},
      {russianName: '0', englishName: '0', width: 'small', isFunctional: false, code: 48},
      {russianName: '-', englishName: '-', width: 'small', isFunctional: false, code: 189},
      {russianName: '=', englishName: '=', width: 'small', isFunctional: false, code: 187},
      {russianName: 'Backspace', englishName: 'Backspace', width: 'medium', isFunctional: true, code: 8},
    ],
    [
      {russianName: 'Tab', englishName: 'Tab', width: 'medium', isFunctional: true, code: 9},
      {russianName: 'й', englishName: 'q', width: 'small', isFunctional: false, code: 81},
      {russianName: 'ц', englishName: 'w', width: 'small', isFunctional: false, code: 87},
      {russianName: 'у', englishName: 'e', width: 'small', isFunctional: false, code: 69},
      {russianName: 'к', englishName: 'r', width: 'small', isFunctional: false, code: 82},
      {russianName: 'е', englishName: 't', width: 'small', isFunctional: false, code: 84},
      {russianName: 'н', englishName: 'y', width: 'small', isFunctional: false, code: 89},
      {russianName: 'г', englishName: 'u', width: 'small', isFunctional: false, code: 85},
      {russianName: 'ш', englishName: 'i', width: 'small', isFunctional: false, code: 73},
      {russianName: 'щ', englishName: 'o', width: 'small', isFunctional: false, code: 79},
      {russianName: 'з', englishName: 'p', width: 'small', isFunctional: false, code: 80},
      {russianName: 'х', englishName: '[', width: 'small', isFunctional: false, code: 219},
      {russianName: 'ъ', englishName: ']', width: 'small', isFunctional: false, code: 221},
    ],
    [
      {russianName: 'Caps Lock', englishName: 'Caps Lock', width: 'medium', isFunctional: true, code: 20},
      {russianName: 'ф', englishName: 'a', width: 'small', isFunctional: false, code: 65},
      {russianName: 'ы', englishName: 's', width: 'small', isFunctional: false, code: 83},
      {russianName: 'в', englishName: 'd', width: 'small', isFunctional: false, code: 68},
      {russianName: 'а', englishName: 'f', width: 'small', isFunctional: false, code: 70},
      {russianName: 'п', englishName: 'g', width: 'small', isFunctional: false, code: 71},
      {russianName: 'р', englishName: 'h', width: 'small', isFunctional: false, code: 72},
      {russianName: 'о', englishName: 'j', width: 'small', isFunctional: false, code: 74},
      {russianName: 'л', englishName: 'k', width: 'small', isFunctional: false, code: 75},
      {russianName: 'д', englishName: 'l', width: 'small', isFunctional: false, code: 76},
      {russianName: 'ж', englishName: ';', width: 'small', isFunctional: false, code: 186},
      {russianName: 'э', englishName: '\'', width: 'small', isFunctional: false, code: 222},
      {russianName: '\\', englishName: '\\', width: 'small', isFunctional: false, code: 220},
      {russianName: 'Enter', englishName: 'Enter', width: 'small', isFunctional: true, code: 13},
    ],
    [
      {russianName: 'Shift', englishName: 'Shift', width: 'medium', isFunctional: true, code: 16},
      {russianName: ']', englishName: '`', width: 'small', isFunctional: false, code: 221},
      {russianName: 'я', englishName: 'z', width: 'small', isFunctional: false, code: 90},
      {russianName: 'ч', englishName: 'x', width: 'small', isFunctional: false, code: 88},
      {russianName: 'с', englishName: 'c', width: 'small', isFunctional: false, code: 67},
      {russianName: 'м', englishName: 'v', width: 'small', isFunctional: false, code: 86},
      {russianName: 'и', englishName: 'b', width: 'small', isFunctional: false, code: 66},
      {russianName: 'т', englishName: 'n', width: 'small', isFunctional: false, code: 78},
      {russianName: 'ь', englishName: 'm', width: 'small', isFunctional: false, code: 77},
      {russianName: 'б', englishName: ',', width: 'small', isFunctional: false, code: 188},
      {russianName: 'ю', englishName: '.', width: 'small', isFunctional: false, code: 190},
      {russianName: '.', englishName: '/', width: 'small', isFunctional: false, code: 190},
      {russianName: '&uarr;', englishName: '&uarr;', width: 'small', isFunctional: false, code: 38},
      {russianName: 'Shift', englishName: 'Shift', width: 'small', isFunctional: true, code: 16},
    ],
    [
      {russianName: 'Ctrl', englishName: 'Ctrl', width: 'medium', isFunctional: true, code: 17},
      {russianName: 'Alt', englishName: 'Alt', width: 'small', isFunctional: true, code: 18},
      {russianName: 'Cmd', englishName: 'Cmd', width: 'small', isFunctional: true, code: 91},
      {russianName: ' ', englishName: ' ', width: 'xxxlarge', isFunctional: false, code: 32},
      {russianName: 'Cmd', englishName: 'Cmd', width: 'small', isFunctional: true, code: 93},
      {russianName: 'Alt', englishName: 'Alt', width: 'small', isFunctional: true, code: 18},
      {russianName: '&larr;', englishName: '&larr;', width: 'small', isFunctional: false, code: 37},
      {russianName: '&darr;', englishName: '&darr;', width: 'small', isFunctional: false, code: 40},
      {russianName: '&rarr;', englishName: '&rarr;', width: 'small', isFunctional: false, code: 39},
    ],
  ];

  initKeyboard();

  function initKeyboard() {
    isEnglish = (localStorage.getItem('isEnglish') === 'true');

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

    keysList.forEach(row => {
      let keyboardRow = createKeyboardRow(row);
      keyboardSection.appendChild(keyboardRow);
    });

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    keyboardSection.addEventListener('click', handleKeyClick);
  }

  function updateKeyboard() {
    let keyboardContainer = document.querySelector('.keyboard--container');
    let keyboardRows = keyboardContainer.children;

    for(let i = 0; i < keyboardRows.length; i++) {
      updateKeyboardRow(keyboardRows[i], keysList[i]);
    }
  }

  function updateKeyboardRow(row, newItemsValues) {
    let keyItemsList = row.children;

    for(let i = 0; i < keyItemsList.length; i++) {
      updateKeyboardItem(keyItemsList[i], newItemsValues[i]);
    }
  }

  function updateKeyboardItem(item, newValue) {
    item.innerHTML = isEnglish ? newValue.englishName : newValue.russianName;
  }

  function createKeyboardRow(row) {
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard--row');

    row.forEach(key => {
      let keyboardItem = createKeyboardItem(key);
      keyboardRow.appendChild(keyboardItem);
    });

    return keyboardRow;
  }

  function createKeyboardItem(key) {
    let keyboardItem = document.createElement('div');
    keyboardItem.innerHTML = isEnglish ? key.englishName : key.russianName;
    keyboardItem.dataset.keycode = key.code;
  
    keyboardItem.classList.add('keyboard--item');
    keyboardItem.classList.add(`keyboard--item-${key.width}`);
    if(key.isFunctional) {
      keyboardItem.classList.add('keyboard--item-functional');
    }
    return keyboardItem;
  }

  function handleKeyClick(event) {
    if(!event.target.classList.contains('keyboard--item')) {
      return;
    }

    let activeKeys = document.querySelectorAll('.keyboard--item-active');
    []
    .filter.call(activeKeys, key => (key.innerHTML !== 'Caps Lock'))
    .forEach(key => key.classList.remove('keyboard--item-active'));

    let keyName = event.target.innerHTML;
    if(keyName === 'Caps Lock') {
      toggleCapsLock();
      event.target.classList.toggle('keyboard--item-active');
      return;
    }
    
    let isFunctional = event.target.classList.contains('keyboard--item-functional');
    event.target.classList.add('keyboard--item-active');

    if(!isFunctional) {
      printLetter(keyName);
      return;
    }

    if(keyName === 'Backspace') {
      removeLastLetter();
    }
  }

  function handleKeyUp(event) {
    let currentKey = document.querySelector(`.keyboard--item[data-keycode="${event.keyCode}"]`);
    if(!currentKey) {
      return;
    }

    let keyName = currentKey.innerHTML;
    if(keyName === 'Caps Lock') {
      toggleCapsLock();
      currentKey.classList.remove('keyboard--item-active');
      return;
    }

    let activeKeys = document.querySelectorAll('.keyboard--item-active');
    let isCtrlPressed = false;
    let isAltPressed = false;

    [].filter.call(activeKeys, key => (key.innerHTML !== 'Caps Lock'))
    .forEach(key => {
      isCtrlPressed = isCtrlPressed || (key.innerHTML === 'Ctrl');
      isAltPressed = isAltPressed || (key.innerHTML === 'Alt');
      key.classList.remove('keyboard--item-active');
    });

    let isLanguageChanged = (isCtrlPressed && isAltPressed);
    if(isLanguageChanged) {
      isEnglish = !isEnglish;
      localStorage.setItem('isEnglish', isEnglish);
      updateKeyboard();
    }
  }

  function handleKeyDown(event) {
    let currentKey = document.querySelector(`.keyboard--item[data-keycode="${event.keyCode}"]`);
    if(!currentKey) {
      return;
    }

    currentKey.classList.add('keyboard--item-active');
    let keyName = currentKey.innerHTML;
    let isFunctional = currentKey.classList.contains('keyboard--item-functional');

    if(!isFunctional) {
      printLetter(keyName);
      return;
    }

    if(keyName === 'Caps Lock') {
      toggleCapsLock();
    }
    else if(keyName === 'Backspace') {
      removeLastLetter();
    }
  }

  function printLetter(letter) {
    letter = isCapsLockOn ? letter.toUpperCase() : letter;
    let currentText = textArea.innerHTML + letter;
    textArea.innerHTML = currentText;
  }

  function removeLastLetter() {
    let currentText = textArea.innerHTML;
    textArea.innerHTML = currentText.substring(0, currentText.length - 1);
  }

  function toggleCapsLock() {
    isCapsLockOn = !isCapsLockOn;
  }

})();