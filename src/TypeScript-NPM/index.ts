import {Person} from './person';
import * as _ from 'lodash';

let foo = new Person();
foo.firstName = 'Test';
foo.lastName = 'LastName';
console.log(foo);

let array = [1,2,3,4,5];
console.log(_.reverse(array));