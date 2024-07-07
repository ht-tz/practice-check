class Solution {
    largestRectangleArea(heights) {
        let result = 0;
        let stack = [];

        heights.unshift(0); // Add 0 to the beginning of the array
        heights.push(0);    // Add 0 to the end of the array
        stack.push(0);

        // The first element is already pushed, start from index 1
        for (let i = 1; i < heights.length; i++) {
            if (heights[i] > heights[stack[stack.length - 1]]) { // Case 1
                stack.push(i);
            } else if (heights[i] === heights[stack[stack.length - 1]]) { // Case 2
                stack.pop(); // This can be added or not, the effect is the same, different logic
                stack.push(i);
            } else { // Case 3
                while (stack.length && heights[i] < heights[stack[stack.length - 1]]) { // Note the use of while
                    let mid = stack.pop();
                    if (stack.length) {
                        let left = stack[stack.length - 1];
                        let right = i;
                        let w = right - left - 1;
                        let h = heights[mid];
                        result = Math.max(result, w * h);
                    }
                }
                stack.push(i);
            }
        }
        return result;
    }
}

// Example usage:
let solution = new Solution();
let heights = [2, 1, 5, 6, 2, 3];
console.log(solution.largestRectangleArea(heights)); // Output: 10
