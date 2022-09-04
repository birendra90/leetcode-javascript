// Problem Link: https://leetcode.com/problems/contains-duplicate

/**
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
*/

/**
  Example 1:
  Input: nums = [1,2,3,1]
  Output: true

  Example 2:
  Input: nums = [1,2,3,4]
  Output: false
  
  Example 3:
  Input: nums = [1,1,1,3,3,4,3,2,4,2]
  Output: true
 */

// Approach 1- Using hash
// Time - O(N) | Space - O(N)

/**
 * Check Array contains duplicate
 * @param {number[]} nums
 * @return {boolean}
 */
 function containsDuplicate(nums) {
  // Defined object to check the element is alredy exist or not
  let numbers = {};
  for (let num of nums ) {
      // checking element is exist or not
      if (numbers[num]) {
        return true;
      } else {
        // If number is not available in object then initialize with 1
        numbers[num] = 1;
      }
  }
  return false;
};

// Approach 2 - Using sorting
// Time - O(NlogN) | Space - O(1)
