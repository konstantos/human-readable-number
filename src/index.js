module.exports = function toReadable (n) {
    let n1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let n2 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    let n3 = ["zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let res = '';
    let s;

    if (n >= 100) {
        res = `${n1[Math.trunc(n / 100)]} hundred `;
        if (n % 100 == 0) {
            return res.trim();
        }
        s = n - Math.trunc(n / 100) * 100;
    } else {
        s = n;
    }

    if (s < 10) {
        res += n1[s];
    } else if (s >= 10 && s < 20) {
        res += n2[s % 10];
    } else if (s >= 20 < 100) {
        res += `${n3[ Math.trunc(s / 10)]}`;
        if (n % 10 != 0) {
            res += ` ${n1[s % 10]}`;
        }
    } 
    return res;
}
