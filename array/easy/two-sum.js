// Problem Link: https://leetcode.com/problems/two-sum

/**
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]
*/

// Approach 1- Using hash
// Time - O(N) | Space - O(N)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(s, t) {
  let hashObj = {};
  for (let i = 0; i < nums.length; i++) {
    hashObj[nums[i]] = i + 1;
  }
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    const index = hashObj[diff] - 1;
    if(hashObj[diff] && i !== index) {
      return [i, index];
    }
  }
};

// Approach 2 - Using sorting and two pointers
// Time - O(NlogN) | Space - O(1)
