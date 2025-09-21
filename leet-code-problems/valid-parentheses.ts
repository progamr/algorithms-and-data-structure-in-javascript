// https://leetcode.com/problems/valid-parentheses/description/

/**
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false
 */
function isValid(s: string): boolean {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) {
                return false;
            }
            const last = stack.pop()!;
            if ((char === ')' && last !== '(') || (char === '}' && last !== '{') || (char === ']' && last !== '[')) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

// Sol 2: Hash Map (Hash Table) - O(n) time, O(n) space (More efficient!)
function isValidOptimized(s: string): boolean {
    const stack: string[] = [];
    const map: Record<string, string> = {
      ")": "(",
      "]": "[",
      "}": "{",
    };
  
    for (const char of s) {
      if (char === "(" || char === "[" || char === "{") {
        stack.push(char);
      } else {
        if (stack.length === 0) return false;
        const top = stack.pop();
        if (top !== map[char]) return false;
      }
    }
  
    return stack.length === 0;
  }
        