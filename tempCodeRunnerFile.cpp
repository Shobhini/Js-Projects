#include stdc++;//h;

class solution{
vector<int> ans;
unordered_map<int, int>mp;
int n=arr.size();
vector<int> findDuplicate(vector<int> arr){
    for(int i=0; i<n; i++){
      mp[arr[i]++];
    }
    for(auto& it: mp){
        if(it.second == 2) ans.push_back(it.first);
    }
    return ans;

}
};