function quick(arr,p=0,r=arr.length-1){
	if(p<r){
		var k=partion(arr,p,r);
		
		quick(arr,p,k-1);
		quick(arr,k+1,r);
	}
	

}
function partion(arr,p,r){
	var x=arr[r];
	var i=p-1;
	
	for(var j=p;j<r;j++){
		if(arr[j]<x){
			i++;
			var old=arr[j];
			arr[j]=arr[i];
			arr[i]=old;
		}
	}
	i++;

	arr[j]=arr[i];
	arr[i]=x;
	return i;

}
let arr=[2,8,7,1,3,5,6,4];
quick(arr);
console.log(arr)