var person = ['Adam', 29]
var personTwo = ['Blanka', 28]

function helloAll(name, age) {
  console.log(`Hi ${name}, you are ${age}`)
}

helloAll(...person)
helloAll(...personTwo)

var names = ['Mike', 'Ben']
var final = ['Andrew']

final = [final, ...names]

final.forEach(function (element) {
  console.log(`Hi ${element}`)
})
