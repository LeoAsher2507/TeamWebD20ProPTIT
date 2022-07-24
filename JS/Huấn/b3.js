var arr=[1,2,3,4,5,6,7,8,9,0];

function count(arr){
    var dem=0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(element%2==0){
            dem++;
        }
    }
    console.log(dem);
}

count(arr);