var arr=[0, 1, false, 2, undefined, '', 3, null];

var newArr = arr.filter(function(value){
    if(value != 0 && value != undefined && value != false && value != null && value != ' '){
        return true;
    }
    return false;
});

console.log(newArr)