//this function is used to compute tansition function  
//apply in  deterministic finite automaton
function computeTransitionFn(P,delta){
		let alphabet=[...new Set(delta)]
		let len=P.length
		let transitionObj={}
		for(let i=0;i<len+1;i++){
			transitionObj[i]={}
			let temp=transitionObj[i]
			let originWord=P.slice(0,i)
			for(const letter of alphabet){
				let curWord=originWord+letter
				let position=Math.min(len+1,i+2)
				let flag=true
				while(flag){
					position--
					if(curWord.endsWith(P.slice(0,position))){
						flag=false
						temp[letter]=position
					}
				}
			}
		}
		/**
		*eg:P='abc',delta='abc'
		*	transitionObj={ '0': { a: 1, b: 0, c: 0 },
		*				  '1': { a: 1, b: 2, c: 0 },
		*				  '2': { a: 3, b: 0, c: 0 },
		*				  '3': { a: 1, b: 4, c: 0 },
		*				  '4': { a: 5, b: 0, c: 0 },
		*				  '5': { a: 1, b: 4, c: 6 },
		*				  '6': { a: 7, b: 0, c: 0 },
		*				  '7': { a: 1, b: 2, c: 0 } }
		*/
		
		return function(curPosition,letter){
			return transitionObj[curPosition][letter]
		}
		
}
let transitionFn=computeTransitionFn('ababaca','abcmlo')
let word='cmloabacbababaca'
let curPosition=0
for(const letter of word){
	curPosition=transitionFn(curPosition,letter)
}

console.log(curPosition) //7