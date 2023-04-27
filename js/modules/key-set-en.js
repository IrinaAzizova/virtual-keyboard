const KeySetEng = () =>{
    return [
        [
            {key: "`", span: "~", bgc: true},
            {key: "1", span: "!"},
            {key: "2", span: "@"},
            {key: "3", span: "#"},
            {key: "4", span: "$"},
            {key: "5", span: "%"},
            {key: "6", span: "^"},
            {key: "7", span: "&"},
            {key: "8", span: "*"},
            {key: "9", span: "("},
            {key: "0", span: ")"},
            {key: "-", span: "_"},
            {key: "=", span: "+"},
            {key:"Backspace", width: "123px", bgc: true}
        ],
        [
            {key: "Tab", width: "60px", bgc: true},
            {key: "q"},
            {key: "w"},
            {key: "e"},
            {key: "r"},
            {key: "t"},
            {key: "y"},
            {key: "u"},
            {key: "i"},
            {key: "o"},
            {key: "p"},
            {key: "[", span: "{"},
            {key: "]", span: "}"},
            {key: "\\", span: "|"},
            {key: "del", width: "55px", bgc: true}
        ],
        [
            {key: "Caps Lock", width: "121px", bgc: true},
            {key: "a"},
            {key: "s"},
            {key: "d"},
            {key: "f"},
            {key: "g"},
            {key: "h"},
            {key: "j"},
            {key: "k"},
            {key: "l"},
            {key: ";", span: ":"},
            {key: "'", span: '"'},
            {key: "Enter", width: "106px", bgc: true}
        ],
        [
            {key: "Shift", width: "179px", bgc: true, character: "shiftLeft"},
            {key: "z"},
            {key: "x"},
            {key: "c"},
            {key: "v"},
            {key: "b"},
            {key: "n"},
            {key: "m"},
            {key: ",", span: "<"},
            {key: ".", span: ">"},
            {key: "/", span: "?"},
            {key: "&#9650;", bgc: true},
            {key: "Shift", bgc: true, character: "shiftRight"}
        ],
        [
            {key: "Ctrl", width: "80px", bgc: true},
            {key: "Meta", bgc: true},
            {key: "Alt", bgc: true},
            {key: " ", width: "339px"},
            {key: "Alt", bgc: true},
            {key: "Ctrl", width: "80px", bgc: true},
            {key: "&#9668;", bgc: true},
            {key: "&#9660;", bgc: true},
            {key: "&#9658;", bgc: true}
        ]
    ];
}

export default KeySetEng;