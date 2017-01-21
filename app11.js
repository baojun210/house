
require("./controller");

/* const i =9;
 let i =10;
console.log(i);
 */

/* let obj ={a : 1, b : 2 , c : 3 };
 let{a,b}=obj;
console.log(a,b,c);*/


// let arr =[1,3,4,5];
// let[dasdsadsa,dsadasdsaaaa,as,assa]=arr;

// console.log(dasdsadsa,as);


// let [a,...rest]=[1,2,3,4,5,6,7];
// console.log(a,rest);


// let {a,b} = {a:1,b:2,c:3,d:4};
// console.log(a,b);

// let arr =[{},function  () {}];
// let [aa,bb] =arr;
// console.log(aa,bb)
// // arr = [b,a];
// console.log(bb,aa);

// function l() {
// 	return console.log.apply(console,arguments);
// }
// function log() {
// 	return console.log(...arguments);
// }

// l(1,2,3,4);
// log(1,2,3,4);


// Array
// Array.prototype.s = function () {
// 	return this.splice(...arguments);
// };

// l([1,3,4].splice(1,2,"a","b"));
// log([1,3,4].s(1,2,"a","b"));


//Object
// Object.k = function () {
// 	return this.keys(...arguments);
// };

// l(Object.keys({a:1,b:2}));
// log(Object.k({a:1,b:2}));  


// var a = function(){
// 	console.log(arguments);
// };
// //arguments拿不到当前方法传入的参数
// const b = () => {
// 	console.log(this);
// } 
// a();  
// b();
// // node全局对象global
// l(global.console);


// function  A(){
// 	this.a = 233;
// 	let obj={
// 		a :1,
// 		//获取父级作用域的this指向
// 		b :() => {
// 			l(this.a);
// 		} 
// 	};
// obj.b();
// }
// new A();


// let gg;
// const show = ([a,b,...rest1],{d,f,...rest2}, e=0, ...rest3) => {
// 	l(a,b,rest1,d,f,rest2,e,rest3);
// }
// show([3,2,4],{d:1,f:6,g:7},gg = () =>{});


// 默认导出(只有一次) ,常规导出(可以多次)
// import  obj,             {A,B,C}               from "./controller";

// l(A);
// B(666);
// l(C());
// l(obj.b());
// l(obj.c.d());



//解构赋值允许指定默认值
// var [foo = true] = [];
// foo // true
// [x, y = 'b'] = ['a']; // x='a', y='b'
// [x, y = 'b'] = ['a', undefined]; // x='a', y='b'
// //ES6内部使用严格相等运算符（===），判断一个位置是否有值。
// //如果一个数组成员不严格等于undefined，默认值是不会生效的。
// var [x = 1] = [undefined];
// x // 1
// var [x = 1] = [null];
// x // null


// //对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// var { foo: baz } = { foo: "aaa", bar: "bbb" };
// baz // "aaa"
// foo // error: foo is not defined

// let {sin,cos,log} = Math;
// l(Math.sin);

// let {length: len} = 'hello';
// l(len)
// let [a,b,c,d,e] = 'hello';
// l(a,b,c,d,e);

// let{tostring: s} = 123;
// l(s === Number.prototype.tostring)

// l([[1,2,3],[4,5]].map(([a,b,c]) => a + b ));

// l([1,undefined,null,NaN,undefined].map(( x = 'yes') => x++));

// var json = {
// 	id : 42,
// 	status : "OK",
// 	data : [122,233]
// }
// let{ id, status, data:number} = json;
// l(id,status,number[0]);

// var map = new Map();
// map.set('first','hello');
// map.set('second','world');
// for(let [key, value] of map){
// 	l(key + ' is ' + value);
// 	l(map);
// }


//for...of遍历器可以识别0xFFFF的码点
// var text = String.fromCodePoint(0x20BB7);
// for (let i = 0; i < text.length; i++) {
//   console.log(text[i]);
// }
// // " "
// // " "
// for (let i of text) {
//   console.log(i);
// }
// // "𠮷"

