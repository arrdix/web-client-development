// Function celciusConverter menerima parameter 'value' bertipe number
function celciusConverter(value: number) {
    // Mengembalikan nilai hasil konversi farenheit ke celcius
    return ((value - 32) * 5) / 9
}

// Function lengthConverter menerima parameter 'value' bertipe number
function lengthConverter(value: number) {
    // Melakukan perbandingan apakah nilai 'value' lebih besar sama dengan 100000
    // Jika true, mengembalikan hasil dari 'value' dibagi 100000 (konversi cm ke km)
    // Jika false, mengembalikan hasil dari 'value' dikali 100000 (konversi km ke cm)
    return value >= 100000 ? value / 100000 : value * 100000
}

// Function isOdd menerima parameter 'value' bertipe number
function isOdd(value: number) {
    // Melakukan perbandingan apakah nilai dari 'value' tidak habis dibagi 2
    // Jika habis, mengembalikan false
    // Jika tidak, mengembalikan true
    return value % 2 !== 0
}

// Function stringRemover menerima parameter 'str' bertipe string dan 'targetStr' bertipe string
function stringRemover(str: string, targetStr: string) {
    // Memisahkan string 'str' berdasarkan separator 'targetStr' menjadi array
    // dan menyimpan hasilnya dalam variabel 'parts'
    const parts = str.split(targetStr)

    // Mengembalikan array 'parts' setelah digabungkan menjadi string menggunakan .join()
    return parts.join('')
}

// Function isPalindrom menerima parameter 'str' bertipe string
function isPalindrom(str: string) {
    // Membalik urutan string
    // .split() untuk memisahkan string 'str' menjadi sebuah array
    // .reverse() untuk membalik urutan array
    // .join() untuk kembali menggabungkan array menjadi sebuah string
    const strReverse = str.split('').reverse().join('')

    // Melakukan perbandingan apakah nilai 'str' sama dengan 'strReverse'
    // Jika berbeda, mengembalikan false
    // Jika sama, mengembalikan true
    return str === strReverse
}

console.log('Konversi celcius: ', celciusConverter(68))
console.log('Konversi cm ke km :', lengthConverter(100000))
console.log('Konversi km ke cm :', lengthConverter(1))
console.log('Angka Ganjil: ', isOdd(3))
console.log('Angka Genap', isOdd(2))
console.log('Hapus string: ', stringRemover('Hello world!', 'ell'))
console.log('String palindrom: ', isPalindrom('madam'))
console.log('String bukan palindrom: ', isPalindrom('madma'))
