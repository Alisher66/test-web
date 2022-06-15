// 4 Написать метод/функцию, который/которая на вход принимает целое число, а на выходе возвращает то, является ли число простым (не имеет делителей кроме 1 и самого себя).


function isPrimeNumber(num) {
    let isPrime = true;
    if (num === 1) return false;
    for(let i = 2; i< num; i++) {
        if(num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}


// потратил 8 минут для выполнение