function repeatString(string,count){
    var tmpArr=[];
    for (let index = 0; index < count; index++) {
        tmpArr.push(string);
    }
    return tmpArr;
}

var newArr = repeatString('ahihi',3);
console.log(newArr);