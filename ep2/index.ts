
function grade(homework: number, midterm: number, final: number) {
    let score: number = homework + midterm + final
    if (score < 50){
        return 'เกรด F'
    } else if(score < 60) {
        return 'เกรด D'
    } else if(score < 70){
        return 'เกรด C'
    }
}
console.log(grade(59, 0, 5))