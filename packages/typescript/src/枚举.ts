// 枚举
// 1.数字递增
enum Direction {
    UP,
    DOWN,
    Left,
    Right
}
// 2.反向映射
console.log(Direction[0]); // UP

// 3.可以手动赋值
const enum Direction1 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}
