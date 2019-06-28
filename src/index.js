function f(...args) {
  return args;
}

function unary(f) {
  return function one(arg) {
    return f(arg);
  };
}

const x = unary(f);

const z = x(12, 23, 23, 23);

console.log(z);
