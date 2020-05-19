/**
 * @param {number[]} A 
 * @param {number[]} B 
 * @param {number[]} C 
 * @param {number[]} D 
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
  const tmpMap = new Map()
  for (let ic = 0; ic < C.length; ic++) {
    for (let id = 0; id < D.length; id++) {
      const sumC_D = C[ic] + D[id]
      const hasSumC_D = tmpMap.has(sumC_D)
      if (hasSumC_D) {
        tmpMap.set(sumC_D, tmpMap.get(sumC_D) + 1)
      } else {
        tmpMap.set(sumC_D, 1)
      }
    }
  }
  let count = 0
  for (let ia = 0; ia < A.length; ia++) {
    for (let ib = 0; ib < B.length; ib++) {
      const sumA_B = A[ia] + B[ib]
      tmpMap.has(-sumA_B) && (count = count + tmpMap.get(-sumA_B))
    }
  }
  return count
}
