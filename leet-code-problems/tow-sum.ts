// https://leetcode.com/problems/two-sum/

// Sol 1: Brute Force - O(n^2) time, O(1) space
export function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // This should never happen according to problem constraints
    // but TypeScript requires a return statement for all code paths
    throw new Error("No two sum solution found");
}

// Sol 2: Hash Map (Hash Table) - O(n) time, O(n) space (More efficient!)
export function twoSumOptimized(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if(numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        
        numMap.set(nums[i], i);
    }
    
    throw new Error("No two sum solution found");
}


// Pro tip:
/**
 * If an algorithm is time of o(n^2) and space of o(1)
 * it is most likely can be optimized to o(n) time and o(n) space.
 */
