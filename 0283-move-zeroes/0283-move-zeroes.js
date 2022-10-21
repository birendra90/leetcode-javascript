/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let firstIndex = -1;
    for(let index = 0; index < nums.length; index++) {
        if (nums[index] !== 0) {
            firstIndex++;
            nums[firstIndex] = nums[index];
        }
    }
    while(firstIndex < nums.length - 1) {
        firstIndex++;
        nums[firstIndex] = 0;
    }
    return nums;
};