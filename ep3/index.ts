function ทหาร(sex: string, height: number ,weight: number){
    if(sex === 'male' && height > 170 || (weight > 50 && weight <= 110)){
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่ผ่านเกณฑ์')
    }
}

ทหาร('male', 170, 49)

function BMIs(height : number, weight: number) {
    let BMI: number = weight / (height * height)
    if(BMI > 30) {
        console.log('อ้วนมาก / โรคอ้วนระดับ 3')
    } else if(BMI >= 25 && BMI <= 29.90) {
        console.log('อ้วนมาก / โรคอ้วนระดับ 2')
    } else if(BMI >= 23 && BMI <= 24.90) {
        console.log('อ้วนมาก / โรคอ้วนระดับ 1')
    } else if(BMI >= 18.50 && BMI <= 22.90) {
        console.log('ปกติ สุขภาพดี') 
    } else {
        console.log('น้ำหนักน้อย / ผอม')
    }
        
}
BMIs(170,45)
