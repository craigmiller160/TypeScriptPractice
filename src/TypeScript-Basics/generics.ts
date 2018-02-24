function echo<T>(arg: T): T{
    return arg;
}

let myNum: number = echo(1);

class Person3 {
    constructor(public firstName: String, public lastName: String){}
}

class Admin extends Person3 {
    adminProp: string = 'AdminProp';
}

class Manager extends Person3 {

}

let admin = new Admin('a', 'a');
let manager = new Manager('b', 'b');

function personEcho<T extends Person3>(person: T): T{
    return person;
}

let foo = personEcho(admin);
let stuff = foo.adminProp;
