function duplicate (str) {
  var array= str.split('');
  var result = '';
  var controller = 0;

  for (var x = 0; x < array.length; x++) {
    ctr = 0;

    for (var y = 0; y < array.length; y++)
    {
      if (array[x] === array[y]) {
        ctr+= 1;
      }
    }

    if (ctr < 2) {
      result = array[x];
      break;
    }
  }
  return result;
}
console.log(duplicate('abacddbec'));
