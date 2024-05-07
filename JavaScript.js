let num1 = prompt("Enter num1 value");
let num2 = prompt("Enter num2 value");
// let hcf;
// using for loop
// for(let i = 1; i <= num1 && i <= num2; i++){
// if(num1 % i ==0 && num2 % i == 0){
//   hcf = i;
// }
// }
// document.write(`${hcf}`);

// using while loop
while(num1 != num2){
  if(num1 > num2){
    num1 -= num2;
  }
  else{
    num2 -= num1;
  }
}
document.write(`The HCF is ${num1}`);