function setClock(){
    let elClock = document.getElementById("clock");
    
    let nowDate = new Date();
    let hour = zeroPadding(nowDate.getHours(), 2);
    let minutes = zeroPadding(nowDate.getMinutes(), 2);
    let seconds = zeroPadding(nowDate.getSeconds(), 2);

    elClock.innerHTML = hour + ":" + minutes + ":" + seconds;
    let parcent = calcParcentage();
    changePrgBarWidth(parcent);
}

function zeroPadding(targetNum, paddingNum) {
    const ZERO = "0";
    let joinedZero = ZERO.repeat(paddingNum) + String(targetNum);
    return joinedZero.slice(-paddingNum);
}
let timer = setInterval("setClock()", 1000);