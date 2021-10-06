//1. Khai báo 5 biến đúng và 5 biến sai
console.log('Bai 1')
// 5 biến sai 
// let $username; 
// let user name; 
// let username 
// let 1username; 
// let username1 username 2 username 3;

// 5 biến đúng 
let email = 'letuananh06101997@gmail.com'
console.log(email, typeof email)
let fullname = 'Lê Tuấn Anh'
console.log(fullname, typeof fullname)
let numberVarText = '0981330085'
console.log(numberVarText, typeof numberVarText)
let face = 'Tuấn Anh'
console.log(face, typeof face)


console.log('------------------')
//2 5 bài toán tử dùng + - * / %
console.log('Bai 2')
let o = 10
let h = 5
let z = 4
console.log(o + h - z)
console.log(o - z)
console.log(o / h)
console.log(h % z)
console.log(o - h * z)

console.log('------------------')

//3
console.log('Bai 3')
// 3.1 
console.log('Bai 3.1')
let x1 = 5
console.log(++x1 + x1++ - --x1 - x1--)
// Giải thích:
//  + lần 1: ta có ++x1 khi đó x1 = 6,  kết quả=6 sau đó x1 = 6;
//  + lần 2: Công thêm x1++ ta có ++x1 + x1++ khi đó x1++ = x1, kết quả = 6 + 6 = 12 sau đó tăng x1 = 7
//  + lần 3: Trừ cho --x1 ta có ++x1 + x1++ - --x1 khi đó --x1 = x1 -1 = 6,  kết quả = 6 + 6 - 6 = 6 ; sau đó x1 = 6;
//  + lần 4: Trừ cho x1-- ta có ++x1 + x1++ - --x1 - x1-- khi đó x1-- = x1, kết quả= 6 + 6 - 6 - 6 = 0 sau đó trừ x1 = 5;


// 3.2
console.log('Bai 3.2')

let x2 = 6, y2 = 10
console.log(++y2 - y2++ + x2++ + x2-- - --x2 - --y2)
/**
 * + lần 1: ta có ++y2 = y2 +1 = 11 khi đó kết quả = 11 sau đó x2 = 6, y2= 11;
 * + lần 2: trừ y2++ ta có ++y2 - y2++ khi đó y2++ = y2 = 11, kết quả = 11 - 11= 0 sau đó  x2 = 6, tăng y2 = 12;
 * + lần 3: cộng x2++ ta có ++y2 - y2++ + x2++ khi đó x2++ = x2=6 , kết quả = 11 - 11 + 6 = 6 sau đó tăng x2 = 7 , y2 =12;
 * + lần 4: cộng x2-- ta có ++y2 - y2++ + x2++ + x2-- khi đó x2-- = x2=7 , kết quả = 11 - 11 + 6 + 7 = 13 sai đó trừ x2 = 6 , y2 = 12;
 * + lần 5: trừ --x2 ta có ++y2 - y2++ + x2++ + x2-- - --x2 khi đó --x2 = x2 -1 = 5 , kết quả = 11 - 11 + 6 + 7 - 5= 8 sau đó x2 = 5 , y2 = 12;
 * + lần 6: trừ --y2 ta có ++y2 - y2++ + x2++ + x2-- - --x2 - --y2khi đó --y2 = y2 -1 = 11 , kết quả = 11 - 11 + 6 + 7 - 5 - 11= -3 sau đó x2 = 5 , y2 = 11;
 * 
 */



console.log('Bai 3.3 Lan 2')
let x3 = 10, y3 = 12, z3 = 16
console.log(++x3 - x3++ + z3++ + ++y3 - y3--)
/**
 * Giải thích:
 * + vì ta sử dụng lại các biến x3, y3, z3 nên các các biến sẽ có giá trị x3 = 9, y3 = 11, z3 = 15;
 * +Lần 1: ta có ++x3 = x3 + 1= 10 khi đó kết quả = 10, sau đó tăng x3 = 10, y3 = 11, z3 = 15;
 * +Lần 2: trừ x3++ ta có ++x3 - x3++ khi đó x3++ = x3 = 10, kết quả = 10 - 10 = 0 sau đó  tăng x3 = 11, y3 = 11, z3 = 15;
 * +Lần 3: Cộng z3++ ta có ++x3 - x3++ + z3++ khi đó z3++ = z3 = 15, kết quả = 10 - 10 + 15 = 15 sau đó x3 = 11, y3 = 11, tăng z3 = 16;
 * +Lần 4: cộng ++y3 ta có ++x3 - x3++ + z3++ + ++y3 khi đó ++y3 = y3 + 1 = 12, kết quả = 10 - 10 + 15 + 12 = 27 sau đó x3 = 11, tăng y3 = 12, z3 = 16;
 * +Lần 5: trừ y3-- ta có ++x3 - x3++ + z3++ + ++y3 - y3-- khi đó y3-- = y3 = 12, kết quả =  10 - 10 + 15 + 12 - 12= 15 sau đó x3 = 11, giảm y3 = 11, z3 = 16;
 */
