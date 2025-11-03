function num(a, b, c) {
    if (a == 13 || b == 13 || c == 13) {
        return "nothing";
    }
    else if (a == 13) {
        return 0;
    }
    else if (b == 13) {
        return a;
    }
    else {
        return a + b + c;
    }
}
console.log(num(13, 2, 3));

