function plus(n1, n2) {
  return n1 + n2;
}

function f3(a, b) {
  if (
    a === "子ども" &&
    (b === "中学生" || b === "高校生")
  ) {
    return b;
  } else {
    return `${b}大人`;
  }
}

let result = plus(300, 1200);
result = result + 500;
console.log(result);
const pigOkinawaLastYear = 1_000_000;

let total = 0;
total = total + 100;
total = total + 200;
total = total + 500;
console.log(total);

let arr = [10, 20, 30, 40, 50];
let total2= 0;
for (let i = 0; i < 5; i++) {
  total2 += arr[i];
}
console.log(total2);