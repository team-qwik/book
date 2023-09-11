const compteur = (function () {
  let count = 0

  function update(val) {
    count += val
  }

  return {
    increment: function () {
      update(1)
    },
    decrement: function () {
      update(-1)
    },
    valeur: function () {
      return count
    }
  }
})()

console.log(compteur.valeur()) // 0

compteur.increment() // ajoute 1 à count 1
compteur.increment() // ajoute 1 à count 2
console.log(compteur.valeur()) // 2

compteur.decrement() // enlève 1 à count 1
console.log(compteur.valeur()) // 1
