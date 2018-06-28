var userAgent=navigator.userAgent,voiceType,
    voiceSrc=new Array(
    "我天性不宜交际",
    "武林外传_1",
    "武林外传_2",
    "武林外传_3"
    );
var BrowserType=BrowserType();
if (BrowserType=="Chrome"||BrowserType=="IE") {
    voiceType="mp3"
}
else {
    voiceType="ogg"
};

window.onload=function (){
    document.getElementById('vPlayer').src="./static/voice/"+voiceSrc[0]+"."+voiceType;

}


function play(num) {
    var vPlayer=document.getElementById('vPlayer');
    document.getElementById("voiceName").innerHTML=voiceSrc[num];
    vPlayer.src="./static/voice/"+voiceSrc[num]+"."+voiceType;
    vPlayer.play();
}