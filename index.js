const arr = ["a", "b", "c", "d"]

console.log(arr.length) // Arrayin nece itemden ibaret oldugunu qaytarir

console.log(arr.toString()) // Arrayi bir-birinden vergul vasitesile ayrilmis stringe cevirmek ucun istifade olunur
console.log(arr.join(" * ")) // Arrayi methoda oturduyumuz character vasitesile bir-birinden ayrilmis stringe cevirir

console.log(arr.at(3)) // Arrayin verilmis indexdeki valuesunu qaytarir
console.log(arr[3])

arr.push("e") // Arrayin sonuna methoda oturduyumuz valuenu elave edir

const e = arr.pop() // Arrayin son itemini arraydan cixarir, yeni variablea teyin etmek mumkundur
// Nece defe cagirilsa o qeder itemi silir

arr.pop()
console.log(arr)

arr.shift() // Pop methodunun ters istiqamet ucun olan versiyasi kimidir, arrayin birinci itemini silir ve qaytarir (variablea teyin etmek mumkundur)
arr.unshift("1") // Arrayin evveline item elave etmek ucun istifade olunur, push methodunun ters istiqamet versiyasi kimidir

// delete arr[0] // Verilen indexdeki itemi silir, geride undefined itemler saxlayir, ona gore istifadesi tovsiyye olunmur
console.log(arr)


const odd = [1, 3, 5, 7]
const even = [2, 4, 6, 8]

const allNumbers = odd.concat(even) // Verilmis istenilen sayda arrayi birlesdirir
// const numbers = [...odd, ...even] // Arraylari destructure edib birlesdirir

console.log(allNumbers)

even.copyWithin(2, 0); // Method daxilinde ikinci verilmis indexden baslayaraq itemleri birinci verilmis indexe aparir 


const myArr = [[1, 2], [3, 4], [5, 6]]; // Multi dimensional arraylari tek dimensional arraya cevirmek ucun istifade olunur
const newArr = myArr.flat();
console.log(newArr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi"); // Splice vasitesile arraya hem item elave ede, hem de sile bilersiniz
// birinci index prosesin hansi indexden baslayacapini bildirir
// ikinci index baslangic indexden nece item silineceyini bildirir
// ikinci indexden sonra oturulen valuelar, arraya elave olunur
const spliced = fruits.toSpliced(0, 1); // Arrayi modify etmeden splice methodunun funksionalligini yerine yetirir

const citrus = fruits.slice(3); /* Verilmis indexden baslayaraq arrayin sonuna qeder olan hisseni kesib yeni arraya teyin edir,
methoda iki argument oturulerse birinci indexden ikinciye qeder olan itemleri qaytaracaq
*/

let indexOfApple = fruits.indexOf("Apple") // Oturulen valuenu arrayda tapib indexini qaytarir, methoda ikinci argument oturulerse, axtarmaga hemin indexden baslayir
let lastIndexOfApple = fruits.lastIndexOf("Apple"); // Oturulen valuenu tapdigi en son indexi qaytarir
console.log(indexOfApple)

let containsKiwi = fruits.includes("Kiwi") // Oturulen valuenu arrayda axtarir, tapdiqda true, tapmasa false qaytarir

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction); // Arrayde verilen funksiyadaki serti odeyen ilk elementi qaytarir
// numbers.findIndex(myFunction); // find methodunun eynisidir, sadece tapdigi itemin ozunu yox indexini qaytarir

function myFunction(value, index, array) {
    return value > 18;
}


const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40); // Arrayin sonundan baslayaraq verilmis serti odeyen ilk elementi qaytarir
// temp.findLastIndex(x => x > 40); // findLast methodunun eynisidir, sadece elementin ozu yerine indexini qaytarir


const arr1 = ["c", "a", "d", "b"]
arr1.sort() // Arraydaki itemleri ilk herflerine gore alfabetik olaraq siralayir
arr1.toSorted() // Arrayi modify etmeden sort methodunun prosesini yerine yetirir

arr1.reverse() // Arraydaki itemlerin siralamasini tersine cevirir
arr1.toReversed() // Arrayi modify etmeden reverse methodunun prosesini yerine yetirir

const points = [40, 100, 1, 5, 25, 10];
points.sort((a, b) => a - b); // Numberlardan ibaret arrayi sort etmek ucun bu formada yazmaq lazimdir
console.log(points)


// function myArrayMin(arr) {
//     return Math.min.apply(null, arr);
// } // verilmis arraydaki en kicik reqemi qaytarmaq ucun istifade olunur

// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
// } // verilmis arraydaki en boyuk reqemi qaytarmaq ucun istifade olunur


fruits.map((fruit, index) => {
    console.log(`Index of ${fruit} is ${index}`)
}) // JS-de Loop yazmagin en asan yollarindan biridir

const biggerThan18 = points.filter(item => item > 18) // Arrayda mueyyen serti odeyen itemleri qaytarmaq ucun istifade olunur

console.log(biggerThan18)

let sum = numbers.reduce(myFunction); // Reduce vasitesile biz arraydaki butun elementler uzerinde methoda oturulen funksiyadaki prosesi yerine yetiririk

function myFunction(total, value, index, array) {
    return total + value;
}

const arrWithDuplicates = [1, 1, 2, 2, 3, 4, 4]

const arrWithoutDuplicates = Array.from(new Set(arrWithDuplicates)) // Arraydaki duplicate valuelari temizlemek ucun istifade olunur

console.log(arrWithoutDuplicates)

const users = [
    {
        name: "frefr",
        status: "paid",
    },
    {
        name: "frefr 2",
        status: "unpaid",
    },
    {
        name: "frefr 3",
        status: "unpaid",
    },
]

const unpaidUsers = users.filter(user => user.status === "unpaid")

console.log(unpaidUsers)