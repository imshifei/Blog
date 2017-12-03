//console.log('hello world')

/*
async函数return出来的永远是promise函数
 */
/*
async function foo(){
	return 'abc'//相当于 return Promise.resolve('abc')
}
foo().then(r=>{
	console.log(r)
})
*/

/*
async function foo(){
	return Promise.reject('err')
	//throw 'err' 抛出字符串异常，不好
	//return new Error('error') 在then里面执行   貌似报错了
	//throw new Error('error') 在catch里面执行   貌似报错了
}
foo().then(r=>{
	console.log('then')
	console.log(r)
}).catch(e=>{
	console.log('catch')
	console.log(e)
})
*/





/*
以下两种实现方式的结果相同
// console.log(1)
// async function foo(){
// 	console.log(2)
// 	//const result= await Promise.resolve('123')
// 	const result=await new Promise((resolve,reject)=>{
// 		console.log(3)
// 		resolve('112')
// 		console.log(4)
// 	})
// 	console.log(result)
// }
// console.log(5)
// foo()
// console.log(6)

console.log(11)
async function foo(){
	console.log(22)
	new Promise((resolve,reject)=>{
		console.log(33)
		resolve('223')
		console.log(44)
	}).then(r=>{
		console.log(r)
	})
}
console.log(55)
foo()
console.log(66)
*/



/*
以下两种实现方式的结果相同
console.log(1)
async function foo(){
	console.log(2)
	const p=await new Promise((resolve,reject)=>{
		console.log(3)
		setTimeout(()=>{
			console.log(4)
			resolve('hello world111')
			console.log(5)
		})
	},9000)
	console.log(6)
	console.log(p)
}
console.log(7)
foo()
console.log(8)


// console.log(1)
// async function foo(){
// 	console.log(2)
// 	const p=new Promise((resolve,reject)=>{
// 		console.log(3)
// 		setTimeout(()=>{
// 			console.log(4)
// 			resolve('hello world')
// 			console.log(5)
// 		},9000)
// 	})
// 	p.then(r=>{
// 		console.log(6)
// 		console.log(r)
// 	})
	
// }
// console.log(7)
// foo()
// console.log(8)
*/



function foo(a,b,callback){
	if(a-b>0){
		callback(new Error('error'))
	}else{
		callback(null,a-b)
	}
}
const p=new Promise((rsv,rej)=>{
	foo(3,2,(err,result)=>{
		if(!err){
			rsv(result)
		}else{
			rej(err)
		}
	})
})
p
.then(console.log) //这样简写指的是接收resolve参数的结果
.catch(e=>{
	console.log('catch')
	console.log(e)
})