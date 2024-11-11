const decodeTheRing = function (s, p) {

    // write your code herefunction decodeTheRing(message, pattern) {
    const memo = {};

    function helper(i, j) {
        if (i === pattern.length && j === message.length) {
            return true;
        }

        if (i === pattern.length) {
            return false;
        }

        if (memo[${i},${j}] !== undefined) {
            return memo[${i},${j}];
        }

        let result = false;

        if (pattern[i] === '?') {
            result = helper(i + 1, j + 1);
        } else if (pattern[i] === '*') {
            result = helper(i + 1, j) || (j < message.length && helper(i, j + 1));
        } else {
            if (pattern[i] === message[j]) {
                result = helper(i + 1, j + 1);
            }
        }

        memo[${i},${j}] = result;
        return result;
    }

    return helper(0, 0);
}

 

  };
  
  module.exports = decodeTheRing;