const obj = { a: 1, b: 2, c: 3, d: 4 }
var arr = ['a','c'];
function filterKey(arr){
    var newObj = Object.entries(obj);
    var res= newObj.filter(function(value){
        if(arr.indexOf(value[0])==-1){
            return true;
        }
        else return false;
    })
    var resObj = Object.fromEntries(res);
    console.log(resObj);
}
filterKey(arr);