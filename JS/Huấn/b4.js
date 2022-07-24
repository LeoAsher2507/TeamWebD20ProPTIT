var arr=['A','C','A','A','B','D','B']

function Try(arr){
    var newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if(newArr.indexOf(arr[index]) === -1){
            newArr.push(arr[index]);
        }
    }
    console.log(newArr);
}
Try(arr);