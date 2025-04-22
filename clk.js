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





})