/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    let index=0;
    let result;
    nums.forEach((num)=>{
        let i = target - num      

        if(map.has(i)){
            result = [map.get(i), index]
            
        }
        map.set(num, index)
        
        index++
    })

   return result || []
};
