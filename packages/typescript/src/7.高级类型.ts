// 1. 联合类型 | 是指可以取几种类型中的任意一种
let num: number | string;
num = 123;
num = '123';

// 交叉类型 & 是指把几种类型合并起来
interface Person1 {
    name: string
    age: number
}

type Student2 = Person1 & {
    grade: number
}

// 类型别名type
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(name: NameOrResolver): Name {
    if (typeof name === 'string') {
        return name
    } else {
        return name()
    }
}

/**
 * type 和 interface 区别
 * 相同点：
 * 1.都可以定义一个对象或函数
 * 2.都允许继承(interface 使用 extends 实现继承， type 使用交叉类型实现继承)
 *
 * 不同点：
 * 1.interface（接口） 是 TS 设计出来用于定义对象类型的，可以对对象的形状进行描述。
 * 2.type 是类型别名，用于给各种类型定义别名，让 TS 写起来更简洁、清晰。
 * 3.type 可以声明基本类型、联合类型、交叉类型、元组，interface 不行
 * 4.interface可以合并重复声明，type 不行
 */

// 类型保护
function getLength(arg: string | number): number {
    if (typeof arg === 'string') {
        return arg.length
    } else {
        return arg.toString().length
    }
}

// 类型断言
function getLength1(arg: string | number): number {
    const str = arg as string;
    if (str.length) {
        return str.length
    } else {
        const number = arg as number
        return number.toString().length
    }
}

// 字面量类型  只能从这些定义的常量中取值，乱取值会报错
type ButtonSize = 'large' | 'medium' | 'small';
type Sex = 'male' | 'female';

