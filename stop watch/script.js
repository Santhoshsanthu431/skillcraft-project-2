let startTime;
let elapsedTime = 0;
let timerInterval;

document.getElementById('startPauseBtn').addEventListener('click', function () {
    const btn = document.getElementById('startPauseBtn');
    if (btn.textContent === 'Start') {
        start();
    } else {
        pause();
    }
});

document.getElementById('resetBtn').addEventListener('click', reset);
document.getElementById('lapBtn').addEventListener('click', lap);

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 100);
    document.getElementById('startPauseBtn').textContent = 'Pause';
}

function pause() {
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
    document.getElementById('startPauseBtn').textContent = 'Start';
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    document.getElementById('time').textContent = '00:00:00.0';
    document.getElementById('startPauseBtn').textContent = 'Start';
    document.getElementById('lapsList').innerHTML = '';
}

function lap() {
    const lapTime = document.getElementById('time').textContent;
    const li = document.createElement('li');
    li.textContent = lapTime;
    document.getElementById('lapsList').appendChild(li);
}

function updateTime() {
    const timeElapsed = Date.now() - startTime;
    const time = new Date(timeElapsed);
    const minutes = time.getUTCMinutes();
    const seconds = time.getUTCSeconds();
    const milliseconds = Math.floor(time.getUTCMilliseconds() / 100);
    document.getElementById('time').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds}`;
}
