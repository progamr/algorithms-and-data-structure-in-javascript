// Task 1
// Write a function loopNTimes that takes a number n
// and logs the numbers from n to 1
const loopNTimes = (n: number) => {
    if (n === 0) {
        console.log("Done");
        return;
    }
    console.log(n);
    loopNTimes(n - 1);
}

loopNTimes(10);
