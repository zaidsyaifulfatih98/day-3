const prompt = require("prompt-sync")({sigint:true}) 
// nama, umur dan status
const UserName = prompt ("masukkan nama anda :")
console.log(UserName)

const age = prompt("masukkan umur anda : ")
console.log(age)

const condition = prompt("masukkan status anda: ")
console.log(condition)

// tanggal lahit
const BirthDate = prompt ("masukkan tanggal lahir anda :")
console.log(BirthDate)
