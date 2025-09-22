function joinEelementsLoopImplementation(arr: string[], separator: string) {
    let result = '';
    for(let i = 0; i < arr.length - 1; i++) {
        result += arr[i] + separator;
    }

    return result + arr[arr.length - 1];
}

console.log(joinEelementsLoopImplementation(['a', 'b', 'c'], ', '));

