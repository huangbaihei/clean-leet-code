func fourSumCount(A []int, B []int, C []int, D []int) int {
	m := map[int]int{}
	for _, a := range A {
		for _, b := range B {
			sum := a+b
			m[sum]++
		}
	}
	r := 0
	for _, c := range C {
		for _, d := range D {
			sum := 0-(c+d)
			r += m[sum]
		}
	}
	return r
}