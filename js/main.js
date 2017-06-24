function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!="function"){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
function prepare() {
    var formTwos=document.getElementsByClassName("form-two");
    var options=[];
    var tabs=[];
    for(var i=0;i<2;i++) {
        options[i] = formTwos[i].getElementsByTagName('a');
        tabs[i] = formTwos[i].getElementsByClassName('tab');
        (function () {
            var p=i;
            options[p][0].onmouseover = function () {
                options[p][1].style.borderBottom = "none";
                options[p][0].style.borderBottom = "2px solid #f67900";
                tabs[p][1].style.display = "none";
                tabs[p][0].style.display = "block";
            };
            options[p][1].onmouseover = function () {
            options[p][0].style.borderBottom = "none";
            options[p][1].style.borderBottom = "2px solid #f67900";
            tabs[p][0].style.display = "none";
            tabs[p][1].style.display = "block";
        };
    })();
}}
function rollText() {
    var noticeText=document.getElementsByClassName("notice-text");
    var i=0;
    function show(i){
        for(var j=0;j<3;j++){
            if(j!==i){
                noticeText[j].style.display="none";
            }
        }
        noticeText[i].style.display="block";
        if(i!==2){
            i=i+1;
        }else{
            i=0;
        }
        setTimeout(function () {
            show(i);
        },2000);
    }
    show(i);
}

$(document).ready(function(){
    prepare();
    rollText();
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
});