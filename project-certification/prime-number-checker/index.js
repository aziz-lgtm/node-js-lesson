function isPrime(prime) {
    if (prime <= 1) return false;
    for (i = 2; i <= Math.sqrt(prime); i++) {
        if (prime % i === 0) {
            return false;
        }
    }
    return true;
} 
    module.exports = {isPrime};