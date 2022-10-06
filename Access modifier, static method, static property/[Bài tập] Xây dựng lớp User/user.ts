enum RIGHT {
    admin = 1,
    user = 2
}

class User{
    protected nameUser: string;
    protected email: string;
    right_access: RIGHT;
    constructor(nameUser:string,email:string,right_access:RIGHT) {
        this.nameUser=nameUser;
        this.email=email;
        this.right_access=right_access;
    }
    getInfo():string{
        return `${this.nameUser} + ${this.email} + ${this.right_access}`
    }
    isAdmin(){
        if(this.right_access === RIGHT.admin){
            console.log('is admin');
        }else if(this.right_access === RIGHT.user)
        console.log('Normal user');
    }
    setName(name): void{
        this.nameUser=name;
    }
    setEmail(email):void{
        this.email=email;
    }
}
let user1 = new User('Yến','yenjy8@gmail.com',1)
let user2 = new User('Long','longjy8@gmail.com',2)

user1.isAdmin();
user2.setEmail('hehe');
console.log(user2.getInfo());