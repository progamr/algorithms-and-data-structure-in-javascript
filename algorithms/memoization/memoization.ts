// Task 1
// Write a function times10 that takes a number n
// and multiplies it by 10
const times10 = (n: number) => n * 10;

// Task 2
// Use an object to cache the result of your
// times10 function
const cache: { [key: number]: number } = {};

const memoTimes10 = (n: number) => {
    if(cache[n]) {
        console.log('جلب القيمة المخزنة لـ', n);
        return cache[n]
    } else {
        let value = times10(n);
        cache[n] = value;
        console.log('تم حساب القيمة لـ', n);
        return value;
    }
}

console.log('times10 لـ 9', times10(9));
console.log('memoTimes10 لـ 9', memoTimes10(9));
console.log('memoTimes10 لـ 9 مرة أخرى', memoTimes10(9));
