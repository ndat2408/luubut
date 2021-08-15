// This is my first website, so it's will have many bug & security problem, 
// but it's very meaningful to me because it's will be save all my youth, so i
// don't want it to be attacked by hacker, so i did block normal people to open DevTool 
// Excuse me
window.oncontextmenu = function () {
    return false;
};

document.addEventListener("keydown", function(event){
    var key = event.key || event.keyCode;

    if (key == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
        return false;
    }
}, false);


// Get data from user input
var userName, relation, text, time;
function Ready(){
    userName = document.getElementById('peopleName').value;
    relation = document.getElementById('relation').value;
      review = document.getElementById('review').value;
        text = document.getElementById('mainText').value;
}

// Click send button
document.getElementById('btn').onclick = function(){
    this.classList.add("loading")   //add wait cursor
    Ready();
    if (userName == "" || relation == "" || text == ""){
        setTimeout(function(){
            alert("Vui lòng điền đầy đủ thông tin");
            document.getElementById('btn').classList.remove("loading"); // remove wait cursor
        }, 500);
    } else{
        firebase.database().ref('/users/'+relation+' '+userName).set({
            Ten:userName,
            QuanHe:relation,
            NhanXet:review,
            LoiMuonNoi:text
        });
        setTimeout(function(){
            alert("Đã gửi lời nhắn của bạn"); 
            document.getElementById('btn').classList.remove("loading");
    }, 500);
    }
}

// Auto height textarea
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
    textarea.style.height = "20px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});


const f_day = new Date('Aug 26, 2019 13:00:00').getTime();
const printf = document.getElementById("xxx")
timer();
var Reload = setInterval(timer, 900);
function timer(){
    var   now  = new Date();
    var   diff =  now.getTime() - f_day
    var second = Math.floor(diff/(1000))
    
    var    year = Math.floor(second/31536000)
        second -= (year*31536000)
    var   month = Math.floor(second/2592000)
         second-= (month*2592000)
    var     day = Math.floor(second/86400)
         second-= (day*86400)
    var    hour = Math.floor(second/3600)
         second-= (hour*3600)
    var  minute =  Math.floor(second/60)
        second -= (minute*60)
    
    if (year < 10) year ='0'+ year
    if (month < 10) month ='0'+ month
    if (hour < 10) hour ='0'+ hour
    if (day < 10) day ='0'+ day
    if (minute < 10) minute ='0'+ minute
    if (second < 10) second ='0'+ second

    var xxx=year+" năm "+month+" tháng "+day+" ngày "+hour+" giờ "+minute+" phút "+second+" giây"
    printf.innerHTML = xxx;
}
