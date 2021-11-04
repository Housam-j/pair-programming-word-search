const transpose = function(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let temp = [];
      if (res[j]) {
        res[j].push(matrix[i][j]);
      } else {
        temp.push(matrix[i][j]);
      }
      res.push(temp);
    }
  }
  return (res);
};

const checkArray = function(array, word) {
  for (const l of array) {
    if (l.includes(word)) return true;
  } return false;
};

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;
  const arr = letters.map(ls => ls.join(''));
  if (checkArray(arr, word)) {
    return true;
  } else {
    let arr = transpose(letters);
    arr = arr.map(ls => ls.join(''));
    if (checkArray(arr, word)) return true;
  }
  return false;
};


wordSearch([
  ['A', 'S', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['S', 'E', 'I', 'A', 'F', 'E', 'L', 'D'],
  ['Y', 'N', 'C', 'F', 'Q', 'U', 'A', 'L'],
  ['H', 'F', 'J', 'T', 'E', 'V', 'R', 'G'],
  ['W', 'I', 'C', 'S', 'Y', 'E', 'R', 'L'],
  ['B', 'E', 'R', 'E', 'N', 'E', 'Y', 'B'],
  ['U', 'L', 'T', 'W', 'A', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
  ['E', 'S', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SENFIELDS');

module.exports = wordSearch;