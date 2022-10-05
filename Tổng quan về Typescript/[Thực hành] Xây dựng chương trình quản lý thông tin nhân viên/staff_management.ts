enum Gender{
    male,
    female,
    other
}
class Employee{
    name:string='';
    gender: Gender = Gender.other ;
    birthday?: Date;
    email: string='';
    phoneNumber: string='';

    constructor(name:string,gender:Gender,birthday:Date,email:string,phoneNumber:string) {
        this.name=name;
        this.gender=gender;
        this.birthday=birthday;
        this.email=email;
        this.phoneNumber=phoneNumber;
    }
}
let employeeList: Employee[]=[];
employeeList.push(new Employee('Đoàn Thị Yến',Gender.female, new Date('2001-01-05'),'yenjy8@gmail.com','0337406660'))
employeeList.push(new Employee("Tran Thi A", Gender.male, new Date("1991-10-12"), "btran@gmail.com", "0123456790"));

employeeList.forEach(showEmployee=>{
    console.log(showEmployee);
});

