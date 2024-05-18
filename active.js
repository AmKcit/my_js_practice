var cover = document.getElementById("cover");
var pg = cover.getElementsByClassName("pg");
for(var i=0;i<pg.length;i++){
    pg[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("active");
        current[0].className=current[0].className.replace(" active","");
        this.className +=" active";
    });
}