function Person(name, age) {
    this.name = name;
    this.age = age;
}

// gender属性，直接挂载给了构造函数，所以它是静恣属性
Person.gender = '男';
// 实例方法
Person.prototype.list = function () {
    console.log('这是Person的实例list方法');
};
// 静态方法
Person.show = function () {
    console.log('这是Person的静态show方法');
};

const info = new Person('大王福坤', 3);

console.log(info);
console.log(Person.gender);
info.list();
Person.show();

console.log('----------------------------------------');

class Animal {
    // 类中的构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //在class 内部，通过static修饰的属性，就是静态属性
    static info = '凌晨四点钟， 看海棠花未眠';

    // 实例方法
    list() {
        console.log('这是Animal的实例list方法');
    }

    // 静态方法
    static show() {
        console.log('这是Animal的静态show方法');
    }
}

const result = new Animal('小王福坤', 3);

console.log(result);
console.log(Animal.info); // 静态属性
result.list();
Animal.show();