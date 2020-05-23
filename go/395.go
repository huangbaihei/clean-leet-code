func longestSubstring(s string, k int) int {
	if len(s) < k {
		return 0
	}
	m := make(map[rune]int, 0)
	for _, i2 := range s {
		m[i2]++
	}
	rs := []rune(s)
	bg, end := 0, len(s)
	for ; bg < len(rs); bg++ {
		if m[rs[bg]] >= k {
			break
		}
	}
	for ; end > 1; end-- {
		if m[rs[end - 1]] >= k {
			break
		}
	}
	if end-bg < k {
		return 0
	}
	for i := bg; i<end; i++ {
		if m[rs[i]] < k {
			return int(math.Max(float64(longestSubstring(s[bg:i],k)), float64(longestSubstring(s[i+1:end],k))))
		}
	}
	return end - bg
}