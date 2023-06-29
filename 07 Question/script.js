function maxCount(m, n, ops) {
  let minX = m;
  let minY = n;

  for (const [x, y] of ops) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
  }

  return minX * minY;
}
const m = 3;
const n = 3;
const ops = [[2, 2], [3, 3]];

const result = maxCount(m, n, ops);
console.log(result);
