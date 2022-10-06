class Instructor{
    role:string;
    name:string;
    constructor(name:string,role:string='assistant') {
        this.role = role;
        this.name = name;
    }
    renderDetails():void{
        console.log(`${this.name}-${this.role}`);
    }
    static helloWorld(){
        console.log('Hi there');
    }
    static canTeach(instructor){
        return (instructor.role==='Classroom')
    }
}
let juniorInstructor = new Instructor("Brian");
let seniorInstructor = new Instructor('Nick', 'Classroom');
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log(`${juniorInstructor.name} can teach: ${Instructor.canTeach(juniorInstructor)}`);
console.log(`${seniorInstructor.name} can teach: ${Instructor.canTeach(seniorInstructor)}`);
