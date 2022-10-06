import {Circle} from "./circle";
export class Cylinder extends Circle{
    private height:number;
    constructor(radius:number,color:string,height:number) {
        super(radius,color);
        this.height=height;
    }
    getVolume():number{
        return this.getRadius() * this.getRadius() * this.height * Math.PI;
    }
}