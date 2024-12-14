const city = "London";
const country = "Great Britain";
const region = 161;

// 1. Сравните типы переменных city и country,
// результат сравнения запишите в переменную
// isSameTypes
// 2. Приведите тип переменной region таким
// образом, чтобы результат сравнения типов
// переменных city и region был равен true,
// запишите результат сравнения в переменную
// isSameTypes

const isSameTypes = typeof city === typeof country;

const regionAsString = String(region);
const isSameTypesAfterConversion = typeof city === typeof regionAsString;


console.log(isSameTypes);
console.log(isSameTypesAfterConversion);