// 3.3
console.log('Bai 3.3')

let x4 = 10, y4 = 12, z4 = 16

console.log(x4++ + z4-- - --x4 + --y4 - y4-- + ++y4 + ++z4 + --z4 + x4--)
/**
 * Giait thích:
 * +Lần 1: ta có x4++ = x4 khi đó kết quả = 10, sau đó tăng x4 = 11, y4 = 12, z34 = 16;
 * +Lần 2: cộng z4-- ta có x4++ + z4-- khi đó z4-- = z4 = 16, kết quả = 10 + 16 = 26 sau đó x4 = 11, y4 = 12, giảm z4 = 15;
 * +Lần 3: trừ --x4 ta có x4++ + z4-- - --x4 khi đó --x4 = x4 -1 = 10, kết quả = 10 + 16  - 10 = 16 sau đó x4 = 10, y4 = 12,z4 = 15;
 * +Lần 4: cộng --y4 ta có x4++ + z4-- - --x4 + --y4 khi đó --y4 = y4 -1 = 11, kết quả = 10 + 16  - 10 +11 = 27 sau đó x4 = 10, giảm y4 = 11,z4 = 15;
 * +Lần 5: trừ y4-- ta có x4++ + z4-- - --x4 + --y4 - y4-- khi đó y4-- = y3 = 11, kết quả = 10 + 16  - 10 +11 - 11= 16 sau đó x4 = 10, giảm y4 = 10, z4 = 15;
 * +Lần 6: trừ ++y4 ta có x4++ + z4-- - --x4 + --y4 - y4-- + ++y4 
 *  khi đó ++y4 = y4 + 1 = 11, kết quả = 10 + 16  - 10 +11 - 11 + 11= 27 sau đó x4 = 10, tăng y4 = 11, z4 = 15;
 * +Lần 7: cộng ++z4 ta có x4++ + z4-- - --x4 + --y4 - y4-- + ++y4 + ++z4
 *  khi đó ++z4 = z4 + 1 = 16, kết quả = 10 + 16  - 10 +11 - 11 + 11 + 16= 43 sau đó x4 = 10, y4 = 11, tăng z4 = 16;
 * +Lần 8: cộng --z4 ta có x4++ + z4-- - --x4 + --y4 - y4-- + ++y4 + ++z4 + --z4
 *  khi đó --z4 = z4 - 1 = 15, kết quả = 10 + 16  - 10 +11 - 11 + 11 + 16 + 15= 58 sau đó x4 = 10, y4 = 11, giảm z4 = 15;
 * +Lần 9: cộng x4-- ta có x4++ + z4-- - --x4 + --y4 - y4-- + ++y4 + ++z4 + --z4 + x4--
 *  khi đó x4-- = x4 = 10, kết quả = 10 + 16  - 10 +11 - 11 + 11 + 16 + 15 + 10 = 68 sau đó giảm x4 = 9, y4 = 11, z4 = 15;
 */



// 4 Khai báo 5 biến với 5 kiểu dữ liệu
console.log('Bai 4')
let m = 10 //Number
console.log(m, typeof m)
let string = 'javascript dễ' // String
console.log(string, typeof string)
let object = {firstName: 'Anh', lastName: 'le'} //Object
console.log(object, typeof object)

let array1 = [1,2,3,4,5] 
console.log(array1, typeof array1)

let boolean = true 
console.log(boolean ,typeof boolean)

// 5 Khai báo biến với kiểu dữ liệu Array như sau: [1,2,3,4,5,6,7,8,9,10]

console.log('Bai 5')
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < array.length; i++){
    console.log(array[0] + array[1])
    console.log(array[0] * array[9])
}

// Khai báo 1 biến với kiểu dữ liệu Object, bào gồm firstName, lastName, age, favorite// 5
console.log('Bai 6')
// 6.1
console.log('Bai 6.1')
let object1 = { firstName: 'Le', lastName: 'Anh', age: '18', favourite: 'game & music' }
let text = 'Tuấn'
object1.firstName = text
let text1 = 'Anh'
object1.lastName = text1

// 6.2
console.log('Bai 6.2')
 object1 = object1.firstName +' '+ object1.lastName
console.log(object1)


