// This is my first website, so it's will have many bug & security problem, 
// but it's very meaningful to me because it's will be save all my youth, so i
// don't want it to be attacked by hacker, so i did block normal people to open DevTool 
// Excuse me

document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

// Get data from user input
var userName, relation, text, time;
function Ready() {
    userName = document.getElementById('peopleName').value;
    relation = document.getElementById('relation').value;
    review = document.getElementById('review').value;
    text = document.getElementById('mainText').value;
}

// Click send button
document.getElementById('btn').onclick = function () {
    this.classList.add("loading")   //add wait cursor
    Ready();
    if (userName == "" || relation == "" || text == "") {
        setTimeout(function () {
            document.getElementById('btn').classList.remove("loading"); // remove wait cursor
            document.getElementById('modal_empty').style.zIndex = '2'
            document.getElementById('modal_empty').style.opacity = '1'
        }, 500);
    } else if (!navigator.onLine) {
        setTimeout(function () {
            document.getElementById('btn').classList.remove("loading"); // remove wait cursor
            document.getElementById('modal_errNetwork').style.zIndex = '2'
            document.getElementById('modal_errNetwork').style.opacity = '1'
        }, 500);
    } else {
        firebase.database().ref('/users/' + relation + ' ' + userName).set({
            Ten: userName,
            QuanHe: relation,
            NhanXet: review,
            LoiMuonNoi: text
        });
        setTimeout(function () {
            document.getElementById('modal_thank').style.zIndex = '2'
            document.getElementById('btn').classList.remove("loading");
            document.getElementById('modal_thank').style.opacity = '1'
        }, 500);
    }
}

function OKmodal(e) {
    document.getElementsByClassName('allClose')[e].style.zIndex = '-2'
    document.getElementsByClassName('allClose')[e].style.opacity = '0'
    if (e==0) document.getElementById("myForm").reset()
}

function color(e){
    for(var i=0; i<4; i++){
        let under = document.querySelectorAll('.underline')[i]
        under.style.setProperty('--underlineColor', e.id);
    }

    console.log(e.id);
    document.querySelector('.main').style.borderColor = e.id
    if (e.id === 'green') document.body.style.backgroundColor = '#64ff64'
    if (e.id === 'blue') document.body.style.backgroundColor = '#6464ff'
    if (e.id === 'yellow') document.body.style.backgroundColor = '#ffff64'
    if (e.id === 'red') document.body.style.backgroundColor = '#ff6464'
    for(var i=0; i<document.querySelectorAll('button').length; i++){
        var btn = document.querySelectorAll('button')
        btn[i].style.backgroundColor = e.id
        if (e.id === 'yellow') btn[i].style.color= '#000'
        else btn[i].style.color = '#fff'
    }

    for(var i=0; i<document.querySelectorAll('.modal_box').length; i++){
        var modal = document.querySelectorAll('.modal_box')
        modal[i].style.borderColor = e.id
    }
}