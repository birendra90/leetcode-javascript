// Problem Link: https://leetcode.com/problems/reverse-string

/**
  Write a function that reverses a string. The input string is given as an array of characters s.
  You must do this by modifying the input array in-place with O(1) extra memory.

  Example 1:
  Input: s = ["h","e","l","l","o"]
  Output: ["o","l","l","e","h"]

  Example 2:
  Input: s = ["H","a","n","n","a","h"]
  Output: ["h","a","n","n","a","H"]
*/

// Approach 1- Using two pointers
// Time - O(N) | Space - O(1)

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
function swapChar(s, start, end) {
  const temp = s[start];
  s[start] = s[end];
  s[end] = temp;
}

function reverseString(s) {
  let start = 0;
  let end = s.length - 1;
  while(start < end) {
      swapChar(s, start, end);
      start++;
      end--;
  }
};
