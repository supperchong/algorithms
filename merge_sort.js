function merge_sort(arr,p=0,q=arr.length-1){
	console.log('p',p)
	console.log('q',q)
	if(q-p==1){
		if(arr[p]>arr[q])
			[arr[p],arr[q]]=[arr[q],arr[p]]
	}else if(q-p>=2){
		let m=Math.floor((p+q)/2)
		merge_sort(arr,p,m)
		merge_sort(arr,m+1,q)
		merge(arr,p,m,q)
	}
}
function merge(arr,p,m,q){
	let a=arr.slice(p,m+1)
	let b=arr.slice(m+1,q+1)

	a[m+1]=Infinity
	b[q+1]=Infinity
	let flag_a=flag_b=0
	for(let i=0;i<q-p+1;i++){
		if(a[flag_a]>b[flag_b]){
			arr[i+p]=b[flag_b]
			flag_b++
		}else{
			arr[i+p]=a[flag_a]
			flag_a++
		}
	}

}
let a=[2,1,4,1,5,3]
merge_sort(a) 
console.log(a)