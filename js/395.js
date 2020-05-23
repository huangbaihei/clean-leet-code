/**
 * @param {string} s 
 * @param {number} k 
 * @return {number}
 */
var longestSubstring = function(s, k) {
  const count = (left, right) => {
    if (right - left + 1 < k) return 0
    let times = new Map()
    // 统计各单词出现频率
    for (let i = left; i <= right; i++) {
      if (times.has(str[i])) {
        times.set(str[i], times.get(str[i])+1)
      } else {
        times.set(str[i], 1)
      }
    }
    // 如果该字符出现频次小于K, 则不可能出现在结果子串中
    // 分别排除，挪动两个指针
    while(right - left + 1 >= k && times.get(str[left]) < k) {
      ++left
    }
    while(right - left + 1 >= k && times.get(str[right]) < k) {
      --right
    }
    // 排除子串中包含符合要求的字符， 但是这个长度不会出现对应的概率
    if(right - left + 1 < k) return 0

    // debugger
    // 再对子串进行处理
    for (let i = left; i <= right; i++) {
      // 如果发现不满足的字符出现在子串中，则分别查看改字符左右两边
      if (times.get(str[i] < k)) {
        return Math.max(count(left, i-1), count(i+1, right))
      }
    }
    return right - left + 1
  }
  const str = s.split('')
  return count(0, s.length - 1)
}