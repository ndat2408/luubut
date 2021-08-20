// window.onbeforeunload = () => ''

const f_day = new Date('Aug 26, 2019 13:00:00').getTime();
const printf = document.getElementById("xxx")
timer();
var Reload = setInterval(timer, 900);
function timer() {
    var now = new Date();
    var diff = now.getTime() - f_day
    var second = Math.floor(diff / (1000))

    var year = Math.floor(second / 31536000)
    second -= (year * 31536000)
    var month = Math.floor(second / 2592000)
    second -= (month * 2592000)
    var day = Math.floor(second / 86400)
    second -= (day * 86400)
    var hour = Math.floor(second / 3600)
    second -= (hour * 3600)
    var minute = Math.floor(second / 60)
    second -= (minute * 60)

    if (year < 10) year = '0' + year
    if (month < 10) month = '0' + month
    if (hour < 10) hour = '0' + hour
    if (day < 10) day = '0' + day
    if (minute < 10) minute = '0' + minute
    if (second < 10) second = '0' + second

    var xxx = year + " năm " + month + " tháng " + day + " ngày " + hour + " giờ " + minute + " phút " + second + " giây"
    printf.innerHTML = xxx;
}