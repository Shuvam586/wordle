document.getElementById("hidden-textbox").focus();

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

function guessWord(){
    if (guessCount < 5){
        guessCount += 1
        tileCount = 0
    } else {
        console.log('LMAOOOOO')
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
    } else if (keynum == 13) {
        guessWord();
    }
    
}