/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    return solution1(arr, k);
};

var solution1 = function(arr, k) {
    const dp = [];
    for (let i = 0; i < arr.length; i++) {
        var curr = arr[i];
        for (let j = 0; j < k && i-j >= 0; j++) {
            curr = Math.max(curr, arr[i-j]);
            dp[i] = Math.max(dp[i] || 0, (dp[i-j-1] || 0) + curr * (j+1));
        }
    }
    return dp[arr.length-1];
}

