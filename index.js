var twoSum = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (target == nums[j] + nums[i]) {
                return console.log([i, j]) ;
            }
        }
    }
    // In case there is no solution, we'll just return null
    return null;
};

twoSum([2, 7, 11, 15],9);


