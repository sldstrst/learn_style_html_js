"use strict"

var array = [];
var n = 12;


function inputArray(array) {
    for (var i = 0; i < n; i++) {
        console.log(array[i].toFixed(1));
    }
}


function randomArray(array) {
    for (var i = 0; i < n; i++) {
        array[i] = Math.random() * 150;
    }
}


randomArray(array);


//sort Booble

var funcBooble = function boobleSort(arr, n) {
    for (var j = 0; j < n - 1; j++) {
        for (var i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var k = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = k;
            }
        }
    }
}


//sort Insert


var funcInsert = function sortInsert(arr, n) {
    for (var i = 0; i < n; i++) {
        var element = arr[i];
        var j = i;
        while (j > 0 && arr[j - 1] > element) {
            arr[j] = arr[j - 1];
            j -= 1;
        }
        arr[j] = element;
    }
}



//funcBooble(array, n);
funcInsert(array, n);





var funcQuick = function quickSort(arr, low, high, n) {
    var element = arr[i];
    n = arr.lenght;
    for (var i = 1; i < n; i++) {
        low = arr[0];
        high = arr[n - 1];
        if (arr[i] < element) {}
    }

}


//funcQuick(arr, arr[0], arr[n - 1], n)

inputArray(array);