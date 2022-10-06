export class Shape{
    private name:string;
    private color:string;
    constructor(name:string,color:string) {
        this.name=name;
        this.color=color;
    }
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name=name;
    }
    getColor():string{
        return this.color;
    }
    setColor(color:string):void{
        this.color=color;
    }
}