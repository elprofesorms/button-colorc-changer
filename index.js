let all_buttons = document.getElementsByTagName('Button');

let copyAllButtons = [];

for(let i = 0;i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy) {
    if(buttonThingy.value ==='red'){
        buttonRed();
    }
    else if(buttonThingy.value ==='green'){
        buttonGreen();
    }
    else if(buttonThingy.value ==='yellow'){
        buttonYellow();
    }
    else if(buttonThingy.value ==='blue'){
        buttonBlue();
    }
    else if(buttonThingy.value ==='reset'){
        buttonReset();
    }
    else if(buttonThingy.value ==='random'){
        buttonRandom();
    }
}

function buttonRed() {
    for(let i = 0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}
function buttonGreen() {
    for(let i = 0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}
function buttonYellow() {
    for(let i = 0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}
function buttonBlue() {
    for(let i = 0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-primary');
    }
}
function buttonReset() {
    for(let i = 0; i < all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}
function buttonRandom() {
    let choices = ['btn-primary','btn-danger','btn-success','btn-warning']

    for(let i=0;i < all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}