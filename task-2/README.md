# Task 2

📝 TypeScript Excercise 2 Code Explanation

## No 1

TASK: Write a program that takes a temperature in Fahrenheit as input and converts it to Celsius.

```sh
function celciusConverter(value: number) {
    return ((value - 32) * 5) / 9
}

console.log('Konversi celcius: ', celciusConverter(68))
```

Parameter: value dengan tipe number.
Logika: Suhu Fahrenheit dikonversi ke Celsius menggunakan rumus: `(value - 32) * 5 / 9`
Output: Mengembalikan suhu dalam Celsius.

## No 2

TASK: Write a code to convert centimeter to kilometer or vice versa.

```sh
function lengthConverter(value: number) {
    return value >= 100000 ? value / 100000 : value * 100000
}

console.log('Konversi cm ke km :', lengthConverter(100000))
console.log('Konversi km ke cm :', lengthConverter(1))
```

Parameter: value dengan tipe number.
Logika:
-- Jika value ≥ 100000, dianggap dalam sentimeter dan dikonversi ke kilometer dengan membagi 100000.
-- Jika kurang dari 100000, dianggap dalam kilometer dan dikonversi ke sentimeter dengan mengalikan 100000.
Output: Mengembalikan hasil konversi.

## No 3

TASK: Write a function that takes an integer n as input and returns true if n is odd and false if n is even.

```sh
function isOdd(value: number) {
    return value % 2 !== 0
}

console.log('Angka Ganjil: ', isOdd(3))
console.log('Angka Genap', isOdd(2))
```

Parameter: value dengan tipe number.
Logika: value % 2 menghitung sisa bagi value dengan 2. Jika hasilnya bukan, maka bilangan tersebut ganjil.
Output: Mengembalikan true jika bilangan ganjil, dan false jika bilangan genap.

## No 4

TASK: Write a code to remove the first occurrence of a given “search string” from a string.

```sh
function stringRemover(str: string, targetStr: string) {
    const parts = str.split(targetStr)
    return parts.join('')
}

console.log('Hapus string: ', stringRemover('Hello world!', 'ell'))
```

Parameter:
-- str dengan tipe string sebagai string utama yang akan dimodifikasi.
-- targetStr dengan tipe string sebagai string yang ingin dihapus dari string utama.
Logika:
-- `str.split(targetStr)` membagi string utama menjadi array berdasarkan kemunculan targetStr.
-- `parts.join('')` menggabungkan kembali array menjadi string tanpa targetStr.
Output: Mengembalikan string baru setelah targetStr dihapus dari str.

## No 5

TASK: Write a code to check whether a string is a palindrome or not.

```sh
function isPalindrom(str: string) {
    const strReverse = str.split('').reverse().join('')
    return str === strReverse
}

console.log('String palindrom: ', isPalindrom('madam'))
console.log('String bukan palindrom: ', isPalindrom('madma'))
```

Parameter: str bertipe string.
Logika:
-- `.split('')` membagi string menjadi array karakter.
-- `.reverse()` membalik urutan karakter dalam array.
-- `.join('')` menggabungkan kembali karakter menjadi string.
-- Membandingkan string asli dengan string yang dibalik. Jika sama, string tersebut adalah palindrom.
Output: Mengembalikan true jika string adalah palindrom, dan false jika tidak.

## Usage

Follow these steps to set up and run the project locally:

**Compile and run the project**

```sh
npx ts-node code.ts
```
