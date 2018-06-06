


var canvas = document.getElementById('canvas');



canvas.height = window.innerHeight;
canvas.width = window.innerWidth;


var c = canvas.getContext('2d');
var starNum = 1000;
var starCount = [];
var size = 1;
var fl = canvas.width;
var centerX = canvas.width/2;
var centerY = canvas.height/2;
var speed = 2;



for(var i = 0; i < starNum; i++){

    starCount[i] = new Star();
}



function Star(){

    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.z = Math.random()*canvas.width;

    this.move = function(){
        this.z = this.z - speed;

        if(this.z <= 0){

            this.z = canvas.width;
        }


    }

   this.show = function(){

        var x,y,s;

    x =(this.x - centerX) * (fl/this.z);
    x = x + centerX;

    y =(this.y - centerY) * (fl/this.z);
    y = y + centerY;

    s = size * (fl/this.z);

    c.beginPath();
    c.fillStyle = "white";
    c.arc(x,y,s, 0, Math.PI*2);
    c.fill();


   }

}



function draw(){

    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);

    for(var i = 0; i < starNum; i++){

        starCount[i].show();
        starCount[i].move();
    }
    

}



function update(){

    draw();
    window.requestAnimationFrame(update);

}



canvas.addEventListener('click', function() {

    var audio = document.getElementById('aud');
    
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }

    

    var hide = document.getElementById('overlay');
    if (hide.style.display === "block") {
        hide.style.display = "none";
    } else {
        hide.style.display = "none";
    }

});



   update();