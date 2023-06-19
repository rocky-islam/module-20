function getOddNumberOfAnArray(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        // console.log(element);
        if(element % 2 !== 0){
            // console.log(element);
            oddNumbers.push(element)
        }
    }
    return oddNumbers;
}
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 22]
let od = getOddNumberOfAnArray(myNumbers);
console.log(od);


function sumOfOdd(numbers) {
    let sum =0;
    for(let i=0; i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element
        console.log(index, element, sum);
    }
    return sum;
}

const sum = sumOfOdd(od);
console.log("Total odd number = ",sum);