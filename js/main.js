// Send data to firebase database
var nameM, relationship, text, time;
function Ready(){
    nameM = document.getElementById('peopleName').value;
    relationship = document.getElementById('relation').value;
    text = document.getElementById('mainText').value;
    time = new Date().toLocaleString();
}

document.getElementById('btn').onclick = function(){
    Ready();
    if (nameM == "" || relationship == "" || text == ""){
        alert("Vui lòng điền đầy đủ thông tin")
    } else{
        firebase.database().ref('/users/' + nameM).set({
            ThoiGian:time,
            Ten:nameM,
            QuanHe:relationship,
            LoiMuonNoi:text
        });
        alert("Đã gửi lời nhắn của bạn")
    }

}

// Auto height textarea
const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e =>{
    textarea.style.height = "20px";
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
});

function yellow(){
    document.body.style.backgroundColor = '#ffff76'
    document.querySelector('.main').style.borderTopColor = 'yellow'
    document.getElementById('btn').style.backgroundColor = 'yellow'
    document.getElementById('btn').style.color = '#000'
}