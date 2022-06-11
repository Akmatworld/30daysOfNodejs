const fs = require('fs');

//you have to pass the Relative path of the file from the Current working directory.
fs.rename('new_data.txt', 'data.txt', (err) => {
	if (err)
		throw err;
	console.log('File renamed successfully');
});

//To check it's Asynchronous nature !
console.log("This method is Asynchronous");