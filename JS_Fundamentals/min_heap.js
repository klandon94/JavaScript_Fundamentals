class Min_Heap{
    constructor(arr){
        this.heap = arr;
    }
    display(){
        console.log(this.heap);
    }
    swap(i, j){
        let temp = this.heap[i]
        this.heap[i] = this.heap[j]
        this.heap[j] = temp
    }
    insertIntoMinHeap(val){
        if (this.heap.length < 1) this.heap[1] = val;
        else{
            this.heap.push(val);
            let currentInd = this.heap.length - 1;
            let parentInd = Math.trunc(currentInd/2);
            while (this.heap[currentInd] < this.heap[parentInd]){
                this.swap(currentInd, parentInd)
                currentInd = parentInd;
                parentInd = Math.trunc(currentInd/2);
            }
        }
        return this;
    }
    removeFromMinHeap(){
        this.swap(1, this.heap.length-1)
        let popped = this.heap.pop()
        let parentInd = 1
        let child1Ind = parentInd * 2
        let child2Ind = parentInd * 2 + 1
        while (this.heap[parentInd] > this.heap[child1Ind] || this.heap[parentInd] > this.heap[child2Ind]){
            if (this.heap[child1Ind] < this.heap[child2Ind] || !this.heap[child2Ind]){
                this.swap(parentInd, child1Ind)
                parentInd = child1Ind   
            }
            else if (this.heap[child2Ind] < this.heap[child1Ind]){
                this.swap(parentInd, child2Ind)
                parentInd = child2Ind
            }
            child1Ind = parentInd * 2
            child2Ind = parentInd * 2 + 1
        }
        return popped
    }
}
let h1 = new Min_Heap([undefined, 3, 12, 8, 17, 13, 15, 10]);
let h2 = new Min_Heap([undefined, 8]);
// h1.insertIntoMinHeap(9)
console.log(h1.removeFromMinHeap())
console.log(h2.removeFromMinHeap())
h1.display();
h2.display();