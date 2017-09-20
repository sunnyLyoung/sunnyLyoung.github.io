function run() {
    var image = document.getElementById('background');
    image.onload = function() {
        var engine = new RainyDay({
            image: this
        });
       engine.rain([[3, 2, 2]], 10);
    };
    image.crossOrigin = 'anonymous';
   image.src= 'img/bj_img/bg.jpg';
}

var setBgImgSize = function() {
    var winWidth = 0;
    var winHeight = 0;
    // 获取窗口宽度
    if (window.innerWidth) {
         winWidth = window.innerWidth;
    }
    else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }
    // 获取窗口高度
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    }
    else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    // 通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement  && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    $("#bg_img").css("width",winWidth).css("height", winHeight);
}
var bg_music_controll = function() {
    var music = document.getElementById("bg_audio"); 
    if(music.paused){ 
        music.play(); 
    }else{ 
        music.pause(); 
    } 
};

$(function(){
    setTimeout("run()",1500);
   window.onresize= setBgImgSize;
   setBgImgSize();
   $("#bg_audio")[0].volume=0.2;
});