// //at()识别0xFFFF的码点
// "𠮷".charAt();
// //"\uD842"
// "𠮷".at();
// //"𠮷"

//确定一个字符串是否包含在另一个字符串里
//原始js 使用indexOf方法
// includes();		返回布尔值，表示是否找到参数字符串
// startsWith();	返回布尔值，表示参数字符串是否在源字符串的头部
// endsWith();		返回布尔值，表示参数字符串是否在源字符串的尾部
// var ss = 'hello world!';
// l(ss.includes('d',3),
// ss.startsWith('he'),
// ss.endsWith('d!') ) ;
// //全输出true,支持第二个参数，表示开始查找的位置

//repeat()方法返回一个新的字符串，表示将原字符串重复n次
// l('hello'.repeat('undefined')); 
//参数如果是小数，向下取整。如果是Infinity或负数则会报错。
//如果是NaN等同于0. 如果是字符串转换成数字.

//padStart();padEnd();如果不够指定长度，会分别在字符串头部和尾部补全，
//第一个参数是指定的最小长度，第二个用来补全的字符串。

// function l(){
// 	return console.log(...arguments)
// };
const ajax = (url,{method,headers,body}) =>
	new Promise((resolve,reject) =>{
		const xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () =>{
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					resolve({
						json : () => new Promise((resolve,reject) => {
							try{
								resolve(JSON.parse(xhr.responseText))
							}catch(err){
								reject(err)
							}
						}),
						text : () => new Promise( resolve => {
							resolve(xhr.responseText)
						}) 
					});
				}else{
					reject(xhr.statusText);
				}
			}
		};
		xhr.open(method,url,1);
		for(let i in headers){
			xhr.setRequestHeader(i,headers[i]);
		}
		xhr.send(method === "get" ? null : body);	
	});

// ajax("api/test/get?len=2",{
// 	method : "get",
// 	headers : {
// 		"Content-Type":"text-plain"
// 	}
// }).then(({text}) =>text()).then(data =>{
// 	l(data);
// }).catch(err =>{
// 	l(err);
// })

// ajax("api/test/post",{
// 	method : "post",
// 	headers : {
// 		"Content-Type":"application/x-www-url-encoded"
// 	},
// 	body : "len=2"
// }).then(({text}) =>text()).then(data =>{
// 	l(data);
// }).catch(err =>{
// 	l(err);
// })



// (async () =>{
// 	try{
// 		console.log(await readFileAsync("./package.json"));
// 	}catch(e){
// 		l(e);
// 	};
// })();
import express from "express";
import {l, createHtml} from "./utils";
import router from "./controller";
import {SERVER_CONFIG} from "./config";
express()
.use(express.static("./static"))
.use(router)
// .get("/", async (req,res) =>{
// 	res.send(await createHtml({
// 		title : "首页",
// 		styles : [
// 			"/a.css"
// 		],
// 		scripts : [
// 			"/a.js"
// 		],
// 		body : "首页内容",
// 		path : "./pages/index.html"
// 	}));
// })
// .get("/activity", async (req,res) =>{
// 	res.send(await createHtml({
// 		title : "活动",
// 		styles : [
// 			"/b.css"
// 		],
// 		scripts : [
// 			"/b.js"
// 		],
// 		body : "活动内容",
// 		path : "./pages/activity.html"
// 	}));
// })
// .get("/", async(req,res) =>{
// 	//会同时查找文件，速度快
// 	res.send((await Promise.all([
// 			readFileAsync("./controller.js"),
// 			readFileAsync("./package.json"),
// 			readFileAsync("./server.js")
// 		])).join(""));
// 	//按顺序查找文件，速度略慢
// 	l(await readFileAsync("./controller.js"));
// 	l(await readFileAsync("./package.json"));
// 	l(await readFileAsync("./server.js"));
// })
.listen(SERVER_CONFIG.port);


