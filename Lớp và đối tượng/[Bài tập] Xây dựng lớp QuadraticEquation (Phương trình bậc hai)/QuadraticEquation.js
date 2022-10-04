class QuadraticEquation {
    a;
    b;
    c;

    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }

    getRoot1() {
        if (this.getDiscriminant() > 0) {
            let x1=(-this.b + Math.pow(this.getDiscriminant(), 0.5))/(2*this.a);
            let x2=(-this.b - Math.pow(this.getDiscriminant(), 0.5))/(2*this.a);
            return "x1=" + x1 + ";x2="+x2;
        } else if(this.getDiscriminant()<0){
            return 'Phương trình vô nghiệm';
        } else {
            let x = -this.b/(2*this.a)
            return 'Phương trình có nghiệm kép là: x1=x2=' + x;
        }
    }
}
let quadraticEquation = new QuadraticEquation(1,-2,1)
console.log(quadraticEquation.getRoot1());