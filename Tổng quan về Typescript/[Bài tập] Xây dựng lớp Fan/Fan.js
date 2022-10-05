
class Fan{
    speed;
    radius;
    color;
    status;
    constructor(speed,radius,color,status) {
        this.speed=speed;
        this.radius=radius;
        this.color=color;
        this.status=status;
    }
    getStatus(){
        if(this.status===true){
            return 'Fan is on';
        } else return 'Fan is off';
    }
}