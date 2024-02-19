let isHandsome: boolean = true;
let age: number = 18;
let realName: string = 'lin';
let u: undefined = undefined;
let n: null = null;

// any 任意类型
let notSure: any = 4;
notSure = 'maybe a string';
notSure = true;

// unknown 类型代表任何类型 但是它是一个安全类型，使用 unknown 做任何事情都是不合法的。
function divide(param:unknown){
    return param as number / 2
}

// void 用来表示没有任何类型
function welcome(): void {
    console.log('hello');
}

// never 表示从来不会出现的值，比如抛出异常或死循环
function error(message: string): never {
    throw new Error(message);
}

// 数组类型
let list: number[] = [1, 2, 3];
list.push(4);
let list2: Array<number> = [1, 2, 3];

// 元组类型 表示一个已知元素数量和类型的数组，各元素的类型不必相同
let tuple: [string, number] = ['hello', 123];



