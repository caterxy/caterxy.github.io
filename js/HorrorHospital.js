var i =0;
var subject=new Array(
        "题目1",
        "题目2",
        "题目3",
        "题目4",
        "题目5",
        "题目6",
        "题目7",
        "题目8",
        );
function main () {
    if (i<=7) {
    next(i);    
    } else{
        gameover();
    };
       
};
function next () {
    document.getElementById("HorrorHospital").innerHTML=subject[i];
    i=i+1;
};
function gameover () {
    document.getElementById("HorrorHospital").innerHTML="游戏结束";
};