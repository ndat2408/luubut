// Send data to firebase database
var userName, relation, text, time;
function Ready(){
        userName = document.getElementById('peopleName').value;
        relation = document.getElementById('relation').value;
            text = document.getElementById('mainText').value;
            time = new Date().toLocaleString();
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
        firebase.database().ref('/users/' + userName).set({
            ThoiGian:time,
            Ten:userName,
            QuanHe:relation,
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
setInterval(function(){ 
    console.clear()
    var   now = new Date().getTime();
    var   diff =  now - f_day
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
    
    var xxx=year+" năm "+month+" tháng "+day+" ngày "+hour+" giờ "+minute+" phút "+second+" giây"
    printf.innerHTML = xxx;
    
}, 990);

