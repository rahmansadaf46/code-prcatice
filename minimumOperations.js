var minimumOperations = function (nums, start, goal) {
    for(var i = 0; i < nums.length; i++) {
        let result = nums[i] + start;
        if(result == goal) {
            return 1;
        }
        else{
            for (var j = 0; j < nums.length; j++) {
                let result2 = result - nums[j];
                let result3 = result + nums[j];
                if (result2 == goal) {
                    return 2;
                }
                else {
                    for (var k = 0; k < nums.length; k++) {
                        let result4 = result2 - nums[k];
                        let result5 = result2 + nums[k];
                        let result6 = result3 - nums[k];
                        let result7 = result3 + nums[k];
                        if (result4 == goal) {
                            return 3;
                        }
                        else if (result5 == goal) {
                            return 3;
                        }
                        else if (result6 == goal) {
                            return 3;
                        }
                        else if (result7 == goal) {
                            return 3;
                        }
                    }
                }
            }
        }
       
    }
    return -1;
};


console.log(minimumOperations([2, 4, 12],2,12));