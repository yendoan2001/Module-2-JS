var Instructor = /** @class */ (function () {
    function Instructor(name, role) {
        if (role === void 0) { role = 'assistant'; }
        this.role = role;
        this.name = name;
    }
    Instructor.prototype.renderDetails = function () {
        console.log("".concat(this.name, "-").concat(this.role));
    };
    Instructor.helloWorld = function () {
        console.log('Hi there');
    };
    Instructor.canTeach = function (instructor) {
        return (instructor.role === 'Classroom');
    };
    return Instructor;
}());
var juniorInstructor = new Instructor("Brian", 'assistant');
var seniorInstructor = new Instructor('Nick', 'Classroom');
juniorInstructor.renderDetails();
seniorInstructor.renderDetails();
Instructor.helloWorld();
console.log("".concat(juniorInstructor.name, " can teach: ").concat(Instructor.canTeach(juniorInstructor)));
console.log("".concat(seniorInstructor.name, " can teach: ").concat(Instructor.canTeach(seniorInstructor)));
