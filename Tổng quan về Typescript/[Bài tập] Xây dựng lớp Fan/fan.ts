enum SPEED {
    Slow = 1,
    Medium,
    Fast
}
class Fan{
    private speed: SPEED;
    private radius: number;
    private color: string;
    private status: boolean;
    constructor() {
        this.speed=SPEED.Slow;
        this.radius=5;
        this.color='blue';
        this.status=false;
    }
    setSpeed(newSpeed:SPEED):void{
        this.speed=newSpeed;
    }
    setColor(newColor:string):void{
        this.color=newColor;
    }
    setRadius(newRadius:number):void{
        this.radius = newRadius;
    }
    toString(){
        if(this.status===true){
            return `Fan is on: ${this.speed}, ${this.color}, ${this.radius}`;
        } else return `Fan is off ${this.radius},${this.color},`;
    }

}
let fan1 = new Fan();
fan1.setSpeed(SPEED.Fast);
fan1.setColor('yellow');
fan1.setRadius(10);

let fan2 = new Fan();
fan2.setSpeed(SPEED.Medium);

console.log(fan1.toString())
console.log(fan2.toString())


