arr = [1,2,4]

function avg(a,b,c){
    return a+b+c/3
}

//let a=  avg (...arr)


// Spread Operator
 //let a = [4 , 7,...arr,67];
 //let a = [...arr];
 //let a2 =[5,7,9];
 //let a =[...arr,...a2];
// console.log(a)
 let obj1 ={
    name: "Umar",
    class: "1c",
    lang: "JavaScript"
 }
 let obj2 ={...obj1 , lang: "Java"};
 console.log(obj2)