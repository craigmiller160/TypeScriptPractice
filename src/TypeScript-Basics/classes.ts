abstract class Person {
    abstract readonly sex: string;

    constructor(public firstName: string = "", public lastName: string = ""){

    }

    hello(): string{
        return `Hello, my name is ${this.fullName()}`;
    }

    private fullName = (): string => `${this.firstName} ${this.lastName}`;
}

class Male extends Person {
    readonly sex: string = 'Male';
    private _something: string = 'Something';

    get something(): string{
        return this._something;
    }

    set something(value: string){
        this._something = value;
    }

    hello(): string{
        return `${super.hello()} and I am a ${this.sex}`;
    }
}

class Female extends Person {
    readonly sex: string = 'Female';

    hello(): string{
        return `${super.hello()} and I am a ${this.sex}`;
    }
}

let person: Person;
person = new Female('Female', 'Here');
console.log(person.hello());

let male = new Male("Hello", "World");
console.log(male.hello());

console.log(male);
console.log(male.something);
male.something = 'Something else';