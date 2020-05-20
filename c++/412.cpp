class Solution {
  public: 
    vector<string> fizzBuzz(int n) {
      vector<string> ans;
      map<int, string> fizzDict;
      fizzDict[3] = "Fizz";
      fizzDict[5] = "Buzz";

      for (int i = 1; i <= n; ++i) {
        string tmp = "";
        for (auto f : fizzDict) if (i % f.first == 0) tmp += f.second;
        if (tem.empty()) tmp = to_string(i);
        ans.emplace_back(tmp)
      }
      return ans;
    }
}