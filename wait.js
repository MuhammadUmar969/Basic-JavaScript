// JavaScript Map
let a = [1,8,5,9];

let a2 = a.map((value)=>{
    return value*2;
})

console.log(a2);

// JavaScript Filter
let a3 = a.filter((value)=>{
  return value>6;
})
console.log(a3);

// JavaScript Reduce
let a4 = a.reduce((val1,val2)=>{
  return val1+val2;
})

console.log(a4);
// original array [1,8,5,9]
// First they add 1+8 = 9
//[9,5,9]
//9+5 = 14
//[14,9]
//14+9=23


// Triple Equality
if(1 === "1"){
    console.log("I am true");
}
else{
    console.log("I am false");    
}

