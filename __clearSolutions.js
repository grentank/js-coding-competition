const fs = require('fs');

fs.readdirSync('./tasks', 'utf-8').forEach((dir) => {
  fs.writeFileSync(`./tasks/${dir}/index.js`, 'module.exports = function () {};\n');
});
