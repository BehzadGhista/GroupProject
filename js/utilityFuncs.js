  function getRando(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function shuffleArray(arr) {
  var temp = 0;
  var rando = 0;

  for (var i = 0; i < arr.length; i++){
     
    rando = getRando(0,arr.length);
    temp = arr[i];
    arr[i] = arr[rando];
    arr[rando] = temp;
  };

  return arr;
}