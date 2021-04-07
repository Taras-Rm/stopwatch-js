let minutes = document.getElementById('minutes');
let secunds = document.getElementById('secunds');
let cuted_board = document.querySelector('.cuted_board');

let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let interval = false;

function startFunc() {
    if (!interval) {
        interval = setInterval(
            () => {
                let s = Number(secunds.innerText) + 1;
                
                let timeM;
                let timeS = (s < 10) ? '0' + s : s;
    
                if (timeS == '99') {
                    timeS = '00';
                    let m = Number(minutes.innerText) + 1;
                    timeM = (m < 10) ? '0' + m : m;
                    if (timeM == "60") {
                        timeS = '00';
                        timeM = '00';
                    }
                    minutes.innerText = timeM;
                }
                secunds.innerText = timeS;
            }, 10);
    }
   
}

function resetFunc() {
    clearInterval(interval);
    minutes.innerText = '00';
    secunds.innerText = '00';
    interval = false;
    cuted_board.innerHTML = '';
}

function stopFunc() {
    clearInterval(interval);
    interval = false;
}

function cut() {
    let span = document.createElement('span');
    span.innerHTML = `${minutes.innerHTML} : ${secunds.innerHTML}`;
    cuted_board.appendChild(span);
}