// Buat array dengan jumlah index 100 dengan nilai random

const randomNumber = [];
for (let i = 0; i < 100; i++){
    randomNumber.push(Math.floor(Math.random() * 50) + 1);
}

console.log("\n100 nilai random\n")
console.log(randomNumber)
console.log("\nPanjang dari array bilangan adalah " + randomNumber.length + "\n")

// Pecah menjadi 2 array berdasarkan index ganjil ataupun index genap

const indexEven = [];
const indexOdd = [];
for (let i = 0; i < randomNumber.length; i++){
    if ((i+2)%2==0) {
        indexEven.push(randomNumber[i]);
    } else {
        indexOdd.push(randomNumber[i]);
    }
}

console.log("Array dengan index genap")
console.log(indexEven)
console.log("\nArray dengan index ganjil")
console.log(indexOdd)

// Mencari perhitungan min, max, total, dan rata-rata
// Array index genap

// Nilai minimum dan maksimum dari array index genap
let maxEven = indexEven[0], minEven = indexEven[0];

for (let i = 0; i < indexEven.length; i++){
    if (indexEven[i] > maxEven){
        maxEven = indexEven[i];
    } else if (indexEven[i] < minEven) {
        minEven = indexEven[i];
    }
}

console.log("\nNilai maksimal dari array index genap adalah = "+maxEven)
console.log("Nilai minimal dari array index genap adalah = "+minEven)

// Array index ganjil

// Nilai minimum dan maksimum dari array index ganjil
let maxOdd = indexOdd[0], minOdd = indexOdd[0];

for (let i = 0; i < indexOdd.length; i++){
    if (indexOdd[i] > maxOdd){
        maxOdd = indexOdd[i];
    } else if (indexOdd[i] < minOdd) {
        minOdd = indexOdd[i];
    }
}

console.log("\nNilai maksimal dari array index ganjil adalah = "+maxOdd)
console.log("Nilai minimal dari array index ganjil adalah = "+minOdd)

// Total dan rata-rata dari kedua array

function totalValue(randomNumber) {
    let total = 0
    for (let i = 0; i < randomNumber.length; i++) {
        total += randomNumber[i]
    }

    return total
}

console.log ("\nArray index genap")
totalEven = totalValue(indexEven)
averageEven = totalEven / indexEven.length
console.log(`Nilai total dari array index genap adalah ${totalEven}`)
console.log(`Nilai rata-rata dari array index genap adalah ${averageEven}`)

console.log("\nArray dengan index ganjil")
totalOdd = totalValue(indexOdd)
averageOdd = totalOdd / indexOdd.length
console.log(`Nilai total dari array index ganjil adalah ${totalOdd}`)
console.log(`Nilai rata-rata dari array index ganjil adalah ${averageOdd}`)

// Membandingkan hasil kedua array
// Perbandingan min & max dari kedua array

console.log("\nPerbandingan dari kedua array\n")
if (maxOdd == maxEven) {
    console.log("Nilai max pada kedua array nilainya sama.")
} else if (maxOdd > maxEven) {
    console.log("Nilai max pada array index ganjil lebih besar.")
} else if (maxOdd < maxEven) {
    console.log("Nilai max pada array index genap lebih besar.")
}

if (minOdd == minEven) {
    console.log("Nilai min pada kedua array nilainya sama.")
} else if (minOdd > minEven) {
    console.log("Nilai min pada array index ganjil lebih besar.")
} else if (minOdd < minEven) {
    console.log("Nilai min pada array index genap lebih besar.")
}

// Perbandingan total dan rata-rata
if (totalOdd == totalEven) {
    console.log("Total pada kedua array nilainya sama.")
} else if (totalOdd > totalEven) {
    console.log("Total dari array index ganjil lebih besar.")
} else if (totalOdd < totalEven) {
    console.log("Total dari array index genap lebih besar.")
}

if (averageOdd == averageEven) {
    console.log("Nilai rata-rata pada kedua array nilainya sama.")
} else if (averageOdd > averageEven) {
    console.log("Nilai rata-rata dari array index ganjil lebih besar.")
} else if (averageOdd < averageEven) {
    console.log("Nilai rata-rata dari array index genap lebih besar.")
}