class Solution {
public:
    double findMaxAverage(vector<int>& nums, int k) {

        double currentSum = 0.0;
        double currentAvg = 0.0;
        double maxAvg = 0.0;

        for (int i = 0; i < k; i++) {
            currentSum += nums[i];
        }

        maxAvg = currentSum / k;

        for (int i = k; i < nums.size() ; i++) {
            currentSum += nums[i];
            currentSum -= nums[i - k];

            currentAvg = currentSum / k;
            if (currentAvg > maxAvg) {
                maxAvg = currentAvg;
            }
        }

        return maxAvg;
    }
};