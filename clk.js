document.addEventListener('DOMContentLoaded', function () {
    const main = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let Am = "AM";
        let hrs = document.getElementById('hrs');
        let mins = document.getElementById('mins');
        let secs = document.getElementById('secs');
        let tm = document.getElementById('tm');
        if (hours > 12) {
            hours = hours - 12;
            Am = "PM";
        }

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
        hrs.innerText = hours;
        mins.innerText = minutes;
        secs.innerText = seconds;
        tm.innerText = Am;
        let dt = document.getElementById('dot1');
        dt.classList.toggle('dots');
        dt.classList.toggle('both');
        let dt2 = document.getElementById('dot2');
        dt2.classList.toggle('dots');
        dt2.classList.toggle('both');
        setTimeout(() => {
            main();
        }, 1000);
    }

    main();

    const ana = () => {
        let n1 = document.getElementById('n1');
        let n2 = document.getElementById('n2');
        let n3 = document.getElementById('n3');
        let dat = new Date();
        let hr = dat.getHours();
        let mn = dat.getMinutes();
        let sc = dat.getSeconds();
        const hrangle = (hr % 12) * 30 + mn * 0.5;
        const mnangle = mn * 6 + sc * 0.1;
        const scangle = sc * 6;
        n3.style.transform = `rotate(${hrangle}deg)`;
        n2.style.transform = `rotate(${mnangle}deg)`;
        n1.style.transform = `rotate(${scangle}deg)`;
    }
    setInterval(() => {
        ana();
    }, 1000);



})