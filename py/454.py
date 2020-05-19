# class Solution:
#   def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
#     dic = collections.Counter(a + b for a in A for b in B)
#     return sum(dic.get(- c - d, 0) for c in C for d in D)

class Solution(object):
  def fourSumcount(self, A, B, C, D):
    """
    :type A: List[int]
    :type B: List[int]
    :type C: List[int]
    :type D: List[int]
    :rtype: int
    """
    # 遍历A,B 计算A,B所有元素两两相加的和，并将计算结果存入dict sumNum中， sumNum的k为和的数值,v为两元素相加和为k的数量
    sumNum = dict()
    res = 0
    for a in A: # 时间复杂度 O(n2)
      for b in B:
        s = a + b
        if s not in sumNum:
          sumNum[s] = 1
        else:
          sumNum[s] += 1
    # 计算C,D的和为K, 并检查sumNum中是否存在-k，存在则累计sumNum[-k]
    for c in C:
      for d in D:
        k = c + d
        if -k in sumNum: # -k 存在则 -k +k 即为0
          res += sumNum[-k]
    return res
      