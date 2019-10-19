function Person(name, age) {
    this.name = name;
    this.age = age;
}

// gender属性，直接挂载给了构造函数，所以它是静恣属性
Person.gender = '男';

const info = new Person('大王福坤', 3);

console.log(info);
console.log(info.gender);
console.log(Person.gender);

/*

    [实例属性]：通过new出来的实例，访问到的属性，叫做实例属性
    [静态属性]：通过构造函数，直接访问到的属性，叫做静态属性;

*/

console.log('----------------------------------------');

class Animal {
    // 类中的构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //在class 内部，通过static修饰的属性，就是静态属性
    static info = '凌晨四点钟， 看海棠花未眠'
}

const result = new Animal('小王福坤', 3);

console.log(result);
console.log(result.name); // 实例属性
console.log(result.age); // 实例属性
console.log(Animal.info); // 静态属性