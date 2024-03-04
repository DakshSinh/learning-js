function heapify(arr, N, i) {
    // largest root
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    // left child > root
    if (l < N && arr[l] > arr[largest])
        largest = l;

    // right child > largest
    if (r < N && arr[r] > arr[largest])
        largest = r;

    // largest is not root
    if (largest != i) {
        let swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        // recursion
        heapify(arr, N, largest);
    }
}

function printArray(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let pArr = [];
        pArr.push(arr[i]);
    }
    console.log(arr);
}

let arr = [12, 51, 11, 11, 13, 5, 6, 7];

console.log("Initial values of array ->")
printArray(arr, arr.length)

let firstIndex = arr.indexOf(11);
let lastIndex = arr.lastIndexOf(11);

console.log(`First 11 -> ${firstIndex}`);
console.log(`Second 11 -> ${lastIndex}`);

sort(arr);

console.log("Values of array after heap sort ->")
printArray(arr, arr.length);

console.log(`First 11 -> ${firstIndex}`);
console.log(`Second 11 -> ${lastIndex}`);

function sort(arr) {
    let val = arr.length;

    let start = Date.now();

    // build heap
    for (let i = (val / 2) - 1; i >= 0; i--)
        heapify(arr, val, i);

    // get element one by one
    for (let i = val - 1; i > 0; i--) {
        // current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // reduce heap
        heapify(arr, i, 0);
    }

    let end = Date.now();

    console.log(`Heap sort took ${end - start} milliseconds.`);
}