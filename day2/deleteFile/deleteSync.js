const fs = require('fs');

const filename = 'data.txt';

fs.unlinkSync(filename);
console.log('File Deleted Successfully');