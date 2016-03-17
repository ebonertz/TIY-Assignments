function duplicate (str) {
  var array= str.split('');
  var result = '';
  var counter = 0;

  for (var x = 0; x < array.length; x++) {
    counter = 0;

    for (var y = 0; y < array.length; y++)
    {
      if (array[x] === array[y]) {
        counter+= 1;
      }
    }

    if (counter < 2) {
      result = array[x];
      break;
    }
  }
  return result;
}
console.log(duplicate('abacddbec'));
