const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');
    console.log(filesToString);
  });
};

module.exports.touch = (file) => {
    fs.writeFile('{file}', 'Hello ${file}', 'utf8', err => {
        if (err) throw err;
        console.log('created ${file} successfully');
      });
    };

module.exports.mkdir = (directory) => {
    fs.mkdirSync(${directory}, err=>{
        if (err) throw err;
        console.log('directory named ${directory} created');
    });
};