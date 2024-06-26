// 位运算解决
// 这题说的是只有一个数出现了一次，其他数字都出现了2次，让我们求这个只出现一次的数字。这题使用位运算是最容易解决的，关于位运算有下面几个规律

// 1^1=0;

// 1^0=1;

// 0^1=1;

// 0^0=0;



// 也就说0和1异或的时候相同的异或结果为0，不同的异或结果为1，根据上面的规律我们得到

// a^a=0；自己和自己异或等于0

// a^0=a；任何数字和0异或还等于他自己

// a^b^c=a^c^b；异或运算具有交换律

// 有了这3个规律，这题就很容易解了，我们只需要把所有的数字都异或一遍，最终的结果就是我们要求的那个数字。来看下代码

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // let obj = {}
  // for (let i = 0; i < nums.length; i++) {
  //     if (!obj[nums[i]]) {
  //        obj[nums[i]] = 1
  //     } else {
  //        obj[nums[i]]++
  //     }

  // }
  // for(let i in obj) {
  //     if (obj[i] === 1) return i
  // }
  //  let res = nums[0]
  // for(let i=1; i<nums.length; i++) {
  //     res ^= nums[i]
  // }

  // return res;

  return nums.reduce((a, b) => a ^ b)
};