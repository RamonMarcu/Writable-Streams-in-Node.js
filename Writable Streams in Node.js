//app.js

const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('shoppingList.txt')
});


const fileStream = fs.createWriteStream('shoppingResults.txt');

let transformData = (line) => {
 fileStream.write(`They were out of: ${line}\n`); 
};

myInterface.on('line', transformData);

//bash

$ node app.js
shell-init: error retrieving current directory: getcwd: cannot access parent directories: No such file or directory
path.js:1142
          cwd = process.cwd();
                        ^

Error: ENOENT: no such file or directory, uv_cwd
    at Object.resolve (path.js:1142:25)
    at startup (bootstrap_node.js:129:32)
    at bootstrap_node.js:542:3
$ 