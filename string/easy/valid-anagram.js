// Problem Link: https://leetcode.com/problems/valid-anagram

/**
  Given two strings s and t, return true if t is an anagram of s, and false otherwise.
  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
  typically using all the original letters exactly once.

  Example 1:
  Input: s = "anagram", t = "nagaram"
  Output: true
  
  Example 2:
  Input: s = "rat", t = "car"
  Output: false
*/

// Approach 1- Using hash
// Time - O(N) | Space - O(N)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 function isAnagram(s, t) {
  let strObj = {};
    // Checking both string's length is equal or not
    if (s.length !== t.length) {
        return false;
    }
    for(let str of s) {
      strObj[str] = (strObj[str] || 0) + 1;
    }
    for(let str of t) {
      if (!strObj[str]) {
          return false;
      }
      strObj[str]--;
    }
    return Object.values(strObj).every(str => str === 0)
};

// Approach 2 - Using sorting and compare the both strings
// Time - O(NlogN) | Space - O(1)
