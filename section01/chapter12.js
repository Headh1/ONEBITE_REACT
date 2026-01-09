// 1
function funcA() {
  //   console.log("funcA");
}

let varA = funcA;
varA();

let varB = function () {
  //   console.log("funcB");
};

varB();

// 2
let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));