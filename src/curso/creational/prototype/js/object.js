const person = {
    firstName: 'Jean',
    lastName: 'Victor',
    age: 19,

    fullname() {
        return `${this.firstName} ${this.lastName}`
    }
}

const anotherPerson = Object.prototype(person);
anotherPerson.firstName = 'Julia'
console.log(anotherPerson.firstName);
