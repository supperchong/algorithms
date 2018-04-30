const BinaryHeap=require('./BinaryHeap')
function heapSort(arr){
    let newArr=[...arr]
    let binaryHeap=new BinaryHeap(newArr)
    return binaryHeap.heapSort()
}
//console.log(heapSort([3,4,2,1,5,6,7]))