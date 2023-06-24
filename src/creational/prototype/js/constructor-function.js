function Person(name,lastname, age) {
    this.name = name;
    this.lastName = lastname;
    this.age = age;
}

const personPrototype = {
    firstName: 'Jean',
    lastName: 'Victor',
    age: 19,

    fullname() {
        return `${this.firstName} ${this.lastName}`
    }
}

function SubPerson(name, lastName, age) {
    Person.call(this, name, lastName, age);
    this.fromSubClass = 'OIE';
}

Person.prototype = Object.create(personPrototype);

const person1 = new Person('Luiz', 'Miranda', 30);

Person.prototype.constructor = Person;

console.log(person1);

const person2 = new SubPerson('Helena', 'Santos', 29);
