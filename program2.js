const decodeTheRing = function (s, p) {

    // write your code here
    const m = message.length;
    const n = pattern.length;
    const dp = Array(n + 1).fill(false).map(() => Array(m + 1).fill(false));
    
    dp[0][0] = true;

    for (let i = 1; i <= n; i++) {
        if (pattern[i - 1] === '*') {
            dp[i][0] = dp[i - 1][0];
        }
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (pattern[i - 1] === '*') {
                dp[i][j] = dp[i - 1][j] || dp[i][j - 1];
            } else if (pattern[i - 1] === '?' || pattern[i - 1] === message[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }

    return dp[n][m];
};



  
  module.exports = decodeTheRing;