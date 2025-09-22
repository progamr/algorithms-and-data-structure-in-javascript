const wrapperFnLoop = (start: number, end: number) => {
    

    function recurse(n: number) {
        if(n <= end) {
            console.log(n);
            recurse(n + 1);
        }
    }

    recurse(start);
}

wrapperFnLoop(1, 10);
