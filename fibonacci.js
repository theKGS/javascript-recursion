function fib(a, b, pos) {
    if (pos <= 0) {
        return [];
    } else {
        return [a].concat(fib(b, a+b, --pos));
    }
};

function fibonacci(pos) {
    return fib(0, 1, pos);
}

console.log(fibonacci(8));