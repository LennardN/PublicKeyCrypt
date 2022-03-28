const crypto = require("crypto")

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
const recInput = () => {
    rl.question('Welcher User bist du? ', user => {
        //console.log(user, typeof user)
        switch (user){
            case "1":
                console.log(user)
                
                rl.question('Nachricht an User 2: ', msg => {
                    console.log(msg)
                    rl.close()
                })
                
            break
            case "2":
                console.log(user)
                rl.question('Nachricht an User 1: ', msg => {
                    console.log(msg)
                    rl.close()
                })
                
            break
            default:
                recInput()
        }
    })
}

recInput()