// Task 3 make your memoize function generic and accept the times10
// function as a callback rather than defining the n * 10 logic inside
// the if else or pulling it in from the global scope
const times10Func = (N: number) => N * 10;

const memoize = (cb: Function) => {

    const cache: { [key: string]: any } = {};

    return (...args: any) => {
        const key = JSON.stringify(args);
        if(key in cache) {
            console.log('جلب القيمة المخزنة لـ', key);
            return cache[key];
        } else {
            let value = cb(...args);
            cache[key] = value;
            console.log('تم حساب القيمة لـ', key);
            return value;
        }
    }

};

const memoClosureTimes10 = memoize(times10Func);
export default () => {
    console.log('memoClosureTimes10 لـ 9', memoClosureTimes10(9));
    console.log('memoClosureTimes10 لـ 9 مرة أخرى', memoClosureTimes10(9));
}
