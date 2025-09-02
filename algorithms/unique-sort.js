// V1 with loop start from 0 and unique array intilized empty
function uniqueSortV1(arr) {
    const breadcrumbs = {};
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(!breadcrumbs[arr[i]]){
            breadcrumbs[arr[i]] = true;
            result.push(arr[i]);
        };
    }

    return result.sort((a, b) => a - b);
}

// V2 with loop start from 1 and unique array intilized with first element
function uniqueSortV2(arr) {
    const breadcrumbs = {[arr[0]]: true};
    let result = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if(!breadcrumbs[arr[i]]){
            breadcrumbs[arr[i]] = true;
            result.push(arr[i]);
        };
    }

    return result.sort((a, b) => a - b);
}



console.log('v1', uniqueSortV1([1, 1, 2, 7, 2, 3, 4, 5, 6, 7, 8, 6, 12, 2, 9, 10]));

console.log('v2', uniqueSortV2([1, 1, 2, 7, 2, 3, 4, 5, 6, 7, 8, 6, 12, 2, 9, 10]));

    