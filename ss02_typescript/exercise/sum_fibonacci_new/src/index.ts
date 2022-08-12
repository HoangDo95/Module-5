// happy coding 👻
// @ts-ignore
function fibonacci(num: number) {
    if (num <= 1) return num;

    return fibonacci(num - 1) + fibonacci(num - 2);
}
let sum = 0;
for (let i = 0; i < 7 ; i++) {
    console.log(fibonacci(i))
    sum += fibonacci(i);
}
console.log("Total= " + sum);

