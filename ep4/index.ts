function sayHi(dayOfWeek: number) {
    switch (dayOfWeek) {
        case 1:
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2:
            console.log('สวัสดีวันจันทร์')
            break
        case 3:
            console.log('สวัสดีวันอังคาร')
            break
        case 4:
            console.log('สวัสดีวันพุธ')
            break
        case 5:
            console.log('สวัสดีวันพฤหัสบดี')
            break
        case 6:
            console.log('สวัสดีวันศุกร์')
            break
        case 7:
            console.log('สวัสดีวันเสาร์')
            break
        default:
            console.log('วันที่ไม่ถูกต้อง')
            break
    }
}
sayHi(8)

function getBMI(weight: number, height: number) {
    let BMI: number = weight / (height * height)
    switch (true) {
        default:
            console.log('ผิดพลาด')
            break
        case BMI > 30:
            console.log('อ้วนมาก / โรคอ้วนระดับ 3')
            break
        case BMI >= 25 && BMI <= 29.90:
            console.log('อ้วนมาก / โรคอ้วนระดับ 2')
            break
        case BMI >= 23 && BMI <= 24.90:
            console.log('อ้วนมาก / โรคอ้วนระดับ 1')
            break
        case BMI >= 18.50 && BMI <= 22.90:
            console.log('ปกติ สุขภาพดี')
            break
        case BMI < 18.50:
            console.log('น้ำหนักน้อย / ผอม')
            break
    }
}
getBMI(45,170)