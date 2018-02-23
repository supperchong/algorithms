class Node{
	constructor({color='white',d=Infinity}={}){
		this.color=color
		this.d=d
	}
}
class Queue{
	constructor(arr=[]){
		this.arr=arr
	}
	enqueue(v){
		this.arr.push(v)
	}
	dequeue(){
		return this.arr.shift()
	}
	isEmpty(){
		return !this.arr.length
	}
}


/*邻接链表*/
let dj=[[1],[0,2],[1,3],[2,4,5],[3,5,6,7],[3,4,6],[4,5,7],[4,6]]
/*源节点*/
let source=2

/*所有节点*/
let nodes=[]
for(let i=0;i<dj.length;i++){
	nodes[i]=new Node()
}

let queue=new Queue([source])
nodes[source].color='black'
nodes[source].d=0
while(!queue.isEmpty()){
	let k=queue.dequeue()
	let node=nodes[k]
	for(let i=0;i<dj[k].length;i++){
		if(nodes[dj[k][i]].color=='white'){
			nodes[dj[k][i]].d=node.d+1
			nodes[dj[k][i]].color='black'
			queue.enqueue(dj[k][i])
		}
	}

}
console.log(nodes)