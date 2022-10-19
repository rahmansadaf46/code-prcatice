let number1 = 10;
let number2 = 11;

let max = (number1>number2)? number1: number2;
while(true){
    if(max%number1===0 && max%number2===0){
        break;
    }
    max++
}
console.log(max);