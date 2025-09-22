import { s } from "vite/dist/node/types.d-aGj9QkWt";

function joinEelements(arr: string[], separator: string) {

    function recurse(index: number, resultSoFar: string) {
        resultSoFar += arr[index]
        if(index === arr.length - 1) {
            return resultSoFar
        } else {
            return recurse(index + 1, resultSoFar + separator)
        }
        
    }

    return recurse(0, '');
}

console.log(joinEelements(['a', 'b', 'c'], ', '));

function myJoinElements(arr: string[], separator: string) {

    function recurse(index: number, resultSoFar: string): string {
        if(index < arr.length - 1) {
            let updatedResultSoFar = resultSoFar + arr[index] + separator;
            return recurse(index + 1, updatedResultSoFar);
        } else {
            return resultSoFar + arr[index];
        }
    }

    return recurse(0, '');
    
}

console.log(myJoinElements(['z', 'y', 'x'], ', '));


function myRecursiveFactorial(n: number): number {
    if(n === 0) return 1;
    return n * myRecursiveFactorial( n - 1);
}

const memoize = (cb: Function) => {
    const cache: { [key: string]: any } = {};
    return (...args: any) => {
        const key = JSON.stringify(args);
        if(key in cache) {
            console.log('جلب القيمة المخزنة لـ', key);
            return cache[key];
        } else {
            console.log('تم حساب القيمة لـ', key);
            cache[key] = cb(...args);
            return cache[key];
        }
    }
}

const memoizedRecFactorial = memoize(myRecursiveFactorial);
console.log(memoizedRecFactorial(5));
console.log(memoizedRecFactorial(5));

