export class Circle{
    private radius: number;
    private color: string;
    constructor(radius:number,color:string) {
        this.radius=radius;
        this.color=color;
    }
    getRadius():number{
        return this.radius;
    }
    setRadius(radius:number):void{
        this.radius=radius;
    }
    getColor():string{
        return this.color;
    }
    setColor(color:string):void{
        this.color=color;
    }
    getArea():number{
        return (this.radius * this.radius * Math.PI);
    }
    getPerimeter():number{
        return (2*this.radius*Math.PI);
    }
}