var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["other"] = 2] = "other";
})(Gender || (Gender = {}));
var Employee = /** @class */ (function () {
    function Employee(name, gender, birthday, email, phoneNumber) {
        this.name = '';
        this.gender = Gender.other;
        this.email = '';
        this.phoneNumber = '';
        this.name = name;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employeeList = [];
employeeList.push(new Employee('Đoàn Thị Yến', Gender.female, new Date('2001-01-05'), 'yenjy8@gmail.com', '0337406660'));
employeeList.push(new Employee("Tran Thi A", Gender.male, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));
employeeList.forEach(function (showEmployee) {
    console.log(showEmployee);
});
