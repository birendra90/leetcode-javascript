// Problem Link: https://leetcode.com/problems/group-anagrams

/**
  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Example 1:
  Input: strs = ["eat","tea","tan","ate","nat","bat"]
  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

  Example 2:
  Input: strs = [""]
  Output: [[""]]

  Example 3:
  Input: strs = ["a"]
  Output: [["a"]]
*/

// Approach 1- Using hash and sorting
// Time - O(NKlogK) | Space - O(M)

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const getSortedStr = (str) => {
  return [...str].sort().join('');
}

function groupAnagrams(strs) {
  const output = {};
  for (let str of strs) {
    const sortedStr = getSortedStr(str);
    if (!output[sortedStr]) {
      output[sortedStr] = [];
    }
    output[sortedStr].push(str);
  }
  
  return Object.values(output);
};
