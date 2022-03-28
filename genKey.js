const {generateKeyPairSync} = require("crypto")
module.exports.genKeyPair = genKeyPair = () => {
    const {privateKey, publicKey} = generateKeyPairSync('rsa', {
        modulusLength: 2048,
        publicKeyEncoding: {
            type: "spki",
            format: "pem"
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
        }
    })
    return {privateKey, publicKey}
}