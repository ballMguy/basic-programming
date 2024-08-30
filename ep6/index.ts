const score: number[] = [10,23,26,30,33] //Array Manipulation
let sum: number = 0
for (let i = 0; i < score.length; i++) {
    sum = sum + score[i]
}
const avg = sum / score.length
console.log(`Total = ${sum}`)
console.log(`Average = ${avg}`)

const studentsName: string = 'แนน,ฟู,บี,อ้นจี้,ลัคกี้,นัท,เอ็ม,ออม,ปลิ้ม,ก็อต'

const studentsNameArray = studentsName.split(',')
console.log(studentsNameArray.toString())
console.log(studentsNameArray.join('9'))

const animalsList: string = 'หมา*แมว*กระต่าย*หมี'
const animalsArray = animalsList.split("*")
animalsArray.pop()
animalsArray.push('กะปิปลาร้า')
console.log(animalsArray)
console.log(animalsArray.join('*'))

const fruits: string[] =["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.sort())
console.log(fruits.reverse())

const me = {
    firstName: "Supaluk",
    lastName: "Yodjan",
    age: 20
}
