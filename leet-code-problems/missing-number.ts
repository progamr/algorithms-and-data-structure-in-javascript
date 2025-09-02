// https://leetcode.com/problems/missing-number/

// Sol 1 memory optimized (Beats 95%+ of other solutions)
export function missingNumber(nums: number[]): number {
    let length = nums.length;
    let missing: number | undefined;
    for(let i = 0; i <= length; i++) {
        if(nums.indexOf(i) === -1) {
            missing = i;
        }
    }
    return missing!;
};

// Sol 2 time optimized (O(n))
export function missingNumberV2(nums: number[]): number {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
