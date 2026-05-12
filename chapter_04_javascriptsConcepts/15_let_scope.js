let a=10; //global scope
console.log(a);

function printHello(){
   console.log("Hello Test Academy");
   let a= 20; //local scope
   console.log(a);
   if(true){
    let a=30;
    console.log(a);
   }
   console.log("F ->", a);
}

console.log("G ->", a);

printHello();