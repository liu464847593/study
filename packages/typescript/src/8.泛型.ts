// 泛型 <>
function print<T>(arg: T): T {
    console.log(arg);
    return arg
}

// 默认参数
interface Iprint<T = number> {
    (arg: T): T
}

function print1<T>(arg: T) {
    console.log(arg);
    return arg
}

const myPrint: Iprint = print1

// 多函数参数
function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

// 约束泛型 泛型无法约束类的静态成员
interface ILength {
    length: number
}
function printLength<T extends ILength>(arg: T): T {
    console.log(arg.length)
    return arg
}

// 泛型约束接口
interface IKeyValue<T, U> {
    key: T
    value: U
}

const k1:IKeyValue<number, string> = { key: 18, value: 'lin'}
const k2:IKeyValue<string, number> = { key: 'lin', value: 18}

// 泛型定义数组
const arr: Array<number> = [1,2,3]
