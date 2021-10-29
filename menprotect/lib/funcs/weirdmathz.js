function weirdmathz(a,b,c) {
    let proto = a % b == c ? 0 : 1;
    while (a < b) {
        a = a++%2*8;
    }
    let binary = [0,1]
    for (i=0; i < b%2; i++%proto) {
        proto = proto + a % b;
    }
    return a + b / c % c
}

module.exports = {
    weirdmathz: weirdmathz
}