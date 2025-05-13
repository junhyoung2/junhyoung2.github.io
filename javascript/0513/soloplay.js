function greetuser(name, age){
    console.log(`안녕하세요, ${name}님! 나이는 ${age}살이시네요.`);

}
greetuser("준형", 25);



function addnumbers(a,b){
    const sum = a+b;
    return sum;
}
const result = addnumbers(5,7);
console.log("두수의 합은:",result);





let a = 5, b = 3, output;
console.log(output);


output=false;
output=1;
output="";
output="hello";
console.log(output);

b= --a;
console.log(b);

a= b++;
console.log(a,b);

output = a*b++;
console.log(output);
console.log(a,b,output);

output =a*--b;
console.log(a,b,output);

let message=null;

message =output + "is the result!";
console.log(message);

message = `$(output) is the result!`;
console.log(message);
console.log(typeof message);


console.log(7<=10);
console.log("z"<"x");
console.log("alpha"<"beta");

const name = "javascript";
console.log(name.tolowercase());
console.log(name.touppercase());




