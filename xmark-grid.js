const finalPosition = function (moves) {
  let x = 0;
  let y = 0;
  let arr = [];
  for (let move of moves) {
    switch (move) {
      case 'north':
        y += 1;
        break;
      case 'west':
        x -= 1;
        break;
      case 'south':
        y -= 1 
        break;
      case 'east':
        x += 1;
        break;
      default:
        break;
    }
  }
  arr.push(x);
  arr.push(y);
  return arr
}


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));