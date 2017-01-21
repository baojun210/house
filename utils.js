//引入
import {readFile} from "fs";
//抛出
export const l = function(){
	return console.log(...arguments)
};

export const readFileAsync = path => new Promise((resolve,reject) =>{
	readFile(path,"utf-8",(err,file) =>{
		err && reject(err);
		resolve(file);
	})
});

export const createHtml = async ({title,styles,scripts,body,path}) =>
	`<!DOCTYPE html>
	<html>
		<head>
			<meta charset="utf-8" />
			<title>${title}</title>
			${styles.map(item =>`<link rel="stylesheet" href="${item}" />`).join("\n\t\t")}
		</head>
		<body>
			${await readFileAsync(path)}
			${body}
			${scripts.map(item => `<scripts src="${item}"></scripts>`).join("\n\t\t")}
		</body>
	</html>`;
