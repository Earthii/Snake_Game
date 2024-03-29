/**
 * Created by Earthii on 12/12/2016.
 */
function Snake(){
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];

    this.dir = function(x,y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.death = function(){

        for (var i = 0 ; i<this.tail.length; i++){
            var pos = this.tail[i];
            var d= dist(this.x, this.y, pos.x, pos.y);
            if(d < 1){
                this.total = 0;
                this.tail = [];
                document.getElementById("score").innerHTML = "0";
                this.x = 0;
                this.y = 0;
            }
        }
    }

    this.update = function(){
        if(this.total === this.tail.length){
            for(var i=0; i< this.tail.length -1 ; i++){
                this.tail[i] = this.tail[i+1];
            }
        }
        this.tail[this.total-1] = createVector(this.x,this.y);

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        if(this.x == -20){
            this.death();
        }
        if(this.x == 600){
            this.death();
        }
        if(this.y == - 20){
            this.death();
        }
        if(this.y == 600){
            this.death();
        }
        this.x = constrain( this.x , 0, width - scl);
        this.y = constrain( this.y , 0, height -scl);

    }

    this.show = function(){
        fill(255);
        for(var i = 0; i< this.total; i++){
            rect(this.tail[i].x,this.tail[i].y, scl, scl);
        }
        fill(255);
        rect(this.x,this.y, scl, scl);
    }

    this.eat = function(pos){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d <1){
            this.total++;
            document.getElementById("score").innerHTML = this.total;
            return true;
        }else{
            return false
        }
    }
}