function minDifference(nums) {
    if (nums.length <= 4) {
        return 0;
    }

    nums.sort((a, b) => a - b);

    return Math.min(
        nums[nums.length - 1] - nums[3],
        nums[nums.length - 2] - nums[2],
        nums[nums.length - 3] - nums[1],
        nums[nums.length - 4] - nums[0]
    );
}


console.log(minDifference([5, 3, 2, 4]));           
console.log(minDifference([1, 5, 0, 10, 14]));      
console.log(minDifference([3, 100, 20]));      
