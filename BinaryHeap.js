class BinaryHeap{
    constructor(arr=[]){
        this.arr=arr

    }
    left(i){
        if( (2*i+1)<this.arr.length){
            return 2*i+1
        }else{
            return NaN
        }
       
    }
    right(i){
        if((2*(i+1))<this.arr.length){
            return 2*(i+1)
        }else{
            return NaN
        }
            
    }
    maxHeapify(i){
        const left=this.left(i)
        const right=this.right(i)
        let large=i
        if(!Number.isNaN(left)&&this.arr[left]>this.arr[i]&&(Number.isNaN(right)||this.arr[left]>=this.arr[right])){
            large=left
        }else if(!Number.isNaN(right)&&this.arr[right]>this.arr[i]&&this.arr[right]>=this.arr[left]){
            large=right
        }
        if(large!==i){
            [this.arr[i],this.arr[large]]=[this.arr[large],this.arr[i]]
            this.maxHeapify(large)
        }
        
    }
    buildMaxHeap(){
        const floor=Math.floor
        let j=floor((this.arr.length-2)/2)
        for(let i=j;i>=0;i--){
            this.maxHeapify(i)
        }
    }
    print(){
        console.log(this.arr)
    }
}


//test
/*
*
*
*let heap=new BinaryHeap([4,1,3,2,16,9,10,14,8,7])
*heap.buildMaxHeap()
*heap.print()
[ 16, 14, 10, 8, 7, 9, 3, 2, 4, 1 ]
*/