function createVirtualKeyboard() {
    let keyboard = document.createElement('div');
    keyboard.setAttribute('class', 'keyboard');

    let keys = {
        'en': [
            ['`', '~'], [1, '!'], [2, '@'], [3, '#'], [4, '$'], [5, '%'], [6, ':'], [7, '?'], [8, '*'], [9, '('], [0, ')'], ['-', '_'], ['=', '+'], ['backspace'],
            ['Tab'], ['q'], ['w'], ['e'], ['r'], ['t'], ['y'], ['u'], ['i'], ['o'],
            ['p'], ['['], [']'], ['&#92', '/'], ['Del'], ['Caps Lock'], ['a'], ['s'], ['d'], ['f'], ['g'], ['h'], ['j'], ['k'],
            ['l'], [';'], ['\''], ['enter'], ['shift'], ['z'], ['x'], ['c'], ['v'], ['b'], ['n'], ['m'], [','], ['.'], ['/', '?'],
            ['&#9650'], ['&#8679'], ['Ctrl'], ['Win'], ['Alt'], ['&nbsp'],
            ['Alt'], ['Ctrl'], ['&#9668'], ['&#9660'], ['&#9658']
        ],
        'ru': [
            ['ё', 'Ё'], [1, '!'], [2, '"'], [3, '№'], [4, ';'], [5, '%'], [6, ':'], [7, '?'], [8, '*'], [9, '('], [0, ')'],
            ['-', '_'], ['=', '+'], ['Backspace'], ['Tab'], ['Й'], ['Ц'], ['У'], ['К'], ['Е'], ['Н'], ['Г'], ['Ш'], ['Щ'],
            ['З'], ['Х'], ['Ъ'], ['\\', '/'], ['Del'], ['Caps Lock'], ['Ф'], ['Ы'], ['В'], ['А'], ['П'], ['Р'], ['О'], ['Л'],
            ['Д'], ['Ж'], ['Э'], ['Enter'], ['Shift'], ['\\'], ['Я'], ['X'], ['С'], ['М'], ['И'], ['Т'], ['Ь'], ['Б'], ['Ю'],
            ['&#9650'], ['Shift'], ['Ctrl'], ['Win'], ['Alt'], ['&nbsp'], ['Alt'], ['Ctrl'], ['&#9668'], ['&#9660'], ['&#9658']
        ]
    }

    let keysCode = [
        ['Backquote'], ['Digit1'], ['Digit2'], ['Digit3'], ['Digit4'], ['Digit5'], ['Digit6'], ['Digit7'], ['Digit8'], ['Digit9'], ['Digit0'], ['Minus'], ['Equal'], ['Backspace'],
        ['Tab'], ['KeyQ'], ['KeyW'], ['KeyE'], ['KeyR'], ['KeyT'], ['KeyY'], ['KeyU'], ['KeyI'], ['KeyO'],
        ['KeyP'], ['BracketLeft'], ['BracketRight'], ['Backslash'], ['Delete'], ['CapsLock'], ['KeyA'], ['KeyS'], ['KeyD'], ['KeyF'], ['KeyG'], ['KeyH'], ['KeyJ'], ['KeyK'],
        ['KeyL'], ['Semicolon'], ['Quote'], ['Enter'], ['ShiftLeft'], ['KeyZ'], ['KeyX'], ['KeyC'], ['KeyV'], ['KeyB'], ['KeyN'], ['KeyM'], ['Comma'], ['Period'], ['Slash'],
        ['ArrowUp'], ['ShiftRight'], ['ControlLeft'], ['MetaLeft'], ['AltLeft'], ['Space'],
        ['AltRight'], ['ControlRight'], ['ArrowLeft'], ['ArrowDown'], ['ArrowRight']
    ]

    for (let i = 0; i < keys.en.length; i++) {
        let button = document.createElement('div');
        let buttonTop = document.createElement('span');
        button.setAttribute('class', 'keyboard__key');
        button.innerHTML = keys.en[i][0];
        button.setAttribute('data-key', keysCode[i]);
        if (keys.en[i][1] !== undefined) {
            buttonTop.innerHTML = keys.en[i][1];
        }
        keyboard.appendChild(button);
        button.appendChild(buttonTop);

        button.addEventListener('click', function () {
            let pressedKey = this.getAttribute('data-key');
            let keyboardEventDown = new KeyboardEvent('keydown', { code: pressedKey });
            document.dispatchEvent(keyboardEventDown);
            let keyboardEventUp = new KeyboardEvent('keyup', { code: pressedKey });
            document.dispatchEvent(keyboardEventUp);

            const inputField = document.querySelector('input');
            const character = button.textContent;
            const characterToInput = character.slice(0, 1);
            if (character !== 'backspace' && character !== 'Tab' && character !== 'Del' && character !== 'Caps Lock' &&
                character !== 'enter' && character !== 'shift' && character !== '▼' && character !== '⇧' && character !== 'Ctrl'
                && character !== 'Win' && character !== 'Alt' && character !== '&nbsp' && character !== '◄' && character !== '▲'
                && character !== '►') {
                inputField.value += characterToInput;
            }

        });
    }

    document.body.appendChild(keyboard);

    let noticeOS = document.createElement('div');
    noticeOS.setAttribute('class', 'notice');
    document.body.prepend(noticeOS);
    noticeOS.innerHTML = 'This keyboard was created on Windows';

    document.addEventListener('keydown', function (event) {
        let pressedKey = event.code;
        let virtualKey = keyboard.querySelector(`[data-key="${pressedKey}"]`);
        if (virtualKey !== null) {
            virtualKey.classList.add('active');
        }
    });

    document.addEventListener('keyup', function (event) {
        let releasedKey = event.code;
        let virtualKey = keyboard.querySelector(`[data-key="${releasedKey}"]`);
        if (virtualKey !== null) {
            virtualKey.classList.remove('active');
        }
        const inputField = document.querySelector('input');
        inputField.focus();
    });

    let inputField = document.createElement('input');
    noticeOS.after(inputField);

}

createVirtualKeyboard();