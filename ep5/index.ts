const cars: string[] = ['Honda', 'Yamaha', 'Toyota', 'Suzuki', 'Mazda']
const num: number[] = [1,2,3,4,5]



for (let i = 0; i < cars.length; i++) {
    if(cars[i] === 'Yamaha'){
        console.log("รถซื้อแกง จะแรงได้ไง")  
    }
}
 
cars.forEach(function(c) {
    console.log(c)
})


for (let i = 0; i < 4; i++) {
    console.log(cars[i])
}
let i: number = 0
while (i < 4) {
    console.log(cars[i])
    i++
}


