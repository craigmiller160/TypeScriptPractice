interface Person2 {
    firstName: string;
    lastName: string;
    getFullName(): string;
}

class Foo implements Person2 {
    firstName: string;
    lastName: string;
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let someObj = {
    firstName: 'Some',
    lastName: 'Obj',
    getFullName: (): string => `${this.firstName} ${this.lastName}`,
    foo: 'FooBar' //Not strict with extra properties
};

let p2: Person2 = someObj;