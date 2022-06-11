//Writing a File Asynchronously using nodejs
const fs =  require('fs');

const content= "this is the content in the file";
fs.writeFile('message.txt', content , (err) => {
	if (err) 
		throw err;
	console.log('It\'s saved!');
});