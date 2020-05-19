int fourSumCount(vector<int>& A, vector<int>& B, vector<int>& C, vector<int>& D) {
  int N = A.size()
  int res = 0
  unordered_map<int, int> m;
  // n^2
  for (int k = 0; k < N; ++k) {
    for (int p = 0; p < N; ++p) {
      int tmp = C[k] + D[p];
      if (m.count(tmp) > 0) {
        m[tmp] += 1
      } else {
        m[tmp] = 1
      }
    }
  }
  for (int i = 0; i <N; ++i) {
    for (int j = 0; j <N; ++j) {
      int tmp = 0-A[i]-B[j]
      if (m.count(tmp) > 0) {
        res += m[tmp];
      }
    }
  }
  return res
}