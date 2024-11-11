const getTotalIsles = function (grid) {


  // write your code here
  if (!grid || grid.length === 0) return 0;

  let numIslands = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  function dfs(r, c) {
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') {
          return;
      }

      grid[r][c] = 'W';

      dfs(r + 1, c);
      dfs(r - 1, c);
      dfs(r, c + 1);
      dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {
              numIslands += 1;
              dfs(r, c);
          }
      }
  }

  return numIslands;
};



module.exports = getTotalIsles;