import {Rectangle} from "./Rectangle";

export class Square extends Rectangle {

    constructor(side: number, color: string, filled: boolean) {
        super(side, side, color, filled);
    }

    getSide(): number {
        return this.getWidth();
    }
    setSide(side: number): void {
        this.setWidth(side);
        this.setLength(side);
    }
    setWidth(width: number): void {
        this.setSide(width);
    }
    setLength(length: number): void {
        this.setSide(length);
    }
    toString(): string {
        return "A Square with side="
            + this.getSide()
            + ", which is a subclass of "
            + super.toString();
    }
}
