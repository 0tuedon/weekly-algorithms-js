// Algo to get Prime Number or Not
// Note 1 is not a prime Number. Prime Number is a number that is only divisible by itself
// AND NO OTHER NUMBER 
const isPrime =  (x)=> {
    let divisibleNumber = [];
    for (let i = 1; i < x; i++) {
        if (x % i === 0) {
            divisibleNumber.push(i);
        }
        else {
        }
    }
    return x !== 1 && divisibleNumber.length <= 1;
};
console.log(isPrime(14));
