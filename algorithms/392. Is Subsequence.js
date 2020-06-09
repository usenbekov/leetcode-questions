/*
392. Is Subsequence
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  return isSubsequence1(s, t);
  //return isSubsequence2(s, t);
  //return solution3(s, t);
  //return solution4(s, t);
};

const isSubsequence1 = (s, t) => {
    let j = 0;
    for (let i = 0; i < s.length; i++) {
        while (s[i] != t[j++]) {
            if (j >= t.length) return false;
        }
    }
    return true;
}

// If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?
const indexes = new Map();
const isSubsequence2 = (s, t) => {
    let indx = indexes.get(t);
    if (!indx) {
        indx = new Map();
        for (let i = 0; i < t.length; i++) {
            if (!indx.has(t[i])) indx.set(t[i], []);
            indx.get(t[i]).push(i);
        }
        indexes.set(t, indx);
    }
    
    let index = 0;
    for (let i = 0; i < s.length; i++) {
        const indxList = indx.get(s[i]);
        if (!indxList) return false;
        
        let low = 0;
        let high = indxList.length-1;
        while(low <= high) {
            let mid = Math.floor((low+high)/2);
            if (index <= indxList[mid]) high = mid-1;
            else low = mid + 1;
        }
        
        if (low > indxList.length-1) return false;
        
        low = Math.max(0, low);
        index = indxList[low] + 1;
    }
    
    return true;
}

var solution3 = function(s, t, i = 0, len = 0) {
  if (len === s.length) return true;
  if (i >= t.length) return false;
  
  if (t[i] === s[len]) {
    return solution3(s, t, i+1, len+1);
  }
  
  return solution3(s, t, i+1, len);
}

/*
  a h b g d c
a 1 1 1 1 1 1
b 1 1 2 2 2 2
c 1 1 2 2 2 3
*/

var solution4 = function(s, t) {
  const dp = [];
  for (let i = 0; i <= s.length; i++) {
    dp[i] = [0];
    for (let j = 1; j <= t.length; j++) {
      if (i === 0) dp[i][j] = 0;
      else if (s[i-1] === t[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }
  return dp[s.length][t.length] === s.length;
}




