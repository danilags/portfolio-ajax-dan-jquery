// rando color
let randomColor = function(req, res) {
  let obj = {}
  let color = '#' + (function co(lor){
    return (lor += [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');

  let pos = Math.ceil(Math.random() * 9)

  obj.color = color
  obj.pos = pos

  res.send(obj)
}

module.exports = {randomColor}
