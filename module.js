//Modules - Encapsulated code (only share minimum)
//CommonJS - every file is module (by default)
const {myName,yourName} = require('./name')
const sayHi = require('./utils')

const data = require('./alternative-flavour')

require('./mind-grenade')

// sayHi(myName)
// sayHi(yourName)