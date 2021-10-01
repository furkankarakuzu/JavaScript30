function playSound(key, type){
    const charCode = getCharCode(key, type);  
    const soundClip = document.querySelector('audio[data-key="'+ charCode + '"]');
    if (!soundClip) return;
    const currentDiv = '[data-key="'+ charCode + '"]';
    document.querySelector(currentDiv).classList.add('playing');
    soundClip.currentTime = 0;
    soundClip.play();
}

function getCharCode(key, type) {
    if (type == "click") {
        return clickSoundClip(key);
    } else if (type == "press") {
        return pressSoundClip(key);
    }
}

function pressSoundClip(key) {
    const keyCode = key.keyCode;
    return keyCode;
}

function clickSoundClip(key) {
    const keyCode = key.path[1].getAttribute("data-key");
    return keyCode;
}

function removeClass(event){
    if(event.propertyName !== "transform"){return;}
    else {
        event.target.classList.remove("playing");
    }
} 

const keypad = Array.from(document.querySelectorAll(".key"));
keypad.forEach(key => key.addEventListener("transitionend", removeClass));

window.addEventListener("keydown", function(key) {
    const type = "press";
    playSound(key, type);
});

window.addEventListener("click", function(key) {
    const type = "click";
    playSound(key, type);
});