const fs = require('fs');

fs.readdirSync('./tasks', 'utf-8').forEach((dir, i) => {
  fs.writeFileSync(`./tasks/${i + 1}/index.js`, 'module.exports = function () {};\n');
});
