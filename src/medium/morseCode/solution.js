const morseToEnglish = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0",
    "--..--": ",",
    ".-.-.-": ".",
    "..--..": "?",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".--.-.": "@",
    "-....-": "-",
    "-...-": "=",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    ".-..-.": "\"",
    ".--.-.": "@",
    "-.--.": "(",
    "-.--.-": ")",
    "...-..-": "$",
    ".--.-": " ",
  }; //found online
  //get it in reverse
  const englishToMorse = {};
  for (let [key, value] of Object.entries(morseToEnglish)) {
    englishToMorse[value] = key;
  }
  
  function textToMorse(text) {
    let morse = "";
    for (let i = 0; i < text.length; i++) {
      let char = text[i].toLowerCase(); // so as to avoid missing an upper case letter
      if (englishToMorse[char]) {
        morse += englishToMorse[char] + " ";
      } else {
        morse += char + " ";
      }
    }
    return morse.trim();
  }
  
  function morseToText(morse) {
    let text = "";
    let words = morse.split("   ");
    for (let i = 0; i < words.length; i++) {
      let letters = words[i].split(" ");
      for (let j = 0; j < letters.length; j++) {
        if (morseToEnglish[letters[j]]) {
          text += morseToEnglish[letters[j]];
        } else {
          text += letters[j];
        }
      }
      if (i < words.length - 1) {
        text += " ";
      }
    }
    return text;
  }
  
  // Example usage
  console.log(textToMorse("hello world")); // output: ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
  console.log(morseToText(".... . .-.. .-.. ---   .-- --- .-. .-.. -..")); // output: "hello world"
  