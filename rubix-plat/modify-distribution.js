var fs = require('fs');

const location = './static/js/'
var files = fs.readdirSync(location);

var myArgs = process.argv.slice(2);

var port = 1414;

for (var i = 0; i < myArgs.length - 1; i++) {
  if (myArgs[i] === '--port') {
    port = myArgs[i + 1]
  }
}

console.log("|=======================|")
console.log(`|      PORT: ${port}       |`)
console.log("|=======================|")

files.forEach(file => {
  if (file.startsWith('app') && file.endsWith('js')) {
    var absoluteFile = `${location}/${file}`
    fs.readFile(absoluteFile, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/:\d+\/api/, `:${port}/api`);
      console.log(`Editing your file '${file}' with port '${port}'`)
      fs.writeFile(absoluteFile, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  }
})

