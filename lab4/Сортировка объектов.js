let arr = Array(
    { name: "Vladislav", surname: "Sinkovskiy", age: 13,  height: 140 },
    { name: "Lev", surname: "Ermolaev", age: 14,  height: 150},
    { name: "Avenir", surname: "Bochin", age: 25,  height: 189 },
);

function  getsortedArray(arr, key) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i][key] > arr[j][key]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
                }
            }
        }

    return arr;
}