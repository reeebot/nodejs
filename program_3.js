var fs = require('fs');

fs.readFile(process.argv[2],'utf-8', (error, data) => {
  if (error) return console.error("error");
  data = data.split('\n').length - 1;
  console.log(data);
});
