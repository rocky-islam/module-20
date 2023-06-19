function getSumOfArray(numbers) {
    let sum = 0;
    for(let i =0;  i<numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element
        console.log(index, element, sum);
    }
    return sum;
}

const myNumber = [1, 2 , 3, 4, 5, 6]
getSumOfArray(myNumber);