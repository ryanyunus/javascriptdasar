function Syafii(n) {
    if (n === 0) {
        return 1;
    }
    return n * Syafii(n - 1);
}
console.log(Syafii(5));
