export class Shape{
    private color: string='green';
    private filled:boolean=true;
    constructor(color:string,filled:boolean) {
        this.color=color;
        this.filled=filled;
    }
    getColor():string{
        return this.color;
    }
    isFilled():boolean{
        return this.filled;
    }
    setColor(color:string):void{
        this.color=color;
    }
    setFilled(filled:boolean):void{
        this.filled = filled;
    }
    toString():string{
        return `A Shape with color of ${this.getColor()} and ${this.isFilled()? 'filled':'not filled'}`
    }
}