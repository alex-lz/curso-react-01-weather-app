// Objetos
const obj = { name: "Alex", nick: "Alexander" }
const { name: myName, nick: myNick } = obj

// Vectores
const myArray = ['a','b']
const [x,y] = myArray

// Valor por defecto
const { x, y = 1 } = {}

// Elision
const [, , x, y] = ['a','b','c','d']

// Rest oparator
const [x, ...y] = ['a','b','c']



// WeatherIcons => http://erikflowers.github.io/weather-icons/
