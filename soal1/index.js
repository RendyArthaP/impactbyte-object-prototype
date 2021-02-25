String.prototype.balikKata = function() {
  let string = "halo"
  return string.split("").reverse().join("")
}
let test = "halo"
console.log(test.balikKata())