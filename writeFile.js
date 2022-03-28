const {genKeyPair} = require("./genKey.js")
const fs = require("fs")

var {privateKey, publicKey} = genKeyPair()

fs.writeFileSync("./user1/privateKey.pem", privateKey)
fs.writeFileSync("./user1/publicKey.pem", publicKey)

var {privateKey, publicKey} = genKeyPair()

fs.writeFileSync("./user2/privateKey.pem", privateKey)
fs.writeFileSync("./user2/publicKey.pem", publicKey)
