console.log("Hello World")

var day ="monday";
let month = "January";
const year="2025";

//Declaration
let vehicle;

//Assignment
vehicle="Mobil";

//Reassignment
vehicle="Car";

// contoh
phi = 20;
console.log(phi)

//Tidak bisa di reassignment & Number
const PHI = 3.14;

// String
let firstName = "";
let fullName = "Siti";
let lastName = 'Aisyah';
let middleName = `${fullName} Hello`;

// Boolean : true or false
const hasJet = false;
const isMale = true;

// Null
const jet = null;

// Undefined
let shirts = undefined;

shirts=[];
shirts={};

// NaN
console.log(fullName * 20);

console.log(20 + "1"); //hasilnya 201
console.log("20" + 1); //hasilnya 201
console.log("20" + "1"); //hasilnya 201
console.log("20" - "1"); //hasilnya 19

// Return value -> Boolean
/// equal
const isTrue = 1 == "1";
console.log(isTrue) //hasilnya true

const isTrue = 1 == "2";
console.log(isTrue) //hasilnya false

/// strict equal
const isTrue = 1 === "1";
console.log(isTrue) //hasilnya false karena mengecek isi dan tipe data

// Cek Tipe Variabel
const isString = typeof("nama")
console.log(isString) //Nan akan bertipe Number, Null akan bertipe object

// Function
/// Melakukan sesuatu
function printName() {
    console.log(fullName)
}

/// Mengembalikan sesuatu
function getName(){
    return fullName;
}

let namaKu = getName()
console.log(namaKu) //hasilnya akan fullName ("Siti")

// Method
console.log("aisyah", toUpperCase()) //hasilnya akan "AISYAH"


// Write a code to calculate the BMI of a person who weight 60 kg and 170 cm of height
/// Manual
let weight = 60
let height = 168
let bmi = weight / ((height/100) ** 2);
console.log(bmi)

/// Pakai function
function getBMI(weight, height) {
    const bmi = weight / ((height/100) ** 2)
    return bmi
}

console.log(getBMI(60,170))

// Aritmatik Operation (liat slide lengkapnya)
let z = 0
const x = 1
const y = 2

console.log(x--) //error karena constant, kecuali let x

let x = 1
console.log(x--) //hasilnya 1
console.log(--x) //hasilnya 0

// IF dan ELSE
let hariIni="hujan"
if(hariIni !== "hujan"){
    console.log("Ngajar")
} else{
    console.log("Tidak Ngajar")
}

let hariIni="hujan"
function ngajarKah() {
    if(hariIni !== "hujan"){
        return("Ngajar")
    } else{
        return("Main game")
    }
}
console.log(ngajarKah()) //harus ada buka tutup kurung karena kalau tidak, hasilnya function

// ELSE IF : Buat dari kondisi paling spesifik
let hariIni="hujan"
function ngajarKah() {
    if(hariIni !== "hujan"){
        return "Ngajar"
    } else if(hariIni === "panas"){
        return "Minum Es"
    } else {
        return "Main Game"
    }
}
console.log(ngajarKah())

// SWITCH CASE
let hariIni="panas"
function ngajarKahV2() {
    switch(hariIni){
        case "hujan";
            return "Ngajar"
            break;
        case "panas";
            return "Minum Es"
            break;
        default:
            return "Main Game"
    }
}
console.log(ngajarKahV2())

// Dont use ELSE keyword
function ngajarKah() {
    if(hariIni =="hujan"){
        return "Ngajar"
    }
    if(hariIni =="panas"){
        return "Minum Es"
    }  
    return "Main Game"
}
console.log(ngajarKah(hariIni == "salju"))


// LOOPS
console.log("Hello World");

for(let i=0; i<5; i++) {
    console.log(i)
}

console.log("Hello World");

for(let i=0; i<5; i++) {
    console.log("*")
}

// NESTED LOOPS
for(let i=0; i<5; i++) {
    for(let j = 0; j< 5; j++){
        console.log("*")
    }
} //hasilnya 25 *


// Funtion to print every odd number from 0 to 100
function OddNumber(){
    for(let i=1; i<=100; i++) {
        if(i % 2 == 1){
            console.log(i)
        }
}
}

OddNumber()

// Function to print number dengan kelipatan 3 = "Fizz", kelipatan 5 = "Buzz", kelipatan 3 dan 5 ="FizzBuzz"
function OddNumber(num){
    for(let i=1; i<=num; i++) {
        if(i % (3*5) === 0){
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0){
            console.log("Fizz");
        }
        else if(i % 5 === 0){
            console.log("Buzz");
        } else { 
            console.log(i);
        }
}
}
OddNumber(15)

// ARRAY
const DAYS = ['monday', 'tuesday', 'sunday']
console.log(DAYS)

const DAYSV2 = ['wednesday', 3, true]
console.log(DAYSV2[1])

const DAYSV2 = ['wednesday', 3, true]
console.log(DAYSV2.length)

const DAYSV2 = ['wednesday', 3, true]
DAYSV2.push('monday')
DAYSV2.pop()
console.log(DAYSV2.includes('monday'))

const DAYSV2 = ['wednesday', 3, true]
for(let i=0; i < DAYSV2.length; i++) {
    console.log(DAYSV2[i]);
}

DAYSV2[0] = "senin"
console.log(DAYSV2)


// SORT
const NUMBER = [1,2,3,7,34,50];
console.log(NUMBER.sort((a,b) => a-b))


/// SUM, MEAN, MIN, MAX
const NUMBER = [1,2,3,3,34,50];
let sum = 0;
let avg = 0;
let min = NUMBER[0];
let max = NUMBER[0];

for (let i = 0; i < NUMBER.length; i++) {
    sum += NUMBER[i];

    if (max <= NUMBER[i]) {
        max = NUMBER[i];
    }

    if (min >= NUMBER[i]) {
        min = NUMBER[i];
    }
}
avg = sum / NUMBER.length;

console.log(`Sum: ${sum}`);
console.log(`Avg: ${avg}`);
console.log('Min:', min);
console.log('Max:', max);
console.log(NUMBER);