let a: number;
let b: boolean;
let c: string;

a = 10;
b = true;
c = 'Hello';


let myArr = [1, true];
// tuple
let myTuple: [number, boolean] = [1, true];
myTuple[0] = 2;
myTuple.push(1);
console.log(myTuple);

const add = (a: number, b: number, c: number = 2, d?: number): number => a + b + c + (d !== undefined ? d : 0);
console.log(add(1.1,2));

console.log(add(1, 2, 3));
console.log(add(1,2,3,4));

console.log(`${c} World`);

let g = 10;
let h = true;
let i = 'Hello';

const greet = (): string => 'Good morning';

let greeting = greet();

//Default is Any type
let any;
let any2: any = 10;
any2 = 'Hello';

//Union type
let union : number | boolean;
union = 10;
union = true;