const Tesseract  = require('tesseract.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
readline.question('Enter the Image Public URL -', URL => {
    Tesseract.recognize(
        URL,
        'eng',
    ).then(({ data: { text } }) => {
      console.log("EXTRACTED TEXT ==>",text);
    })
    readline.close();
});
