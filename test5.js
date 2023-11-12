class Man {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    about() {
        console.log(`Ім'я: ${this.name}`);
        console.log(`Прізвище: ${this.surname}`);
        console.log(`Вік: ${this.age}`);
    }
}

class Student extends Man {
    constructor(name, surname, age, school) {
        super(name, surname, age);
        this.school = school;
    }

    about() {
        super.about();
        console.log(`Навчальний заклад: ${this.school}`);
    }
}

class Employee extends Man {
    constructor(name, surname, age, work) {
        super(name, surname, age);
        this.work = work;
    }

    about() {
        super.about();
        console.log(`Місце роботи: ${this.work}`);
    }
}

let student = new Student("Іван", "Петров", 20, "Універ");
let employee = new Employee("Марія", "Сидорова", 30, "Компанія");

console.log("Інформація про студента:");
student.about();

console.log("Інформація про працівника:");
employee.about();