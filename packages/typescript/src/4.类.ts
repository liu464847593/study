class Person{
    name: string
    constructor(name: string){
        this.name = name
    }
    speak(){
        console.log(`${this.name} is speaking`)
    }
}
const p1 = new Person('lin')
console.log(p1.name);
p1.speak();

// 继承
class Student extends Person{
    grade: number
    study(){
        console.log(`${this.name} needs study`)
    }
    constructor(name:string, grade: number) {
        super(name);
        this.grade = grade
    }
}
const s1 = new Student('lin',100);
s1.study();

// 多态 子类对父类的方法进行了重写
class Student1 extends Person{
    speak() {
        return `Student ${super.speak()}`
    }
}

// public 公有的，一个类里默认所有的方法和属性都是 public
class Person1{
    public name:string
    public constructor(name:string) {
        this.name = name
    }
    public speak(){
        console.log(`${this.name} is speaking`)
    }
}

// private 私有的，只属于这个类自己，它的实例和继承它的子类都访问不到。
class Person2{
    private name:string
    constructor(name:string) {
        this.name = name
    }
    speak(){
        console.log(`${this.name} is speaking`)
    }
}

// protected 受保护的，继承它的子类可以访问，实例不能访问
class Person3{
    protected name:string
    constructor(name:string) {
        this.name = name
    }
    speak(){
        console.log(`${this.name} is speaking`)
    }
}

// static 是静态属性，可以理解为是类上的一些常量，实例不能访问
class Circle{
    static pi:number = 3.14
    radius: number
    constructor(radius:number) {
        this.radius = radius
    }
}

// 抽象类
// 抽象类不允许被实例化 抽象类中的抽象方法必须被子类实现
abstract class Animal {
    constructor(name:string) {
        this.name = name
    }
    public name: string
    public abstract sayHi():void
}

class Dog extends Animal {
    constructor(name:string) {
        super(name)
    }
    public sayHi() {
        console.log('wang')
    }
}

// this
// 链式调用
class StudyStep{
    step1(){
        console.log('step1')
        return this
    }
    step2(){
        console.log('step2')
        return this
    }
}
class MyStudyStep extends StudyStep {
    next() {
        console.log('before done, study next!')
        return this
    }
}
const s = new StudyStep();
s.step1().step2();

const m = new MyStudyStep();
m.step1().step2().next();


// 通过implements 实现interface
interface MusicInterface{
    playMusic():void
}
interface CallInterface{
    makePhoneCall():void
}
class Cellphone implements MusicInterface, CallInterface{
    playMusic() {}
    makePhoneCall(){}
}


