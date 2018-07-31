function swap(a, i, j){
    let temp = a[i]
    a[i] = a[j]
    a[j] = temp
    return a
}

function removeFromHeap(heap){
    heap = swap(heap, 1, heap.length - 1)
    let popped = heap.pop()
    let parentInd = 1
    let child1Ind = parentInd * 2
    let child2Ind = parentInd * 2 + 1
    while (heap[parentInd] > heap[child1Ind] || heap[parentInd] > heap[child2Ind]){
        if (heap[child1Ind] < heap[child2Ind] || !heap[child2Ind]){
            heap = swap(heap, parentInd, child1Ind)
            parentInd = child1Ind   
        }
        else{
            heap = swap(heap, parentInd, child2Ind)
            parentInd = child2Ind
        }
        child1Ind = parentInd * 2
        child2Ind = parentInd * 2 + 1
    }
    console.log(heap)
    return popped
}

function heapify(arr){
    arr[arr.length] = arr[0]
    arr[0] = undefined
    let curr = Math.trunc((arr.length-1)/2)
    let child1, child2;
    let placeholder = curr;
    while (placeholder > 0){
        curr = placeholder
        child1 = curr*2
        child2 = curr*2 + 1
        if (arr[child1] && arr[curr] > arr[child1] || arr[child2] && arr[curr] > arr[child2]){
            if (arr[child1] < arr[child2]) swap(arr, curr, child1)
            else if (arr[child2] < arr[child1]) swap(arr, curr, child2)
        }
        placeholder--
    }
    return arr
}

function heapSort(arr){
    arr = heapify(arr)
    let length = arr.length
    let arr2 = []
    for (let i = 0; i < length-1; i++){
        arr2.push(removeFromHeap(arr))
    }
    return arr2
}

var arr1 = [20,3,8,14,9,6,2];
console.log(heapSort(arr1))