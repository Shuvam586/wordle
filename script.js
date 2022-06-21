document.getElementById("hidden-textbox").focus();

word = 'ADOPT'

var guessCount = 0;
var tileCount = 0;

function putValue(value) {
    if (tileCount < 5) {
        document.getElementById(`${guessCount}-${tileCount}`).innerText = value;
        tileCount += 1
    }
}

function deleteValue(){
    if (tileCount > 0){
        tileCount -= 1
        document.getElementById(`${guessCount}-${tileCount}`).innerText = '';
    }
}

function processWord(){
    for (let i = 0; i < 5; i++) {
        element = document.getElementById(`${guessCount}-${i}`);
        if (element.innerText == word[i]){
            element.classList.add('correct')
        }
        else if (element.innerText == word[0] || element.innerText == word[1] || element.innerText == word[2] || element.innerText == word[3] || element.innerText == word[4]) {
            element.classList.add('possible')
        }
        else {
            element.classList.add('wrong')
        }
    }
}

function guessWord(){
    if (guessCount < 5 && tileCount == 5){
        processWord();
        guessCount += 1
        tileCount = 0
        console.log('LOLOLOL')
    } else {
        console.log('You have not entered a 5 letter word!')
    }
}

function keyPressed(e){
    var keynum;
    
    if(window.event) {                   
        keynum = e.keyCode;
    } else if(e.which){ 
        keynum = e.which;
    }

    if (keynum == 8) {
        deleteValue();
    } else if (keynum >= 65 && keynum <= 90){
        putValue(String.fromCharCode(keynum));
        console.log(tileCount)
    } else if (keynum == 13) {
        guessWord();
    }
    
}