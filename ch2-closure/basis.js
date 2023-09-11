function compteur() {
  let count = 0

  return function () {
    return count++
  }
}

let increment = compteur()

console.log(increment()) // 1
console.log(increment()) // 2
console.log(increment()) // 3
