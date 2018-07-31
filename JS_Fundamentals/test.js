function heapify(arr){
    arr[arr.length] = arr[0];
    arr[0] = null;
    var currentIndex = Math.trunc((arr.length-1)/2);
    var childIndex = arr.length-2;
    var childIndex_2 = arr.length-1;
    var countIndex = currentIndex;
    while (countIndex>0){
        currentIndex = countIndex;
        childIndex = Math.trunc(currentIndex*2);
        childIndex_2 = childIndex + 1;
        while(arr[currentIndex]>arr[childIndex] || arr[currentIndex]>arr[childIndex_2]){
            if (arr[childIndex]<arr[childIndex_2] || !arr[childIndex_2]){
                arr = swap(arr, childIndex, currentIndex);
                currentIndex = childIndex;
                childIndex = Math.trunc(currentIndex*2);
                childIndex_2 = childIndex + 1;

            }
            else{
                arr = swap(arr, childIndex_2, currentIndex);
                currentIndex = childIndex_2;
                childIndex = Math.trunc(currentIndex*2);
                childIndex_2 = childIndex + 1;
            }
        }
        countIndex--;
    }
    return arr;
}
function heapRemove(heap){
    heap = swap(heap, 1, heap.length-1)
    min = heap.pop();
    var parentIndex = 1;
    var childIndex = Math.trunc(parentIndex*2);
    var childIndex_2 = Math.trunc(parentIndex*2) + 1;
    while(heap[parentIndex]>heap[childIndex] || heap[parentIndex]>heap[childIndex_2]){
        if (heap[childIndex]<heap[childIndex_2] || !heap[childIndex_2]){
            heap = swap(heap, childIndex, parentIndex);
            parentIndex = childIndex;
            childIndex = Math.trunc(parentIndex*2);
            childIndex_2 = childIndex + 1;
        }
        else{
            heap = swap(heap, childIndex_2, parentIndex);
            parentIndex = childIndex_2;
            childIndex = Math.trunc(parentIndex*2);
            childIndex_2 = childIndex + 1;
        }
    }
    return(min);
}
function swap(heap, i, j){
    let temp = heap[i];
    heap[i] = heap[j];
    heap[j] = temp;
    return heap;
}
function heapSortNew(arr){
    arr = heapify(arr);
    orilength = arr.length;
    let newArr = [];
    for (let i = 0; i<orilength-1; i++){
        newArr.push(heapRemove(arr));
    }
    return newArr;
}

console.log(heapify([[20,3,8,14,9,6,2]]))
console.log(heapRemove([undefined, 20,3,8,14,9,6,2]))