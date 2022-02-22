// 先选一个数当作基点，一般选择最后一个数
// 然后遍历arr， 找出这个基点数的比它大的数组集合和比它小的数组集合
// 递归此步骤
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const cur = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= cur) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(left), cur, ...quickSort(right)];
}
console.log(quickSort([1, 3, 3, 6, 2, 4, 1]));
