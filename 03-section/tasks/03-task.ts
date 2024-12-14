// 1. Типизируйте функцию calc

// function calc(action:string, a:number, b:number):number {
//   switch (action) {
//     case "summ":
//       return a + b;
//     case "subtraction":
//       return a - b;
//     case "multiplication":
//       return a * b;
//     case "division":
//       if (b === 0) return 0;
//       return a / b;
//     default:
//       return a + b;
//   }
// }
// console.log(calc("summ", 10, 5)); // 15
// console.log(calc("subtraction", 10, 5)); // 5
// console.log(calc("multiplication", 10, 5)); // 50
// console.log(calc("division", 10, 0)); // 0

// 2. Напишите функцию calc2. Данная функция
// должна быть аналогична функции calc,
// но с использованием enum для action
enum Action {
  Summ = "summ",
  Subtraction = "subtraction",
  Multiplication = "multiplication",
  Division = "division",
}

function calc2(action: Action, a: number, b: number):number {
  switch (action) {
        case Action.Summ:
          return a + b;
        case Action.Subtraction:
          return a - b;
        case Action.Multiplication:
          return a * b;
        case Action.Division:
          if (b === 0) return 0;
          return a / b;
        default:
          return a + b;
      }
}

console.log(calc2(Action.Summ, 10, 5)); // 15
console.log(calc2(Action.Subtraction, 10, 5)); // 5
console.log(calc2(Action.Multiplication, 10, 5)); // 50
console.log(calc2(Action.Division, 10, 0)); // 0