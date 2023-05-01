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
    }

    document.body.appendChild(keyboard);

    let noticeOS = document.createElement('div');
    noticeOS.setAttribute('class', 'notice');
    document.body.prepend(noticeOS);
    noticeOS.innerHTML = 'This keyboard was created on Windows';

    document.addEventListener('keydown', function (event) {
        let pressedKey = event.code;
        console.log(pressedKey);
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
    });

}

createVirtualKeyboard();