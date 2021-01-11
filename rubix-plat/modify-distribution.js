var fs = require('fs');

const location = './static/js/'
var files = fs.readdirSync(location);

files.forEach(file => {
  if (file.startsWith('app') && file.endsWith('js')) {
    var absoluteFile = `${location}/${file}`
    fs.readFile(absoluteFile, 'utf8', function (err, data) {
      if (err) {
        return console.log(err);
      }
      var result = data.replace(/":\d+\/api"/, "`:${window.location.port}/api`");
      console.log(`Editing your file '${file}' with port '\${window.location.port}'`)
      fs.writeFile(absoluteFile, result, 'utf8', function (err) {
        if (err) return console.log(err);
      });
    });
  }
})

