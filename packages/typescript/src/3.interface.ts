// interface(接口) 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。
interface Person {
    readonly id: number // 只读
    name: string
    age?: number  // 可选
}

const p1: Person = {
    id: 1,
    name: 'lin',
    age: 18
}

// 描述函数类型
interface ISum {
    (x: number, y: number): number
}

const add: ISum = (num1, num2) => num1 + num2

// 自定义属性（可索引的类型）
interface RandomKey{
    [propName: string]: string
}
const obj: RandomKey = {
    a: 'hello',
    b: 'lin',
    c: 'welcome',
}
