const {users} = require('../db/db.json')


const userFromAR = () => users.filter( (user) => user.country === "Argentina")
console.log(userFromAR())

console.log("///////////////")

const userWithName = () => users.filter( (user) => user.first_name.toLowerCase().includes("de"))
console.log(userWithName())
