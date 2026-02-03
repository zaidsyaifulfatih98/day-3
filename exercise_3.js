const prompt = require("prompt-sync")({sigint:true}) 
// nama, umur dan status
const UserName = prompt ("masukkan nama anda :")
console.log(UserName)

const age = prompt("masukkan umur anda : ")
console.log(age)

const condition = prompt("masukkan status anda: ")
console.log(condition)

// tanggal lahir
const BirthDate = prompt ("masukkan tanggal lahir anda :")
console.log(BirthDate)

// time left for retire
const RetireAge = 65;
const birthDateObj = new Date(BirthDate);

if (Number.isNaN(birthDateObj.getTime())) {
	console.log("Format tanggal lahir tidak valid. Gunakan format YYYY-MM-DD.");
} else {
	const retireDate = new Date(
		birthDateObj.getFullYear() + RetireAge,
		birthDateObj.getMonth(),
		birthDateObj.getDate()
	);
	const today = new Date();
	const diffMs = retireDate - today;
	const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

	if (diffDays <= 0) {
		console.log("Anda sudah memasuki usia pensiun.");
	} else {
		const diffYears = Math.floor(diffDays / 365);
		console.log(
			"Sisa waktu sampai pensiun: " + diffYears + " tahun (" + diffDays + " hari)"
		);
	}
}
 

