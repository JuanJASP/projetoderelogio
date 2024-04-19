const digitalElement = document.querySelector('.digital');
const sElement = document.querySelector('.p_s');
const mElement = document.querySelector('.p_m');
const hElement = document.querySelector('.p_h');

function updateClock(){
    const now = new Date();
    const horas = now.getHours();
    const min = now.getMinutes();
    const seg = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(horas)}:${fixZero(min)}:${fixZero(seg)}`;

    let sDeg = ((360/60) * seg) - 90;
    let mDeg = ((360/60) * min) - 90;
    let hDeg = ((360/12) * horas) - 90;
    sElement.style.transform = `rotate(${sDeg}deg)`;
    mElement.style.transform = `rotate(${mDeg}deg)`;
    hElement.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
    if(time < 10){
        return '0'+time;
    }else { 
        return time;
    }
}

setInterval(updateClock, 1000);
updateClock();
