function sumOfFebo(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;
        console.log(i, sum);
        
    }
    return sum;
}

const sum = sumOfFebo(7);
console.log('total febo = ',sum);