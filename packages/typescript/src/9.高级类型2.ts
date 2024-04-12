//索引类型

/**
 * keyof 索引查询
 * 获取某种类型的所有键，其返回类型是联合类型
 */
interface Iperson {
    name: string
    age: number
}

type Test = keyof Iperson; // 'age' | 'name'

/**
 * T[K] 索引访问
 * 表示接口 T 的属性 K 所代表的类型，
 */

let type1: Iperson['name'];

/**
 * extend 泛型约束
 */
interface ILength {
    length: number
}

function printLength<T extends ILength>(arg: T): T {
    console.log(arg.length)
    return arg
}

/**
 * 检查动态属性
 */
const userInfo = {
    name: 'lin',
    age: 18
}

function getValues<T, K extends keyof T>(userInfo: T, keys: K[]): T[K][] {
    return keys.map(key => userInfo[key])
}

// 映射类型
/**
 * in
 */
type Person4 = 'name' | 'school' | 'major';
type Obj = {
    [p in Person4]: string;
}

/**
 * Partial
 * Partial<T>将T的所有属性映射为可选的
 */
interface IPerson {
    name: string,
    age: number,
    sex: string
}

type IPartial = Partial<IPerson>

/**
 * Readonly
 * Readonly<T>将T的所有属性映射为只读
 */

type IReadonly = Readonly<IPerson>;

/**
 * Pick
 * Pick用于抽取对象子集，挑选一组属性并组成一个新的类型
 */
type IPick = Pick<IPerson, 'name' | 'age'>;

/**
 * Record
 * Record<T,U>将T的所有属性映射为U
 */
type IRecord = Record<string, IPerson>;
let personMap: IRecord = {
    person1: {
        name: 'lin',
        age: 18,
        sex: 'male'
    }
}

// 条件类型

// T extends U ? X : Y
//若类型 T 可被赋值给类型 U,那么结果类型就是 X 类型,否则就是 Y 类型

/**
 * Exclude
 * Exclude<T,U>从T中排除U，返回一个新的类型
 */
type Test2 = Exclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'

/**
 * Extract
 * Extract<T,U>从T中提取U，返回一个新的类型
 */
type Test3 = Extract<'a' | 'b' | 'c', 'a'>; // 'a'


// 工具类型

/**
 * Omit
 * Omit<T,U>从T中排除U，返回一个新的类型
 */

type Test4 = Omit<IPerson, 'name'> // age | sex

/**
 * NonNullable
 * NonNullable<T> 用来过滤类型中的 null 及 undefined 类型
 */
type T0 = NonNullable<string | number | null | undefined>; // string | number

/**
 * Parameters
 * Parameters<T> 获取函数类型 T 的参数类型
 */
type T1 = Parameters<(a: number, b: string) => void>; // [a: number, b: string]

/**
 * ReturnType
 * ReturnType<T> 获取函数类型 T 的返回类型
 */
type T2 = ReturnType<() => string>; // string
