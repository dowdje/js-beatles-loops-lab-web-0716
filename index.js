function theBeatlesPlay(arr_mus, arr_inst){
  var new_arr = []
  for(var i = 0; i < arr_mus.length; i++){
    var play = `${arr_mus[i]} plays ${arr_inst[i]}`
    new_arr.push(play);
  }
  return new_arr
}

function johnLennonFacts(arr_facts){
  var i = 0
  while( i < arr_facts.length){
   arr_facts[i] += "!!!"

    i++
  }
  return arr_facts
}

function iLoveTheBeatles(num) {
  var arr = []
  var i = 0
  do {
    arr.push("I love the Beatles!")
    if (num >14){
      return [ 'I love the Beatles!' ]
    }

    
  } while (i++ < num)
  return arr
}