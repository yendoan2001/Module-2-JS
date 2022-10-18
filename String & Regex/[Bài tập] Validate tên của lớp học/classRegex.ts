export class ClassRegex{
    private CLASS_REGEX: RegExp = /^[CAP][0-9]{4}[GHIKLM]$/;
    validate(name: string):boolean{
        return this.CLASS_REGEX.test(name);
    }
}