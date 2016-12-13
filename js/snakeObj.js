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

    this.update = function(){
        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain( this.x , 0, width - scl);
        this.y = constrain( this.y , 0, height -scl);
    }

    this.show = function(){
        fill(255);
        rect(this.x,this.y, scl, scl);
    }

    this.eat = function(pos){
        var d = dist(this.x, this.y, pos.x, pos.y);
        if(d <1){
            return true;
        }else{
            return false
        }
    }
}