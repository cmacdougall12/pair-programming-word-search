const transpose = function(matrix) {
    // Put your solution here
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      result[i] = [];
      for (let j = 0; j < matrix.length; j++) {
        result[i].push(matrix[j][i]);
      }
    }
    return result;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    let searched = false;
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            searched = true;
            return searched;
        }
    }
    for (l of verticalJoin) {
        if (l.includes(word)) {
            searched = true;
            return searched;
        }
    }

    return false;
}
  

module.exports = wordSearch