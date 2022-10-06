import {Shape} from "./shape";
export class Triangle extends Shape{
    private side1:number;
    private side2:number;
    private side3:number;
   constructor(name:string,color:string,side1:number,side2:number,side3:number){
       super(name,color);
       this.side1=side1;
       this.side2=side2;
       this.side3=side3;
   }
   getSide1():number{
       return this.side1;
   }
    getSide2():number{
        return this.side2;
    }
    getSide3():number{
        return this.side3;
    }
    getArea():number{
       let a = this.getPerimeter()/2;
       return Math.sqrt((a*(a-this.getSide1())*(a-this.getSide2())*(a-this.getSide3())))
    }
    getPerimeter():number{
       return (this.getSide1() + this.getSide2() + this.getSide3());
    }
}

let triangle = new Triangle('hình tam giác', 'blue', 5,4,5)
console.log(triangle.getPerimeter());
console.log(triangle.getArea());