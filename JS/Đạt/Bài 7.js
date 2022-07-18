var string = "ahihi";
var repeatNum = 5;

console.log(myFunction (string, repeatNum));
function myFunction(text, num) {
    let arr = [num]
    for (let i=0; i<num; i++) arr[i] = string;
    return arr;
}