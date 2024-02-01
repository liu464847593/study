// 1.函数类型
function add(x: number, y: number): number {
    return x + y
}

add(1, 2)

// void 用来表示没有任何类型
function welcome(): void {
    console.log('hello');
}

// 2.参数可选
function add1(x: number, y: number, z?: number): number {
    if (z) {
        return x + y + z
    }
    return x + y
}

// 3.参数默认值
function add2(x: number, y: number = 2): number {
    return x + y
}


// 4.函数赋值
let add3 = (x: number, y: number): number => {
    return x + y
}
const add4: (x: number, y: number) => number = add3
// 或者
const add5 = add3;



// 5.函数重载
function add6(x: number[]): number
function add6(x: string[]): string
function add6(x: any[]): any {
    if (typeof x[0] === 'number') {
        return x.reduce((acc, cur) => acc + cur)
    } else if (typeof x[0] === 'string') {
        return x.join()
    }
}
