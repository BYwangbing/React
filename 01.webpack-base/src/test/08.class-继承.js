// 在class类中，可以使用extends关键字，实现子类继承父类
// 语法: class 子类 extends 父类 {}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    show() {
        console.log('王福坤今年三岁了');
    }
}

class Chinese extends Person {
    constructor(name, age, IDNumber) {
        super(name, age);
        // 语法规范: 在子类中，this只能放到 super 之后使用
        this.IDNumber = IDNumber;
    }
}

const result_1 = new Chinese('王福坤', 3, '411327************');
console.log(result_1);
result_1.show();

// 问题1: 为什么一定要在constructor 中调用super
// 问题2: super是什么?
// 问题3: 为什么调用了super() 之后，al实例的 name和age 都变成undefined 了?

class American extends Person {
    constructor(name, age) {
        super(name, age);
    }
}

const result_2 = new American('Jack', 3);
console.log(result_2);
result_2.show();