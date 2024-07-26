function ทหาร(sex: string, height: number ,weight: number){
    if(sex === 'male' && height > 170 || (weight > 50 && weight <= 110)){
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่ผ่านเกณฑ์')
    }
}

ทหาร('male', 170, 49)