class Point{
    constructor(x,y) {
        this.x=x;
        this.y=y;
    }
    displayName = 'Point';
    distance(point2){
        const dx = this.x - point2.x;
        const dy = this.y - point2.y;
        return Math.hypot(dx,dy);
    }
}
let p1 = new Point(5,5);
let p2 = new Point(10,10);

console.log(p1.displayName);
console.log(p1.distance(p2));
